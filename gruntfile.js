'use strict';
module.exports = function( grunt ) {
	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		banner: '/*!\n' +
				' * <%= pkg.themeName %> Version <%= pkg.version %> (<%= pkg.homepage %>)\n' +
				' * Copyright 2016 <%= pkg.author.name %>\n' +
				' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
				' */\n',
		themeheader: 	'/*\n' +
						'Theme Name: <%= pkg.themeName %>\n' +
						'Theme URI: <%= pkg.homepage %>\n' +
						'Author: <%= pkg.author.name %>\n' +
						'Author URI: <%= pkg.author.url %>\n' +
						'Description: <%= pkg.description %>\n' +
						'Version: <%= pkg.version %>\n' +
						'License: <%= pkg.license.name %>\n' +
						'License URI: <%= pkg.license.url %>\n' +
						'Text Domain: <%= pkg.textdomain %>\n' +
						'Domain Path: /languages/\n' +
						'Tags:\n' +
						'*/',

		clean: {
			scripts: [
				'dist/script.js',
				'dist/script.min.js'
			],
			stylesheets: [
				'style.css'
			],
			pot: [
				'languages/<%= pkg.textdomain %>.pot'
			]
		},
		imagemin : {
			dynamic : {
				files : [{
					expand : true, // Enable dynamic expansion
					cwd : 'img/src', // source images (not compressed)
					src : ['**/*.{png,jpg,gif}'], // Actual patterns to match
					dest : 'dist/img' // Destination of compressed files
				}]
			}
		}, //end imagemin
		concat: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: [
				
					'skip-link-focus-fix.js',
					'customizer.js',
					'js/script.js'					
				],
				dest: 'dist/js/script.js'
			}
		},

		uglify: {
			options: {
				preserveComments: 'some',
				report: 'min'
			},
			dist: {
				src: '<%= concat.dist.dest %>',
				dest: 'dist/js/script.min.js'
			}
		},

		sass : {
			dist : {
				files : {
					'style.css' : 'sass/style.scss'
				}
			}
		}, //end of sass
		postcss: {
            options: {
                map: {inline: false, // save all sourcemaps as separate files...
				},
                processors: [
                   require('autoprefixer')(), // add vendor prefixes
        		   require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'style.css'
            }
        },
		usebanner: {
			options: {
				position: 'top',
				banner: '<%= banner %>'
			},
			files: {
				src: '*.css'
			}
		},

		replace: {
			dist: {
				src: ['style.css'],
				overwrite: true,
				replacements: [{
					from: /((?:\/\*(?:[^*]|(?:\*+[^*\/]))*\*+\/)|(?:\/\/.*))/,
					to: '<%= themeheader %>'
				}]
			},
			init: {
				src: [
					'bower.json',
					'layouts/*.php',
					'inc/*.php',
					'custom-pages/*.php',
					'template-parts/*.php',
					'*.php'
				],
				overwrite: true,
				replacements: [{
					from: 'sfp',
					to: '<%= pkg.classPrefix %>'
				}, {
					from: 'sfp',
					to: '<%= pkg.constantPrefix %>'
				}, {
					from: 'sfp',
					to: '<%= pkg.functionPrefix %>'
				}, {
					from: 'sfp',
					to: '<%= pkg.textdomain %>'
				}]
			}
		},
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['scripts'],
				options : {
					spawn : false
				}
			},
			images : {
				files : ['img/src/**/*.{png,jpg,gif}'],
				tasks : ['newer:imagemin']
			}, // watch images added to src
			stylesheets: {
				files: ['sass/**/*.scss'],
				tasks: ['stylesheets'],
				options : {
					spawn : false
						}
			}
		},
		browserSync : {
			dev : {
				bsFiles : {
					src : ['*.css', 'img/*.*', 'dist/js/script.min.js', '*.php', 'includes/*.php', 'custom-pages/*.php', '!.sass-cache']
				},
				options: {
                    watchTask: true,
                    debugInfoe: true,
					logConnections: true,
					notify: true,
					proxy: "localhost/projekty/<%= pkg.textdomain %>"
                }
			}
		},
		grunt : {
				files : ['gruntfile.js']
			}

	});

	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks( 'grunt-banner' );
	grunt.loadNpmTasks( 'grunt-text-replace' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-browser-sync');	

	grunt.registerTask( 'scripts', [
		'clean:scripts',
		'concat',
		'uglify'
	]);

	grunt.registerTask( 'stylesheets', [
		'clean:stylesheets',
		'sass',
		'postcss:dist',
		'usebanner'
	]);

	grunt.registerTask( 'default', [
		'browserSync',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'scripts',
		'stylesheets',
		'replace:dist'
	]);

	grunt.registerTask( 'setup', [
		'replace:init',
		'bower-install',
		'build'
	]);

	grunt.registerTask( 'bower-install', function() {
		var done = this.async();
		var bower = require( 'bower' ).commands;
		bower.install().on( 'end', function( data ) {
			done();
		}).on( 'data', function( data ) {
			console.log( data );
		}).on( 'error', function( err ) {
			console.error( err );
			done();
		});
	});
};