require.config({

	urlArgs: "bust=" + (new Date()).getTime(),

	shim: {
		mustache: {
			exports: 'Mustache'
		},

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
		},

		modernizr: {
			exports: 'Modernizr'
		},

		swipe: {
			exports: 'Swipe'
		},

		tooltipster: {
			deps: [
				'jquery'
			]
		},

		videojs: {
			exports: 'videojs'
		},

		videojsyoutube: {
			exports: 'videojs.Youtube',
			deps: [
				'videojs'
			]
		},

		videojsvimeo: {
			exports: 'videojs.Vimeo',
			deps: [
				'videojs'
			]
		},

		zoom: {
			deps: [
				'jquery'
			]
		}

	},

	paths: {
		player: '../../../../_baseClient/_base/js/desktop/player',
		jquery: '../../../../../vendor/components/jquery/dist/jquery.min',
		jqueryUICore: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.core',
		jqueryUIWidget: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.widget',
		jqueryUITabs: '../../../../../vendor/components/jquery.ui/ui/jquery.ui.tabs',
		mustache: '../../../../../vendor/components/mustache/mustache',
		modernizr: '../../../../../vendor/components/modernizr/modernizr',
		json: '../../../../../vendor/components/require-plugins/src/json',
		text: '../../../../../vendor/components/requirejs-text/text',
		namespace: '../../../../../vendor/components/namespace/namespace',
		swipe: '../../../../../vendor/components/swipe/swipe',
		tooltipster: '../../../../../vendor/components/tooltipster/js/jquery.tooltipster.min',
		videojs: '../../../../../vendor/components/video.js/dist/video-js/video',
		videojsyoutube: '../../../../../vendor/components/videojs-youtube/dist/vjs.youtube',
		videojsvimeo: '../../../../../vendor/components/videojs-vimeo/vjs.vimeo',
		zoom: '../../../../../vendor/components/jquery-zoom/jquery.zoom.min'

	},

	config: {
		namespace: {
			"overrides": {
				"config": {
					"baseURL": "../../config",
					"paths": [
						"json!general.json",
						"json!selectors.json"
					]
				},

				"main": {
					"baseURL": "../../../../_baseClient/padrao2/js/desktop/main",
					"paths": [
						"player",
						"text!template.html"
					]
				}
			},

			"functions": {
				"baseURL": "../../../../../player/_base/js/functions",
				"paths": [
					"ajax",
					"compileTemplate",
					"compile",
					"findSlideByVar",
					"findResource",
					"buildContent",
					"animateEl",
					"generalInit",
					"delegateEvents",
					"animate"
				]
			},

			"polyfill": {
				"baseURL": "../../../../../player/_base/js/polyfill",
				"paths": [
					"isArray"
				]
			},

			"helpers": {
				"baseURL": "../../../../../player/_base/js/helpers",
				"paths": [
					"namespace",
					"decode",
					"parser",
					"isJSON",
					"isLocked",
					"resourceExtend",
					"getQueryVariable",
					"base64Decode",
					"serializeJSON",
					"csslizeJSON",
					"removeClass",
					"sortByProperty",
					"rgbaToHex",
					"arrayCompare",
					"findRecbyData"
				]
			},

			"components": {
				"baseURL": "../../../../../player/_base/js/components",
				"paths": [
					"recSequentialEntry",
					"modal",
					"swipe",
					"tooltipster"
				]
			},

			"scorm": {
				"baseURL": "../../../../../player/_base/js/scorm",
				"paths": [
					"initScorm",
					"getScormValue",
					"setScormValue",
					"readScormVars",
					"saveScormData",
					"endScorm"
				]
			},

			"scormWrapper": {
				"baseURL": "../../../../../player/_base/js/scorm/wrapper",
				"paths": [
					"options",
					"doLMSInitialize",
					"doLMSFinish",
					"doLMSGetValue",
					"doLMSSetValue",
					"doLMSCommit",
					"doLMSGetLastError",
					"doLMSGetDiagnostic",
					"LMSIsInitialized",
					"ErrorHandler",
					"getAPIHandle",
					"findAPI",
					"getAPI",
					"computeTime",
					"convertTotalSeconds"
				]
			},

			"config": {
				"baseURL": "../../../../_baseClient/_base/config",
				"paths": [
					"json!general.json",
					"json!selectors.json"
				]
			},

			"main": {
				"baseURL": "../../../../_baseClient/_base/js/desktop/main",
				"paths": [
					"text!template.html",
					"player"
				]
			},

			"resources": {
				"caixaDestaque": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/caixaDestaque",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"imagem": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/imagem",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"botaoPP": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/botaoPP",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"player"
					]
				},

				"video": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/video",
					"paths": [
						"text!template.html",
						"player",
						"generalInit"
					]
				},

				"texto": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/texto",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"atividade": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/atividade",
					"paths": [
						"text!template.html",
						"text!modal.html",
						"player"
					]
				},

				"audio": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/audio",
					"paths": [
						"text!template.html",
						"player",
						"generalInit"
					]
				},

				"multimedia": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/multimedia",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"tabs": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/tabs",
					"paths": [
						"text!template.html",
						"player",
						"generalInit"
					]
				},

				"personagem": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/resources/personagem",
					"paths": [
						"text!template.html",
						"player"
					]
				}
			},

			"slides": {
				"default": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/default",
					"paths": [
						"text!template.html"
					]
				},

				"slideCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideFinal": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideFinal",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideSubCapa": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideSubCapa",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"templateVideo": {
					"baseURL": "slides/templateVideo",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"templateAtividade": {
					"baseURL": "slides/templateAtividade",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"templateTexto": {
					"baseURL": "slides/templateTexto",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"templateAudio": {
					"baseURL": "slides/templateAudio",
					"paths": [
						"text!template.html",
						"player"
					]
				},

				"slideTextoImagemDir": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideTextoImagemDir",
					"paths": [
					]
				},

				"slideTextoImagemEsq": {
					"baseURL": "../../../../_baseClient/_base/js/desktop/slides/slideTextoImagemEsq",
					"paths": [
					]
				}
			}
		}
	}
});

require([
	"player"
	], function(Player) {
	'use strict';

	/*jQuery(window).load(function() {
		alert("page finished loading now.");
	});*/
});