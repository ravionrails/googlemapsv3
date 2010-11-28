function kushinagar_roads(map){

	var road1 = new google.maps.Polyline({
		path: road1_points,
		strokeColor: "blue",
		strokeOpacity: 0.4,
		strokeWeight: 4
	});
	
	var road2 = new google.maps.Polyline({
		path: road2_points,
		strokeColor: "blue",
		strokeOpacity: 0.4,
		strokeWeight: 4
	});
	
	road1.setMap(map);
	road2.setMap(map);
	
}
