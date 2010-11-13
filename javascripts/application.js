jQuery(document).ready(function(){

	var places = ["Police Station", "Buddha"]
	jQuery("#search_div > input[type=text]").autocomplete({source: places});

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

	jQuery("#search_div > input[type=submit]").click(function(){
		search();	
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
			jQuery('div.options_container').hide();
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

function search(){
    var police_latlng = new google.maps.LatLng(26.444344,83.532246);
    var myOptions = {
      zoom: 19,
      center: police_latlng,
      mapTypeId: google.maps.MapTypeId.ROAD ,
      disableDefaultUI: true,

    };
    	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	
	var police = 'images/icon/police.png';
	var police_marker = new google.maps.Marker({
          position: police_latlng,
          map: map,
	  icon: police,
          title:"Police Station"
	});
}

function initialize() {
    var start_point = new google.maps.LatLng(26.442763,83.532351);
	
    var myOptions = {
      zoom: 17,
      center: start_point,
      mapTypeId: google.maps.MapTypeId.ROADMAP ,
      disableDefaultUI: true,

    };
    
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	google.maps.event.addListener(map, 'click', function(event) {
	    zoomin(event.latLng);
	});

	function zoomin(location) {
	  map.setZoom(map.getZoom()+1);
	  map.setCenter(location);
	}

	jQuery('.map_link').bind('click', function(){
		roadmap_view();
	});

	jQuery('.satellite_link').bind('click', function(){
		satellite_view();
	})


	function satellite_view(){
		map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
	}

	function roadmap_view(){
		map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
	}


	kushinagar_points(map);
    	
	kushinagar_roads(map);

	
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

  function ima(i){
	var im = '<img src="images/pics/'+i+'" />';
	return im;
  }
  
  
