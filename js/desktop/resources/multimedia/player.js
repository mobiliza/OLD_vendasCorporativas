define([], function() {

	var multimedia = function(template, data) {
		var me = this;
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

			 this.iframe = $multimedia.attr('src', 'about:blank');
			 this.src = src;

		

			
		}

	

		this['in'] = function() {

			
			me.iframe.attr('src', me.src);
		}

		this['out'] = function() {

			
			me.iframe.attr('src', 'about:blank');
			
		}
	}

	return multimedia;
});