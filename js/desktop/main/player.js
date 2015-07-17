define([
	'jquery'
], function($) {

	var mainplayer = function() {
		var self = this,
			right,
			tSliderInd;

		function getElements(){
			var $el = self.$el;

			return{
				$el : $el
			}
		}

		this.init = function() {
			$.extend(this, new Player.Base.main.player(this));
			$.extend(this.elems, getElements());


			//adiciona classe ao índice, para fallback ie8
	  		var columnItens = 10,
	  			$itensLinst = self.elems.$itensLinst;

	  		$.each($itensLinst, function(i, li) {
	  			var $itensLinst = $(li),
	  				column_index = Math.floor(i / columnItens);

	  			$itensLinst.addClass('column-' + column_index)
	  			.toggleClass('resetColumn', (i % columnItens) == 0 && column_index > 0);

	  		});

			self.startIndice();

			Player.Elements.$swipe.on({
				slideEnd: function(e, startIndex, endIndex, domInit, domEnd) {
					self.updateSlideNumber();
				}
			});

			Player.Elements.$content.on({
				contentReady: function(e) {
					self.updateIndice();
				}
			});

			// ************************* EVENTOS *************************

			self.elems.$btAvancar.on({
				click: function(e) {
					self.updateIndice();
				}
			});

			self.elems.$btVoltar.on({
				click: function(e) {
					self.updateIndice();
				}
			});
			
			self.elems.$btAvancarIndice.on({
				click: function(e) {
					console.log(tSliderInd);
					$("#indice").animate({
						right: "+=653px"
					}, 500);

					right += 1;
					if (tSliderInd == right) {
						self.elems.$btAvancarIndice.hide();
					} else if (right < (tSliderInd)) {
						self.elems.$btAvancarIndice.show();

					}
					self.elems.$btVoltarIndice.show();
				}
			});

			self.elems.$btVoltarIndice.on({
				click: function(e) {
					$("#indice").animate({
						right: "-=653px"
					}, 500);

					right -= 1;

					if (right == 1) {
						self.elems.$btVoltarIndice.hide();
					}
					self.elems.$btAvancarIndice.show();
				}
			});

			// ************************* METHODS *************************

			this.updateSlideNumber = function() {
				var player = this,
					slide = self.getCurrentSlide(),
					perc = self.getSlidePercent(),
					total_slides = self.getTotalSlides();

				self.elems.$barraProgresso
					.find('.valorBarraProgresso')
					.animate({
						'width': perc + '%'
					})
					.end()
					.parent()
					.find('.valorSlideAtual')
					.text(slide + ' / ' + total_slides);
			}
		}
	}

	return mainplayer;
});