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
			console.log('initialization slidesimples -------', this);

			this.addElements({
				'imgPicker': '#slideImgPicker',
				'imgEdit': '#slideImgEditar'
			});

			this.events = _.extend(this.events, {
				'click _imgPicker': 'pickImage',
				'click _imgEdit': 'editImage'
			});

			_.bindAll(this, 'handlerPickedImage', 'handlerEditedImage');

		},

		showing: function() {
			console.log('showing slidesimples', this);
			var me = this,
				model = me.recView.model;

			this.recView.addElements.call(this.recView, {
				'img': 'img'
			});

			this.recView.delegateEvents();
			console.log('showing slidesimples', this);
		},

		hiding: function() {
			var me = this,
				$content = me.recView.elems.$content;

			// #1
			// Retirado eventos inseridos nos elementos do recurso a ser editado
			// $content.off('dblclick');
		},

		pickImage: function() {
			console.log('pickImage ------- ');

			var fileManager = window.Editor.Views.Modals.fileManager;

			fileManager.show({
				type: 1,
				callback: this.handlerPickedImage
			});
		},

		handlerPickedImage: function(data) {
			console.log('[rec]image [method]handlerPickedImage [var]this.recView: ', this.recView);
			var me = this,
				recView = this.recView,
				model = recView.model,
				$img = recView.elems.$img,
				url = data.path;

			// data.path = "http://images.aviary.com/imagesv5/feather_default.jpg";

			model.set({
				"baseImg": url,
				"background.src": ""
			}, {
				silent: true
			});

			console.log('[rec]image [method]handlerPickedImage [var]$img', $img);
			Editor.Views.Modals.aviary.show({
				$el: $img,
				src: data.path,
				callback: me.handlerEditedImage,
				allowCropByImage: false
			});
			// Editor.Views.Modals.aviary.show($img, data.path, me.handlerEditedImage, 'false');
		},

		editImage: function() {
			console.log('[rec]image [method]editImage: ');
			var me = this,
				model = this.recView.model,
				baseImg = model.get('baseImg'),
				$img = me.recView.elems.$img;

			console.log('[rec]image [method]editImage [var]$img, baseImg', $img, baseImg);
			Editor.Views.Modals.aviary.show({
				$el: $img,
				src: baseImg,
				callback: me.handlerEditedImage,
				allowCropByImage: false
			});
		},

		handlerEditedImage: function(data) {
			console.log('[rec]image [method]handlerEditedImage: ', data, this);
			var me = this,
				recView = this.recView,
				model = this.recView.model;

			model.set({
				'background.src': data.url
			});

			/* função que copia para s3 os arquivos do curso e percisa do modelo do recurso, 
			path para arquivo a ser copiado e atributo que vai ser alterado na finalização */
			me.copyToS3({
				entity: "slides",
				type: "image",
				model: model,
				src: data.url,
				attr: "background.src",
				options: data.resize ? data.resize : null
			});
		},

		// editContent: function() {
		// 	console.log('editContent');
		// 	var me = this.edition, //Eventos atrelados a view do recurso tem que voltar a ter a referencia a view da edição
		// 		//Pametros necessários para que o metodo de textEdition funcione
		// 		params = {
		// 			$el: me.recView.elems.$content, //Elemento wrapped pelo jquery					 
		// 			attr: 'title', //atributo do modelo
		// 			maxChars: 15, //maximo de caracteres
		// 			enterLeave: true, // Entre sai do modo edição
		// 			blur: true, // blur sai do modo edição
		// 			textEditor: {
		// 				position: "bottom", //posição do editor de texto
		// 				options: [ //opções do editor de texto
		// 					'bold',
		// 					'italic',
		// 					'underline',
		// 					'removeFormat',
		// 					'spellchecker'
		// 				]
		// 			}
		// 		};

		// 	//Metodo que é exposto para edição de textos
		// 	me.textEdition(params);
		// }
	};

	return View;
});