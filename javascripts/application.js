jQuery(document).ready(function(){
	jQuery("#search_div > input[type=text]").click(function(){
		if( jQuery(this).val() == "Enter your search place in Uttar Pradesh" ){
			jQuery(this).val('');
			jQuery(this).css({"color":"black",  'font-family':'Verdana'});
		}
		
	});
	jQuery("#search_div > input[type=text]").blur(function(){
		if( jQuery(this).val() == "" ){
			jQuery(this).val('Enter your search place in Uttar Pradesh');
			jQuery(this).css({'color': 'grey', 'font-family':'Cursive'});
		}
		
	});

	jQuery("#input_from, #input_to").click(function(){
		if( jQuery(this).val() == jQuery(this).attr('rel') ){
			jQuery(this).val('');
			jQuery(this).css({"color":"black", 'font-size':'12px', 'font-family':'Verdana'});
		}
		
	});
	jQuery("#input_from, #input_to").blur(function(){
		if( jQuery(this).val() == "" ){
			jQuery(this).val(jQuery(this).attr('rel'));
			jQuery(this).css({'color': 'grey', 'font-family':'Cursive'});
		}
		
	});
	jQuery('div#options').hover(
		function(){
			jQuery('div.options_container').show();
		},
		function(){
			jQuery('div.options_container').fadeOut(4000);
		});
		
	jQuery('div#options_container').hover(
		function(){
			//jQuery('div.options_container').show();
		},
		function(){
			jQuery('div.options_container').hide();
		}
	);
	
	jQuery('span#close_div').click(function(){
		jQuery('div#img').hide();
	});
	
	initialize();
	//setTimeout(5000, function(){jQuery('#map_canvas').css('position','absolute');});
});

function initialize() {
    var latlng = new google.maps.LatLng(26.7422,83.8902);
	var latlng2 = new google.maps.LatLng(26.7422,83.88);
    var myOptions = {
      zoom: 16,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  disableDefaultUI: true,

    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var marker = new google.maps.Marker({
      position: latlng, 
      map: map,
      title:"Ithaa Restaurant"
	});
	
	var marker2 = new google.maps.Marker({
      position: latlng2, 
      map: map,
      title:"CHeck Post"
	});
	
	google.maps.event.addListener(marker, 'click', function() {
		//alert('Welcome to Ithaa Restaurant of Kushinagar');
		jQuery('div#img > object').remove();
		jQuery('div#img').append(ima());
		jQuery('div#img').show();
		//console.log(jQuery(this).offset() );
	});	 
	
	google.maps.event.addListener(marker2, 'click', function() {
		//alert('Welcome to Ithaa Restaurant of Kushinagar');
		jQuery('div#img > img').remove();
		jQuery('div#img').append(video());
		jQuery('div#img').show();
		//console.log(jQuery(this).offset() );
	});	 
	
	var flightPlanCoordinates = [
		new google.maps.LatLng(26.7411, 83.8810),
		new google.maps.LatLng(26.7488, 83.8799),
		new google.maps.LatLng(26.7433, 83.8788),
		new google.maps.LatLng(26.7, 83.8)
	];
	  var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		strokeColor: "black",
		strokeOpacity: 1.0,
		strokeWeight: 5
	  });

	flightPath.setMap(map);
	
	
	
	// Removes the overlays from the map, but keeps them in the array
	function clearOverlays() {
	  if (markersArray) {
		for (i in markersArray) {
		  markersArray[i].setMap(null);
		}
	  }
	}

	  
  }
  
  function video(){
	var ur = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/0x0irHvLC78?fs=1&amp;hl=en_GB"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/0x0irHvLC78?fs=1&amp;hl=en_GB" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
	return ur;
  }

  function ima(){
	var im = '<img src="images/pics/IthaaRestaurant.jpg" />';
	return im;
  }
  
  