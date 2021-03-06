/* Variáveis Globais */
var display_h = document.getElementById("display");	//Display HTML
var display = [];	//Guarda o estado de cada pixel (aceso ou apagado)
var display_x = 19;	//Largura do Display
var display_y = 16;	//Altura do Display
var nm_sprite = 'sprite';	//Nome do Sprite

function criar_display(){

	//Passa por todos os campos
	for(var y = 1; y <= display_y; y++){

		display[y] = [];

		for(var x = 1; x <= display_x; x++){

			display[y][x] = 0;
		
			//Cria um novo pixel
			var pixel = document.createElement("div");
			pixel.setAttribute("class","pixel");
			pixel.setAttribute("onclick","mudar_pixel(event)");
			pixel.setAttribute("id",y+"_"+x);
			display_h.appendChild(pixel);

		}
	}

	console.table(display);

}

function mudar_pixel(event){

	var px = event.target.id;
	var pixel = document.getElementById(px);
	//console.log(px);

	px_id = px.split('_');
	//console.log(px_id);
	var px_y = px_id[0];
	var px_x = px_id[1];

	if(sprite[px_y][px_x] == 0){

		sprite[px_y][px_x] = 1;
		pixel.setAttribute("class","pixel corpo");

	}else{

		sprite[px_y][px_x] = 0;
		pixel.setAttribute("class","pixel");

	}

	mudar_code();

}

function mudar_code(){

	var code = document.getElementById("code");
	var txt = '';
	txt += " "+nm_sprite+"[1] = [];<br>";
	txt += "<br>";

	for(var y = 1; y <= display_y; y++){
		for(var x = 1; x <= display_x; x++){

			if(x == 1){
				if(y < 10){
					txt += "&nbsp;"+nm_sprite+"[1]["+y+"] = ['|'";
				}else{
					txt += nm_sprite+"[1]["+y+"] = ['|'";
				}
				txt += ","+sprite[y][x];
			}else{
				txt += ","+sprite[y][x];
			}

		}
		txt += "]; <br>";
	}

	code.innerHTML = txt;

}

function interpretar_code(){
	var script = document.getElementById("sprite");
	var code_text = document.getElementById("code_text");

	script.innerHTML = code_text
}

function mudar_nome_sprite(nm){
	nm_sprite = nm;
}

//Inicialização do spriter
criar_display();