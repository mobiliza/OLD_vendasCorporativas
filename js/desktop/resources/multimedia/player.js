define([], function() {

	var multimedia = function(template, data) {
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

			this.iframe = $multimedia;
			this.src = src;
			
		}


		console.log('[rec]multimedia [method]init [var]this', this);

		// this['in'] = function() {
		// 	this.iframe.attr('src', this.src);
		// }

		// this['out'] = function() {
		// 	this.iframe.attr('src', 'about:blank');
		// }
	}

	return multimedia;
});