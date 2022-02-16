$(function(){
	$('.tabcontent > div').hide();
	$('.tabnav a').click(function () {
		$('.tabcontent > div').hide().filter(this.hash).fadeIn();
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
});

$(function(){
	$('.tabcontent1 > div').hide();
	$('.tabnav1 a').click(function () {
		$('.tabcontent1 > div').hide().filter(this.hash).fadeIn();
		$('.tabnav1 a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':eq(0)').click();
});