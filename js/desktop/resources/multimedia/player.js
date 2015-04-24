define([], function() {

	var multimedia = function(template, data) {
		// var me = this;
		this.init = function() {
			/*Checar Função compile para observar que objetos são atrelados ao objeto principal
			- this.template
			- this.data
			- this.compiled
			- this.el
			- this.$el
			*/
			
			$.extend(true, this, new Player.Helpers.resourceExtend(this, arguments));

			var multimedia = this,
				$multimedia = multimedia.$el.find('iframe'),
				src = $multimedia.attr('src');

			 this.iframe = $multimedia.attr('src');
			 this.src = src;

		

			
		}

	

		this['in'] = function() {

			
			iframe.attr('src', src);
		}

		this['out'] = function() {

			
			iframe.attr('src', 'about:blank');
			
		}
	}

	return multimedia;
});