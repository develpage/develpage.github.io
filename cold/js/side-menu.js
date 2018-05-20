$(document).ready(function(){
	$('.fixedBtn').click(function(){
		$('.sidebar').toggleClass('active'); 
	})
	$('.sidebarBtn').click(function(){
			$('.sidebar').removeClass('active');
	})
	$('.sidebar a').click(function(){
		$('.sidebar').removeClass('active');
	})
}) 