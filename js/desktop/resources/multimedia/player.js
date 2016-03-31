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
			
			$.extend(true, me, new Player.Helpers.resourceExtend(this, arguments));

			var $multimedia = me.$el.find('iframe'),
				src = $multimedia.attr('src');

			me.iframe = $multimedia;
			me.src = src;

		}

		this['in'] = function() {
			var index = me.data.index,
				tabParent = me.$el.closest('.tab-content').length,
				isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

				// fix edge to Firefox
				if (!isChrome) {
					if (tabParent == 1) {
						window.setTimeout(function(){
							me.iframe.attr('src', me.src);
						}, 500);
					}else{
						window.setTimeout(function(){
							me.iframe.attr('src', me.src);
						}, index*500);
					}
				}else{
					me.iframe.attr('src', me.src);
				}
		}

		this.out = function() {
			me.iframe.attr('src', 'about:blank');
			// console.log('fooo iframe out');
		}
	}

	return multimedia;
});