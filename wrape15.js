jQuery(document).ready(function(){
	var $V = jQuery.noConflict();		
	$V(".pagecontainer > table:eq(1)").addClass("pst-background");
	$V(".pagecontainer > table:eq(1) tr:first td:first").addClass("pst-background2");
	$V(".pst-background > tbody > tr > td > table:last-child").addClass("addfooter");
	$V(".pst-background table:eq(1) tbody:first").addClass("row1");
	$V(".pst-background table:eq(1) tr:first").addClass("nospace1");
	$V(".pst-background table:eq(1) tr:eq(1)").addClass("pst-content1 row1");
	$V(".pst-background table:eq(1) tr:eq(1) td:first").addClass("1col-md-3 1col-sm-3 1col-xs-12");
	$V(".pst-content > td:eq(1)").addClass("1pst-gap");
	$V(".pst-content > td:eq(2)").addClass("1categorypage 1col-md-91 col-sm-9 1col-xs-12");
	
	if(pageName != "StoresCustomPageHome") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	
	
	//Getting and Setting Store Categories
	
	
	//Footer
	var d = new Date();
	var footer = '\n\r<div class="footer"> <div class="message2"> <div class="col-md-6"> <div class="messagea"> <img src="https://raw.githubusercontent.com/danish1u/rick/master/new%20imges/Page%201%202.jpg" alt=""> <div class="messageb"> <h2>Customer Service</h2> <p>Your questions are always welcome. Contact us to help you make the right decision.</p><h2 class="Leaveb"><a href="http://contact.ebay.com/ws/eBayISAPI.dll?FindAnswers&requested=asteria_diamonds">Leave a message</a></h2> </div></div></div><div class="col-md-6"> <div class="submita"> <img src="https://raw.githubusercontent.com/danish1u/rick/master/new%20imges/coming_soon.jpg" alt=""> <div class="messageb"> <h2>Asteria Newsletter</h2> <p>Be the first to hear about special items and offers.</p><h2 class="Leaveq"><a href="http://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=asteria_diamonds">Submit</a></h2> </div></div></div></div><div class="browse-logos"> <ul> <li><a href="#" style="cursor:default"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/1.png" width="255px;" alt=""></a></li><li><a href="#" style="cursor:default"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/2.png" width="255px;" alt=""></a></li><li><a href="#" style="cursor:default"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/3.png" width="255px;"alt=""></a></li><li><a href="#" style="cursor:default"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/4.png" width="255px;"alt=""></a></li><li><a href="#" style="cursor:default"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/5.png"width="255px;" alt=""></a></li></ul> </div><div class="all-rights-reserve">© All Rights Reserved To Asteria Diamonds</div></div>';
	if(pageName != "PageAboutMeViewStore") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	$V(document).ready(function(){
		$V('.rs-pview >table:first-child').removeClass('grid');
		$V('.rs-pview >table:first-child').addClass('grid_new');
	});
	var cnt ='';
	$V(".grid tr td.gallery").each(function(){		

			cnt +='<td class="gallery" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$V(this).html()+'</td>';
		}
		else
		{
			cnt +='<td class="gallery" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$V(this).html()+'</td>';
		}
		
	});
	
	ct =cnt;
	
	$V('.rs-pview >table:first-child').html('<tr>'+cnt+'<tr>');
	
	$V( ".fixed" ).append( "<div class='pst-buyitnow'>BUY IT NOW</div>" );
  
$V('.details').each(function(){
$Vlink = $V('.ttl', this).find('a').clone().text('');
$V('.pst-buyitnow', this).contents().wrap($Vlink);
});

	
});
