$(window).load(function(){

	var $window  = $(window),
		$container = $('#portfolio-list'),
		$optionSets = $('#option-set'),
		$optionLinks = $optionSets.find('a');

	function portfolioCol() {
		var width = $window.width(),
			column = 1;

		if (width > 1400) {
			column = 5;
		} else if (width > 1000) {
			column = 4;
		} else if (width > 768) {
			column = 3;
		} else if (width > 480) {
			column = 2;
		} else{
			column = 1;
		}

		return column;
	}

	function setCol() {
		var width = $window.width(),
			column = portfolioCol(),
			articleWidth =  Math.floor(width/column);

		$container.find('li').each(function () {
			$(this).css( {
				width : articleWidth + 'px'
			});
		});
	}

	setCol();

	$container.isotope({
		itemSelector : '.element',
		animationEngine : 'best-available',
		animationOptions: {
			duration: 800,
			queue: false
		},
		layoutMode: 'fitRows'
	});

	$window.on('resize', function () {
		setCol();

		$container.isotope('reLayout');
	});


	$optionLinks.on('click' , function(e) {
		var $this = $(this),
			currentOption = $this.data('cat');

		$optionSets.find('.selected').removeClass('selected');
		$this.addClass('selected');

		if (currentOption !== '*') {
			currentOption = '.' + currentOption;
		}

		$container.isotope({filter : currentOption});
		return false;
	});

});



