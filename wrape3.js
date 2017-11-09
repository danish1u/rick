jQuery(document).ready(function(){
	var $V = jQuery.noConflict();		
	
	$V(".pst-background > tbody > tr > td > table:last-child").addClass("addfooter");
	
	
	if(pageName != "StoresCustomPageHome") {
		if($V(".addfooter").length > 0) {
			$V(".addfooter").after(footer);			
		}
	}
	
	
	//Getting and Setting Store Categories
	
	
	//Footer
	var d = new Date();
	var footer = '\n\r<div class="footer"><div class="browse-logos"><ul><li><a href="#"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/1.png" width="255px;" alt=""></a></li><li><a href="#"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/2.png" width="255px;" alt=""></a></li><li><a href="#"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/3.png" width="255px;"alt=""></a></li><li><a href="#"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/4.png" width="255px;"alt=""></a></li><li><a href="#"><img src="https://raw.githubusercontent.com/danish1u/rick/master/imges/5.png"width="255px;" alt=""></a></li></ul></div><div class="all-rights-reserve">© All rights reserved to Asteria diamonds</div></div>';
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
		//$V(this).addClass('new');
		if($V(this).html() == "<br>")
		{
			cnt +='<td class="gallery er" width="33%" itemscope="itemscope" itemtype="http://schema.org/Product">'+$V(this).html()+'</td>';
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
