(function($){
	$(".responsive-toggle").on("click",function(e){


		var $targetEl = $(this).parent().find("nav .main-menu");
		if($targetEl.hasClass("show")){
			$targetEl.removeClass("show")
		}else{
			$targetEl.addClass("show")
		}
	})
})(jQuery)