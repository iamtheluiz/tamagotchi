var nr_sprite_espera = 1;
var s_espera1 = [];
 s_espera1[1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[8] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera1[9] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
s_espera1[10] = ['|',0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0];
s_espera1[11] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera1[12] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera1[13] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera1[14] = ['|',0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0];
s_espera1[15] = ['|',0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
s_espera1[16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

var s_espera2 = [];
 s_espera2[1] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[2] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[3] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[4] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[5] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[6] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[7] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[8] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
 s_espera2[9] = ['|',0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0];
s_espera2[10] = ['|',0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0];
s_espera2[11] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera2[12] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera2[13] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera2[14] = ['|',0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0];
s_espera2[15] = ['|',0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0];
s_espera2[16] = ['|',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function atualizar_espera(){

	for(var y = 1; y <= display_y; y++){

		display[y] = [];

		for(var x = 1; x <= display_x; x++){

			var pixel = document.getElementById(y+"_"+x);

			if(nr_sprite_espera == 1){

				if(s_espera1[y][x] == 0){
				pixel.setAttribute("class","pixel");
				}else{
					pixel.setAttribute("class","pixel corpo");
				}

			}else if(nr_sprite_espera == 2){

				if(s_espera2[y][x] == 0){
				pixel.setAttribute("class","pixel");
				}else{
					pixel.setAttribute("class","pixel corpo");
				}

			}

			
		
			//Cria um novo pixel
			display_h.appendChild(pixel);

		}
	}

	if(nr_sprite_espera == 1){

		nr_sprite_espera++;

	}else if(nr_sprite_espera == 2){

		nr_sprite_espera = 1;

	}

}

function iniciar_espera(){

}