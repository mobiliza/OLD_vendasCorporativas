module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		date: Date.now(),

		// CONFIG ===================================/

		requirejsEditor: {},

		requirejs: {
			editor: {
				// compile: {
				options: {
					wrap: true,
					namespace: 'player',
					optimize: 'none',
					preserveLicenseComments: false,
					baseUrl: "./js/desktop/",
					mainConfigFile: "./js/desktop/assets-editor.js",
					name: "../../../../../vendor/components/almond/almond",
					include: ['assets-editor'],
					out: "./_dist/js/assets.editor.min.js"
				}
				// }
			},

			desktop: {
				// compile: {
				options: {
					optimize: 'none',
					preserveLicenseComments: false,
					baseUrl: "./js/desktop/",
					mainConfigFile: "./js/desktop/main.js",
					name: "../../../../../vendor/components/almond/almond",
					include: ['main'],
					out: "_dist/js/main.desktop.min.js"
				}
				// }
			}
		},

		removelogging: {
			editor: {
				src: "./_dist/js/assets.editor.min.js",
				dest: "./_dist/js/assets.editor.min.js",
				options: {}
			},

			desktop: {
				src: "_dist/js/main.desktop.min.js",
				dest: "_dist/js/main.desktop.min.js",
				options: {}
			}
		},

		uglify: {
			editor: {
				files: {
					'./_dist/js/assets.editor.min.js': './_dist/js/assets.editor.min.js'
				}
			},

			desktop: {
				files: {
					'_dist/js/main.desktop.min.js': '_dist/js/main.desktop.min.js'
				}
			}
		},

		watch: {
			scripts: {
				files: [
					'./js/**/*.js',
					'./js/**/*.html',
					'./js/**/*.json',

					'../_base/js/**/*.js',
					'../_base/js/**/*.html',
					'../_base/js/**/*.json'
				],
				tasks: ['requirejs'],
				options: {
					spawn: false,
				},
			},

			css: {
				files: [
					'./css/**/*.scss',
				],
				tasks: ['compass', 'cp'],
				options: {
					spawn: false,
				},
			}
		},

		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					cwd: 'css/assets/images',
					src: ['**/*.{png,jpg,gif}'],
					dest: '_dist/css/assets/images'
				}]
			}
		},

		copy: {
			main: {
				files: [
					{
						expand: true,
						cwd: '../_base/css/assets',
						src: '**/*.*',
						dest: '_dist/css/assets'
					},

					{
						expand: true,
						cwd: 'css',
						src: '*.css',
						dest: '_dist/css'
					},

					{
						expand: true,
						cwd: 'css',
						src: 'PIE.htc',
						dest: '_dist/css'
					},

					{
						expand: true,
						cwd: 'css/assets/fonts',
						src: '**/*',
						dest: '_dist/css/assets/fonts'
					},

					{
						expand: true,
						cwd: './themes',
						src: '*.css',
						dest: '_dist/'
					}
				]
			}
		},

		preprocess: {
			options: {
				context: {
					PROD: true
				}
			},

			multifile: {
				files: {
					'_dist/index.html': 'index.html'
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'css/sass',
        			cssDir: 'css'
				}
			}
		}

	});

	// DEPENDENT PLUGINS =========================/

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-preprocess');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-remove-logging');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// TASKS =====================================/

	// grunt.registerTask('resourcesEditor', ['requirejs']);
	grunt.registerTask('reqjs', ['requirejs','uglify']);
	grunt.registerTask('watchJS', ['watch']);
	grunt.registerTask('imgmin', ['imagemin']);
	grunt.registerTask('cp', ['copy']);
	grunt.registerTask('process', ['preprocess']);
	grunt.registerTask('compas', ['compass']);

	grunt.registerTask('builddev', ['compas', 'reqjs', 'cp', 'process']);
	grunt.registerTask('build', ['compas', 'reqjs', 'removelogging', 'uglify', 'imgmin', 'cp', 'process']);

};