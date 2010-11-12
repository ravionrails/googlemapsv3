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
    var pagoda_latlng = new google.maps.LatLng(26.442763,83.532351);
	
    var myOptions = {
      zoom: 19,
      center: pagoda_latlng,
      mapTypeId: google.maps.MapTypeId.ROAD ,
      disableDefaultUI: true,

    };
    	var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var temple_img = 'images/icon/temple.png';

    	var pagoda_marker = new google.maps.Marker({
          position: pagoda_latlng,
          map: map,
	  icon: temple_img,
          title:"Pagoda"
	});

	var cbi_bank_latlng = new google.maps.LatLng(26.444384,83.533163);
	var bank_img = 'images/icon/bank.png';
	var cbi_bank_marker = new google.maps.Marker({
          position: cbi_bank_latlng,
          map: map,
	  icon: bank_img,
          title:"Central Bank of India"
	});

	var police_latlng = new google.maps.LatLng(26.444344,83.532246);
	var police = 'images/icon/police.png';
	var police_marker = new google.maps.Marker({
          position: police_latlng,
          map: map,
	  icon: police,
          title:"Police Station"
	});

	var swatantra_studio_latlng = new google.maps.LatLng(26.444391,83.532437);
	var studio_img = 'images/icon/camera.jpeg';
	var swatantra_studio_marker = new google.maps.Marker({
          position: swatantra_studio_latlng,
          map: map,
	  icon: studio_img,
          title:"Swatantra Digital studio"
	});

	var dharamshala_latlng = new google.maps.LatLng(26.444340,83.534737);
	var dharamshala_img = 'images/icon/dharamshala.jpeg';
	var dharamshala_marker = new google.maps.Marker({
          position: dharamshala_latlng,
          map: map,
	  icon: dharamshala_img,
          title:"Bhante Mahendra dharamshala"
	});

	var annu_telecom_latlng = new google.maps.LatLng(26.444207,83.532299);
	var annu_telecom_img = 'images/icon/phone.jpeg';
	var annu_telecom_marker = new google.maps.Marker({
          position: annu_telecom_latlng,
          map: map,
	  icon: annu_telecom_img,
          title:"Annu Telecom"
	});

	var ayurvedic_hospital_latlng = new google.maps.LatLng(26.443883,83.532385);
	var hospital_img = 'images/icon/hospital.png';
	var ayurvedic_hospital_marker = new google.maps.Marker({
          position: ayurvedic_hospital_latlng,
          map: map,
	  icon: hospital_img,
          title:"Govt. Ayurvedic Hospital"
	});

	var vaitnam_temple_latlng = new google.maps.LatLng(26.443161,83.532423);
	var vaitnam_temple_marker = new google.maps.Marker({
          position: vaitnam_temple_latlng,
          map: map,
	  icon: temple_img,
          title:"Vaitnam Temple"
	});

	var shiva_temple_latlng = new google.maps.LatLng(26.442711,83.531784);
	var shiva_temple_marker = new google.maps.Marker({
          position: shiva_temple_latlng,
          map: map,
	  icon: temple_img,
          title:"Shiva Temple"
	});

	var nirwana_temple_latlng = new google.maps.LatLng(26.442243,83.532098);
	var nirwana_temple_marker = new google.maps.Marker({
          position: nirwana_temple_latlng,
          map: map,
	  icon: temple_img,
          title:"Nirwana Temple"
	});

	var buddha_last_latlng = new google.maps.LatLng(26.442118,83.532570);
	var buddha_img = 'images/icon/buddha.png'
	var buddha_last_marker = new google.maps.Marker({
          position: buddha_last_latlng,
          map: map,
	  icon: buddha_img,
          title:"The last place at where Buddha stayed and gave his last precious words before Prinivarna Kusinakar UP India"
	});

	var matha_kunwar_temple_latlng = new google.maps.LatLng(26.441499,83.531719);
	var matha_kunwar_temple_marker = new google.maps.Marker({
          position: matha_kunwar_temple_latlng,
          map: map,
	  icon: temple_img,
          title:"Matha Kunwar(Buddha) Temple"
	});


        google.maps.event.addListener(pagoda_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('1.jpg'));
		jQuery('div#img').show();		
	});

	google.maps.event.addListener(vaitnam_temple_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('7.jpg'));
		jQuery('div#img').show();		
	});

	google.maps.event.addListener(buddha_last_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('10.jpg'));
		jQuery('div#img').show();		
	});

	google.maps.event.addListener(matha_kunwar_temple_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('11.jpg'));
		jQuery('div#img').show();		
	});
	
	
	var flightPlanCoordinates = [
		new google.maps.LatLng(26.440482,83.530671),
		new google.maps.LatLng(26.45226,83.536851)
		
	];

	var flightPlanCoordinates2 = [
		new google.maps.LatLng(26.444037,83.539769),
		new google.maps.LatLng(26.448052,83.53051)
	];
	
	
	  var flightPath = new google.maps.Polyline({
		path: flightPlanCoordinates,
		strokeColor: "green",
		strokeOpacity: 0.6,
		strokeWeight: 6
	  });

	var flightPath2 = new google.maps.Polyline({
		path: flightPlanCoordinates2,
		strokeColor: "green",
		strokeOpacity: 1.0,
		strokeWeight: 6
	  });

	flightPath.setMap(map);

	flightPath2.setMap(map);	
	
	
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
  
  
