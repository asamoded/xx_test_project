$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// PROGRESS-BAR
	moveProgressBar();
	$(window).resize(function() {
		moveProgressBar();
	});

	function moveProgressBar() {
		console.log("moveProgressBar");
		var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
		var getProgressWrapWidth = $('.progress-wrap').width();
		var progressTotal = getPercent * getProgressWrapWidth;
		var animationLength = 2500;

				// on page load, animate percentage bar to data percentage length
				// .stop() used to prevent animation queueing
				$('.progress-bar').stop().animate({
					left: progressTotal
				}, animationLength);
			}

		});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
