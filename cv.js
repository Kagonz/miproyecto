//MENU
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let adobe = document.getElementById("adobe");
crearBarra(adobe);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let corel = document.getElementById("corel");
crearBarra(corel);
let ingles = document.getElementById("ingles");
crearBarra(ingles);
