define([], function() {

	var View = {
		/*
		O objecto 'elemens' foi criado para separa em um objeto chamado elems atrelado a view
		todos os elementos que precisaram tratamento funcional.
		Os elementos são criados em pares com e sem o wrapper do jquery e nomeados com e som '$'.

		No objecto temos '<nome do objecto no elems>': '<seletor de busca atravez do $.find()>'
		ex: 'teste': '.verde' criará 'verde' e '$verde' no elems procurando por $.find('verde')

		Obs: todos tem main/$main no elems que representa o elemento geral		

		
		Aqui foi criada uma interface para criação de novas edições de recursos.
		Os verdadeiros metodos da view(render, initialize) foram abstraidos em um recurso genérico
		que serve de base para a criaão de todos os recursos e aqui fica as partes espicifas a edição
		deste recurso expecifico.

		Metodos disparados:
			- initializating: Ao final do initialiaze da view
			- showing: Ao final das funções de exibição do painel de edição
			- hiding: Ao final das funções de escondeimento do painel de edição
			- positioning: Ao final das funções de posicionamento
		*/

		initializating: function(e) {
			console.log('initialization imagem -------', this);
			var me = this;

			this.addElements({
				'multimediaPicker': '#recMultimediaPicker',
				'URL': '#editionVideoURL',
				'ok': '#editionVideoOk',
				'addLinkMultBtn': '#editionExternalLink',
				'inputMultBox': '.mbInputMultBox',
				'editionMultURL': '#editionMultURL'
			});

			this.events = _.extend(this.events, {
				'click _multimediaPicker': 'fileManeger',
				'click _ok': 'setSource',
				'click _addLinkMultBtn': 'addExternalLink'
			});

			_.bindAll(this, 'handlerPickedMultimedia');

			/*
			Processo de renderização irá ocorrer após o encerramento das ações de inicialização
 			*/
		},

		showing: function() {
			console.log('showing texto', this);
			var me = this,
				model = me.recView.model;

			this.recView.delegateEvents();
		},

		addExternalLink: function() {
			var me = this,
				$btnInsertLink = this.elems.$addLinkMultBtn,
				$inputMultBox = this.elems.$inputMultBox;

			if ($btnInsertLink.hasClass('actived')) {
				$btnInsertLink.removeClass('actived');
			} else {
				$btnInsertLink.addClass('actived');
			}

			$inputMultBox
				.toggle();
		},

		setSource: function() {
			var me = this,
				model = me.recView.model,
				$editionMultURL = me.elems.$editionMultURL,
				value = $editionMultURL.val();

			console.log('[rec]multimedia [method]setSource [var]value: ', value, me);
			model.set('src', value);
		},

		fileManeger: function() {
			var fileManager = window.Editor.Views.Modals.fileManager;

			fileManager.show({
				type: 2,
				callback: this.handlerPickedMultimedia
			});
		},

		handlerPickedMultimedia: function(data) {
			console.log('[rec]audio [method]handlerPickedMultimedia: ', data);
			var me = this,
				recView = this.recView,
				url = data.path,
				folder = url.substr(0, url.lastIndexOf('/') + 1),
				file = url.substr(url.lastIndexOf('/') + 1),
				model = this.recView.model;

			/* função que copia para s3 os arquivos do curso e percisa do modelo do recurso, 
			path para arquivo a ser copiado e atributo que vai ser alterado na finalização */

			me.copyToS3({
				entity: "resources",
				type: "external",
				model: model,
				src: folder,
				attr: "src",
				callback: function(data) {
					model.set('src', data.dest + "/" + file);
				}
			});
		}
	};

	return View;
});