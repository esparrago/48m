module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' 	  : 'sass/style.scss',
					'style/proyecto.css'  : 'sass/proyecto.scss',
					'style/chat.css'      : 'sass/chat.scss',
					'style/registro.css'  : 'sass/registro.scss',
					'style/perfil.css'    : 'sass/perfil.scss'
				}
			}
		},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}