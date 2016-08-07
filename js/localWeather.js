$(document).ready(function() {
	$("#btnNew").click(function() {
		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=30.3&lon=120.2&APPID=524bd0f11668801293a8beefe8376c32", function(json) {
			$("#weather").html("Temperature:" + String(parseFloat(json.main.temp) - 273.15) + "C");
		});
	});
});

//160807:navigator.geolocation()  IE10,可以定位，
//firefox48，chrome52提示POSITION_UNAVAILABLE，打开翻墙软件，才能正常定位
	/* $(document).ready(function() {
		$("#btnNew").click(function() {
			
			if(navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition, showError);
			} else {
				$("#yourLocation").html("Geolocation is not supported by this browser.")
			}
		});

		function showPosition(position) {
			$("#yourLocation").html("Your location:latitude: " + Math.round(position.coords.latitude * 10) / 10 +
				"--longitude: " + Math.round(position.coords.longitude * 10) / 10);

			$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=30.3&lon=120.2&APPID=524bd0f11668801293a8beefe8376c32", function(json) {
				$("#weather").html("Temperature:" + String(parseFloat(json.main.temp)-273.15) + "C");
			});
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					$("#yourLocation").html("用户拒绝对获取地理位置的请求。");
					break;
				case error.POSITION_UNAVAILABLE:
					$("#yourLocation").html("位置信息是不可用的。");
					break;
				case error.TIMEOUT:
					$("#yourLocation").html("请求用户地理位置超时。");
					break;
				case error.UNKNOWN_ERROR:
					$("#yourLocation").html("未知错误。");
					break;
			}
		}
		
});
*/