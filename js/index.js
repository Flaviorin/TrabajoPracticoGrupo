var hed=`
<nav class="nav">
	<div class="nav_title">
		<a href="./index.html">
			<img id="imagen_home_logo_camion" src="./img/Logofede.png" alt="">
		</a>
	</div>
	<!-- Nuevo cuadrito Temperatura -->
	<div class="weather-box">
		<h4 id="muestraProvincia2" class="tituloProvincia"></h4>
		<table id="tablitaTemperatura">
			<th class="thtemp">
				<img src="" id="iconoTemperatura"/>
			</th>
			<th class="thtemp">
				<p id="muestraEstadoClima" class="parrafoEstadoClima"></p>
			</th>
		</table>
	</div>
	<!-- FIN Nuevo cuadrito Temperatura -->
	<div class="nav_list_menu">
		<ul>
			<li class="nav_item"><a href="#" class="nav_item_stilo">Ver Categorías</a></li>
			<li class="nav_item"><a href="#eres_transportista_home" class="nav_item_stilo">¿Eres transportista?</a></li>
			<li class="nav_item"><a href="#" class="nav_item_stilo">Buscar envíos</a></li>
			<li class="nav_item"><a href="#como_funciona_home" class="nav_item_stilo">¿Cómo funciona?</a></li>
			<li class="nav_item"><a href="#" class="nav_item_stilo">Ayuda</a></li>
			<li class="nav_item"><a href="#" class="nav_item_stilo">Iniciar sesión</a></li>
		</ul>
	</div>
</nav>
`

document.getElementById("idheader").innerHTML=hed;

async function obtenerPais(callback) {
	const apiURL = "https://api.ipregistry.co/?key=o4ie2fwo690290mu"
	try {
		const response = await fetch(apiURL)
		const data = await response.json()
		//console.log('Your country is ' + data['location']['country']['name']);
		var latitud = data['location']['latitude'];
		//console.log(latitud);
		var longitud = data['location']['longitude'];
		//console.log(longitud);
		var coordenadas = [latitud,longitud];
		//console.log(coordenadas);
		//provincia = data['location']['country']['capital'];
		callback(coordenadas);
		//return (coordenadas);
	}
	catch {
		console.log('Ocurrió un error grave en el servicio obtenerPais',error);
	}
}

async function obtenerClima(coordenadas) {
	//setTimeout(function() {
	var latitud = (coordenadas[0]);
	var longitud = (coordenadas[1]);
	var url = new URL('https://api.openweathermap.org/data/2.5/weather?lat=1&lon=1&units=metric&lang=es&appid=b044f07656da438fa995eabf7380b67b');
	url.searchParams.set('lat', latitud);
	url.searchParams.set('lon', longitud);
	var city = document.getElementById("muestraProvincia2");
	var ico = document.getElementById("iconoTemperatura");
	var estadoClima = document.getElementById("muestraEstadoClima");
	try {
		const response2 = await fetch(url)
		const data2 = await response2.json()
		//console.log('La temperatura de ' +data2['name']+' es '+ data2['main']['temp']+'°');
		//console.log('y esta '+ data2['weather'][0]['description']);
		city.innerHTML = (data2['name']); //+' (Temp: ' + Math.floor(data2['main']['temp'])+'°)');
		estadoClima.innerHTML = (Math.floor(data2['main']['temp'])+'°');//('('+ data2['weather'][0]['description'] +')');
		var iconcode = data2['weather'][0]['icon'];
		var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
		ico.src = (iconurl);
	}
	catch {
		console.log('Ocurrió un error grave en el servicio obtenerClima',error);
	}
	// }, 2000);
}
//obtenerPais(obtenerClima);

var fot=`
<p>Copyright 2022</p>
`

document.getElementById("idfooter").innerHTML=fot;
