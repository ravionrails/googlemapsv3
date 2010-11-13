function kushinagar_points(map){

	var pagoda_latlng = new google.maps.LatLng(26.442763,83.532351);
	var pagoda_marker = new google.maps.Marker({
    	position: pagoda_latlng,
        map: map,
		icon: temple_img,
        title:"Pagoda"
	});

	google.maps.event.addListener(pagoda_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('1.jpg'));
		jQuery('div#img').show();		
	});



	var cbi_bank_latlng = new google.maps.LatLng(26.444384,83.533163);
	var cbi_bank_marker = new google.maps.Marker({
          position: cbi_bank_latlng,
          map: map,
		  icon: bank_img,
          title:"Central Bank of India"
	});

	var police_latlng = new google.maps.LatLng(26.444344,83.532246);
	var police_marker = new google.maps.Marker({
          position: police_latlng,
          map: map,
		  icon: police,
          title:"Police Station"
	});

	var swatantra_studio_latlng = new google.maps.LatLng(26.444391,83.532437);
	var swatantra_studio_marker = new google.maps.Marker({
          position: swatantra_studio_latlng,
          map: map,
		  icon: studio_img,
          title:"Swatantra Digital studio"
	});

	var dharamshala_latlng = new google.maps.LatLng(26.444340,83.534737);
	var dharamshala_marker = new google.maps.Marker({
          position: dharamshala_latlng,
          map: map,
		  icon: dharamshala_img,
          title:"Bhante Mahendra dharamshala"
	});

	var annu_telecom_latlng = new google.maps.LatLng(26.444207,83.532299);
	var annu_telecom_marker = new google.maps.Marker({
          position: annu_telecom_latlng,
          map: map,
		  icon: annu_telecom_img,
          title:"Annu Telecom"
	});

	var ayurvedic_hospital_latlng = new google.maps.LatLng(26.443883,83.532385);
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

	google.maps.event.addListener(vaitnam_temple_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('7.jpg'));
		jQuery('div#img').show();		
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
	var buddha_last_marker = new google.maps.Marker({
          position: buddha_last_latlng,
          map: map,
	  	  icon: buddha_img,
          title:"The last place at where Buddha stayed and gave his last precious words before Prinivarna Kusinakar UP India"
	});


	google.maps.event.addListener(buddha_last_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('10.jpg'));
		jQuery('div#img').show();		
	});

	var matha_kunwar_temple_latlng = new google.maps.LatLng(26.441499,83.531719);
	var matha_kunwar_temple_marker = new google.maps.Marker({
          position: matha_kunwar_temple_latlng,
          map: map,
		  icon: temple_img,
          title:"Matha Kunwar(Buddha) Temple"
	});

	google.maps.event.addListener(matha_kunwar_temple_marker, 'click', function() {
		jQuery('div#img > img').remove();
		jQuery('div#img').append(ima('11.jpg'));
		jQuery('div#img').show();		
	});



}
