var menuOn = false;
$( document ).ready(function() {
	$('#menuClick').trigger('click');
	 $( document ).click(function(e) {
	 	//console.log(menuOn);
	 	if(menuOn){
	  		$( "#toggle" ).toggle( "slide" );
	  		// console.log("gotyyy it!");
	  		menuOn = !menuOn;
	 	}
	 	/*js cart
	 	$( ".cart-bottom > select" )
                      .change(function () {
                        var inputText = "店到店";
                        if($( ".cart-bottom > select" ).val()==inputText){
                          $( ".cart-bottom > .otherTextarea" ).text( "店名：\n地址：");
                        }else{
                        	$( ".cart-bottom > .otherTextarea" ).text("");
                        }
                      })
                      .change(); //end js cart*/

		if($(".hideTime").length > 0){
			console.log("aaaa");
		 	$(".hideTime").text().replace(/T.*$/,"");
		 	console.log("ok");
		}
	});
	 
});

function sideMenuClick(){
	// console.log("got yyyyyit!");
	$( "#toggle" ).toggle( "slide" ); 
	setTimeout(function(){menuOn = !menuOn;},1000);
}


