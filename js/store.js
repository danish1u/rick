var $w = jQuery.noConflict();
	$w(document).ready(function(){
	//Right Click Protection
	//$w(document).bind("contextmenu",function(e){ return false;});

	//Content Area Mods
	$w(".pagecontainer > table:eq(1) tr:first td:first").addClass("designer-background");
	$w(".designer-background table:eq(1)").addClass("designer-content");

	//Getting and Setting Store Categories
	if($w("#designer-categories").length > 0) {
		if($w("#LeftPanel .lcat").length > 0) {
			$w("#designer-categories").html($w("#LeftPanel .lcat").html());
		}
		$w("#designer-categories ul[class=lev1]").find("li:last").addClass("designer-lastitem");
	}

	//Search Box
	var stxt = $w("#designer-search #designer-input").find("input[class=v4sbox]").val();
	$w("#designer-search #designer-input").find("input[class=v4sbox]").focus(function(){
		if($w("#designer-search #designer-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#designer-search #designer-input").find("input[class=v4sbox]").val("");
		}
	});
	$w("#designer-search #designer-input").find("input[class=v4sbox]").blur(function(){
		if($w("#designer-search #designer-input").find("input[class=v4sbox]").val() == "") {
			$w("#designer-search #designer-input").find("input[class=v4sbox]").val(stxt);
		}
	});
	$w("#designer-search #designer-submit").find("input").click(function(){
		if($w("#designer-search #designer-input").find("input[class=v4sbox]").val() == stxt) {
			$w("#designer-search #designer-input").find("input[class=v4sbox]").val("");
		}
	});


	//Footer
	var d = new Date();
	var footer = '\n\r<div class="designer-wrapcens"><div id="designer-footer"><div id="designer-footernav"><div id="designer-footernav-title">Useful links</div><ul><li><a href="http://stores.ebay.com/marinerswarehousecom">Store Home</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">About Us</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Shipping</a></li></ul><ul><li><a href="http://stores.ebay.com/marinerswarehousecom">Feedback</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Payment</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Returns</a></li></ul><ul><li><a href="http://stores.ebay.com/marinerswarehousecom">New Arrivals</a></li><li><a href="http://stores.ebay.com/marinerswarehousecom">Contact Us</a></li></ul></div><div id="designer-social"><div id="designer-footernav-title">Get in touch with us</div><p>We are trending on Social Media. Follow us and stay updated with our Latest News & Updates.</p><ul><li><a target="_blank" class="fb-icon" href="#"></a></li><li><a target="_blank" class="twit-icon" href="#"></a></li><li><a target="_blank" class="gplus-icon" href="#"></a></li><li><a target="_blank" class="mail-icon" href="#"></a></li></ul></div><div id="designer-payment"><div id="designer-footernav-title">We Accept</div><div class="payment-logo"><img src="http://www.ebay-store-designer.com/estore/daxej/store/images/payment.png" alt="" /></div></div><div class="designer-clear"></div></div><div id="designer-footerwrapper"><div id="designer-footer"><div id="designer-copy">&copy; Copyright <span>EJ Sears Enterprizes</span> ' + d.getFullYear() +'. All rights reserved.</div><div id="designer-designer">eBay Store Design & Developed By <a href="http://stores.ebay.com/marinerswarehousecom" target="_blank">marinerswarehousecom</a></div></div></div></div>';

 {
		if($w(".designer-content").length > 0) {
			$w(".designer-content").after(footer);
		}
	}
