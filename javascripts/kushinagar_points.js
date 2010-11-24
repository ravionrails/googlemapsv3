var kushinagar_places = {
						"Pagoda Temple" : new google.maps.LatLng(26.741029,83.889769),
						"Central Bank of India Bank" : new google.maps.LatLng(26.745070, 83.889732),
						"Police Chowki" : new google.maps.LatLng(26.744739, 83.889361),
						"Swatantra Digital Studio" : new google.maps.LatLng(26.744907, 83.889372),
						"Dharamshala" : new google.maps.LatLng(26.745156, 83.890574),
						"Annu Telecom" : new google.maps.LatLng(26.744598, 83.889423),
						"Ayurvedic Govt. Hospital" : new google.maps.LatLng(26.744172, 83.890217),
						"Vaitnam Temple" : new google.maps.LatLng(26.742097,83.890174),
						"Shiva Temple" : new google.maps.LatLng(26.740864,83.888315),
						"Nirwana Temple" : new google.maps.LatLng(26.739561,83.88916),
						"Buddha Last" : new google.maps.LatLng(26.739764,83.890952),
						"Matha Kunwar Temple" : new google.maps.LatLng(26.737489,83.888112)
	};


function kushinagar_points(map){

	var pagoda_latlng = kushinagar_places["Pagoda Temple"];
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



	var cbi_bank_latlng = kushinagar_places["CBI Bank"];
	var cbi_bank_marker = new google.maps.Marker({
          position: cbi_bank_latlng,
          map: map,
		  icon: bank_img,
          title:"Central Bank of India"
	});

	var police_latlng = kushinagar_places["Police Chowki"];
	var police_marker = new google.maps.Marker({
          position: police_latlng,
          map: map,
		  icon: police,
          title:"Police Station"
	});

	var swatantra_studio_latlng = kushinagar_places["Swatantra Digital Studio"];
	var swatantra_studio_marker = new google.maps.Marker({
          position: swatantra_studio_latlng,
          map: map,
		  icon: studio_img,
          title:"Swatantra Digital studio"
	});

	var dharamshala_latlng = kushinagar_places["Central Bank of India Bank"];
	var dharamshala_marker = new google.maps.Marker({
          position: dharamshala_latlng,
          map: map,
		  icon: dharamshala_img,
          title:"Bhante Mahendra dharamshala"
	});

	var annu_telecom_latlng = kushinagar_places["Annu Telecom"];
	var annu_telecom_marker = new google.maps.Marker({
          position: annu_telecom_latlng,
          map: map,
		  icon: annu_telecom_img,
          title:"Annu Telecom"
	});

	var ayurvedic_hospital_latlng = kushinagar_places["Ayurvedic Govt. Hospital"];
	var ayurvedic_hospital_marker = new google.maps.Marker({
          position: ayurvedic_hospital_latlng,
          map: map,
	  	  icon: hospital_img,
          title:"Govt. Ayurvedic Hospital"
	});

	var vaitnam_temple_latlng = kushinagar_places["Vaitnam Temple"];
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

	var shiva_temple_latlng = kushinagar_places["Shiva Temple"];
	var shiva_temple_marker = new google.maps.Marker({
          position: shiva_temple_latlng,
          map: map,
		  icon: temple_img,
          title:"Shiva Temple"
	});

	var nirwana_temple_latlng = kushinagar_places["Nirwana Temple"];
	var nirwana_temple_marker = new google.maps.Marker({
          position: nirwana_temple_latlng,
          map: map,
		  icon: temple_img,
          title:"Nirwana Temple"
	});

	var buddha_last_latlng = kushinagar_places["Buddha Last"];
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

	var matha_kunwar_temple_latlng = kushinagar_places["Matha Kunwar Temple"];
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
