 $(document).ready(function () { $('.plus').click(function() {

 	$('#titre').delay(500).animate({ boxShadow : "0 0 50px 0 rgba(255, 255, 255, 0.2)" }); 
 	$('.header_h1').delay(500).toggle( "fade" );
 	$('.header_h2').delay(800).toggle( "fold" );
 	$('.header_h3').delay(1000).toggle( "blind" );
 var condi = $('.header_h1').css('display');
if (condi == 'block') 
	{
	$('#titre').animate({ boxShadow : "0 0 50px 0 rgba(255, 255, 255, 0.0)" });
	$('#zone-header').animate({opacity: 1});
	 }
 var condi2 = $('.header_h1').css('display');
if (condi2 == 'none') 
	{
	$('#zone-header').animate({opacity: 0.5});
	}
	end;
});
}); 


/*
$(function() {
         $('div.casper').click(function() {
            $('#region-user-first').toggle();
            return false;
         });
      });   

*/

