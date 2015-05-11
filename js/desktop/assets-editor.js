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
					"multimedia": {
						"baseURL": "resources/multimedia",
						"paths": [
						"text!template.html",
						"text!edition.html",
						"editor",
						"player"
						]
					},
					"texto": {
						"baseURL": "resources/texto",
						"paths": [
						"text!edition.html",
						"text!template.html",
						"editor"
						]
					},
					"caixaDestaque": {
						"baseURL": "resources/caixaDestaque",
						"paths": [
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
					"json!config.json"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideSubCapa",
					"paths": [
					"json!config.json"
					]
				},

				"slideFinal": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideFinal",
					"paths": [
					"json!config.json"
					]
				},

				"temp01": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp01",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp02": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp02",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp03": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp03",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp04": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp04",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp05": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp05",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp06": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp06",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp07": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp07",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp08": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp08",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp09": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp09",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp10": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp10",
					"paths": [						
					"json!config.json"						
					]
				},

				"temp11": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/standard/pv1-2/temp11",
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
				},

				"botaoRD": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/botaoRD",
					"paths": [
					"text!template.html",
					"text!edition.html",
					"json!config.json",
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