define([
	'jquery'
	], function($) {

	var slideSimples = function() {
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
				- this.template
				- this.data
				- this.compiled
				- this.el
				- this.$el
			*/
			var slide = this;
		}

		this.addResource = function($rec) {
			console.log('addResource');
			var slide = this;
			slide.$el.append($rec);
		}

	}

	return slideSimples;
});
