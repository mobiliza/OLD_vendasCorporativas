require.config({
	shim: {
		jquery: {
			exports: '$'
		},

		jqueryUICore: {
			deps: [
				'jquery',
			]
		},

		jqueryUIWidget: {
			deps: [
				'jquery',
				'jqueryUICore',
			]
		},

		jqueryUITabs: {
			deps: [
				'jquery',
				'jqueryUICore',
				'jqueryUIWidget'
			]
		}
	},
	paths: {
		jquery: '../../../../../vendor/components/jquery/dist/jquery.min',
		jqueryChanges: '../../../../../vendor/changes/jquery/jqueryChanges',
		jqueryUICore: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.core',
		jqueryUIWidget: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.widget',
		jqueryUITabs: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.tabs',
		image: '../../../../../vendor/components/require-plugins/src/image',
		json: '../../../../../vendor/components/require-plugins/src/json',
		text: '../../../../../vendor/components/requirejs-text/text',
		namespace: '../../../../../vendor/components/namespace/namespace',
		videojs: '../../../../../vendor/components/video.js/dist/video-js/video',
		videojsyoutube: '../../../../../vendor/components/videojs-youtube/dist/vjs.youtube',
		videojsvimeo: '../../../../../vendor/components/videojs-vimeo/vjs.vimeo'
	},

	config: {
		namespace: {
			"overrides": {
				"config": {
					"stage": {
						"baseURL": "../../config/stage",
						"paths": [
							"json!main.json"
						]
					}
				},

				"resources": {
					"botaoPP": {
						"baseURL": "resources/botaoPP",
						"paths": [
							"text!edition.html"
						]
					},
					"texto": {
						"baseURL": "resources/texto",
						"paths": [
							"text!edition.html",
							"text!template.html"
						]
					}

				}
			},

			"config": {
				"slides": {
					"baseURL": "../../config/slides",
					"paths": [
						"json!config.json"
					]
				},

				"stage": {
					"baseURL": "../../../../_baseClient/_base/config/stage",
					"paths": [
						"json!main.json",
						"json!modal.json",
						"json!tabs.json"
					]
				}
			},

			"slides": {
				"slideCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideCapa",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideFinal": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideFinal",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideSubCapa",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor"
					]
				},

				"templateVideo": {
					"baseURL": "slides/templateVideo",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor",
						"text!edition.html"
					]
				},

				"templateAtividade": {
					"baseURL": "slides/templateAtividade",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor",
						"text!edition.html"
					]
				},

				"templateTexto": {
					"baseURL": "slides/templateTexto",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor",
						"text!edition.html"
					]
				},

				"templateAudio": {
					"baseURL": "slides/templateAudio",
					"paths": [
						"text!template.html",
						"json!config.json",
						"editor",
						"text!edition.html"
					]
				},

				"slideTextoImagemDir": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideTextoImagemDir",
					"paths": [
						"json!config.json"
					]
				},

				"slideTextoImagemEsq": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideTextoImagemEsq",
					"paths": [
						"json!config.json"
					]
				}
			},

			"resources": {
				"audio": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/audio",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"multimedia": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"caixaDestaque": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"imagem": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/imagem",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"video": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/video",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"texto": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/texto",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"botaoPP": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/botaoPP",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},

				"atividade": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/atividade",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"text!edition.html",
						"json!config.json",
						"editor"
					]
				},
				
				"tabs": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/tabs",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"json!config.json",
						"editor",
						"generalInit"
					]
				},

				"personagem": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/personagem",
					"paths": [
						"text!template.html",
						"text!edition.html",
						"editor"
					]
				}
			}
		}
	}
});

require([
	"jquery",
	"jqueryChanges",
	"namespace!overrides",
	"namespace!config",
	"namespace!slides",
	"namespace!resources"
], function($, jqueryChanges, Overrides, Config, Slides, Resources) {

	var namespaces = {
			config: Config,
			slides: Slides,
			resources: Resources
		},
		Player = {
			"Base": $.extend(true, {}, namespaces),
			"Overrides": Overrides,
			"_base": Config,
			"Slides": Slides,
			"Resources": Resources
		};

	$.extend(true, namespaces, Overrides);

	window.Player = Player;

	/*
	Não é a solução mais bonita mais eventos não funcionavam e escutar o carregamento deste
	script no editor com "onLoad" só apontava que o arquivo foi devidamente carregado e não
	que tinah sido executado entregando windo.Player
	*/
	(window.loadedAssets) ? window.loadedAssets() : null;
});