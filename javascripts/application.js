jQuery(document).ready(function(){

	var places = []

	for(var i in kushinagar_places) {
		places.push(i);
	}

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
	jQuery('div#options').click(function(){
		jQuery('.options_container').toggle();
	});
		
	
	jQuery('span#close_div').click(function(){
		jQuery('div#img').hide();
	});

	
	
	initialize();

});

function initialize() {
	var markersArray = [];

    var start_point = new google.maps.LatLng(26.736807,83.897345);
	
    var myOptions = {
      zoom: 15,
      center: start_point,
      mapTypeId: google.maps.MapTypeId.ROADMAP ,
      disableDefaultUI: true,

    };
    
	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

	// click event added for zooming
	google.maps.event.addListener(map, 'click', function(event) {
	    zoomin(event.latLng);
	});

	function zoomin(location) {
	  map.setZoom(map.getZoom()+1);
	  //console.log(map.getZoom());
	  map.setCenter(location);
	}

	jQuery('.map_link').bind('click', function(){
		roadmap_view();
	});

	jQuery('.satellite_link').bind('click', function(){
		satellite_view();
	})


	function satellite_view(){
		map.setMapTypeId(google.maps.MapTypeId.HYBRID);
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
	
	// Shows any overlays currently in the array
	function showOverlays() {
	  if (markersArray) {
		for (i in markersArray) {
		  markersArray[i].setMap(map);
		}
	  }
	}

	// Deletes all markers in the array by removing references to them
	function deleteOverlays() {
	  if (markersArray) {
		for (i in markersArray) {
		  markersArray[i].setMap(null);
		}
		markersArray.length = 0;
	  }
	}

	jQuery('#get_direction_submit').click(function(){
		search_path();
	});

	function search_path(){
		deleteOverlays();
		
		var directionsService = new google.maps.DirectionsService();
   		var directionsDisplay = new google.maps.DirectionsRenderer({  draggable: true });
		var fr = jQuery('input#input_from').val()
		var to = jQuery('input#input_to').val() 		
//		var w1 = new google.maps.LatLng(26.737497,83.896229);
		   var request = {
			   origin: fr,
			   destination: to,
	//			waypoints: [{  location:w1,  stopover:true	}],

			   travelMode: google.maps.DirectionsTravelMode.DRIVING,
				unitSystem: google.maps.DirectionsUnitSystem.METRIC
		   };

		   directionsService.route(request, function(response, status) {
			  if (status == google.maps.DirectionsStatus.OK) {
			  	directionsDisplay.setDirections(response);
				directionsDisplay.setMap(map);
				jQuery('#direction_panel').html("");
				var dist = 	"<div>DISTANCE = " + response.routes[0].legs[0].distance.value/1000 + '(in Kms)</div>'
				var dur = "TIME = " + response.routes[0].legs[0].duration.value/3600 + '(in Hrs)' ;
				jQuery('#direction_panel').html(dist + dur);
			  }

		   });

	};  


	jQuery("#search_div > input[type=submit]").click(function(){
		var l_str = jQuery(this).prev('input').val();
		if(typeof kushinagar_places[l_str] != 'undefined'){
			var lat = kushinagar_places[l_str].va ;//parseFloat( l_str.split(',')[0] );
			var lng = kushinagar_places[l_str].wa ; //parseFloat( l_str.split(',')[1] );					
			search(lat, lng, l_str);
		}
		else {
			alert('Currently this point is not Mapped , Wait for second release cycle');
		}
		
			
	});

	// function to look up lat lang on google map with putting marker 
	function search(lat, lang, place){
		deleteOverlays();
		var search_latlng = new google.maps.LatLng(lat, lang);
		var searched_marker = new google.maps.Marker({
		      position: search_latlng,
		      map: map,
		  	  title:"Searched Place : "+  place +" at (" + lat + ' , ' + lang + ' )'
		});
		markersArray.push(searched_marker);
		map.setCenter(search_latlng);
		map.setZoom(20);
		
	}

	  
  }// initialize ends here


  function video(){
	var ur = '<object width="480" height="385"><param name="movie" value="http://www.youtube.com/v/0x0irHvLC78?fs=1&amp;hl=en_GB"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube.com/v/0x0irHvLC78?fs=1&amp;hl=en_GB" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="385"></embed></object>';
	return ur;
  }

  function ima(i){
	var im = '<img src="images/pics/'+i+'" />';
	return im;
  }
  
  
