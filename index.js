let turno = 1;
let fichas = ["O","X"];
let fichasPuestas = 0;
let partidaAcabada = false;
let textoGanador = document.getElementById("textoGanador");
let botones = Array.from(document.getElementsByTagName("button"));
let puestas = 0;

botones.forEach(x => x.addEventListener("click", ponerFicha))

function ponerFicha(event){
    let botonPulsado = event.target;
    if(!partidaAcabada && botonPulsado.innerHTML == ""){
        botonPulsado.innerHTML = fichas[turno];
        puestas += 1;

        let estadoPartida = estado();
        if(estadoPartida == 0){
            cambiaTurno();
            if(puestas < 9){
                ia();
                estadoPartida = estado();
                    puestas += 1;
                    cambiaTurno();
                }
            }
            if(estadoPartida == 1){
                textoGanador.stylevisibility = "visible";
                partidaAcabada = true;
            }
            else if(estadoPartida == -1){
                textoGanador.innerHTML = "¡PERDEDOR!"
                partidaAcabada = true;
                textoGanador.stylevisibility = "visible";

            }
        }
    }

function cambiaTurno(){
    if(turno==1){
        turno = 0;
    }
    else{
        turno = 1;
    }
}

function estado(){
    lugarVictoria = 0;
    nEstado = 0;

    function sonIguales(...args){
        valores = args.map(x=>x.innerHTML);
        if(valores[0] != "" && valores.every((x,i,arr) => x===arr[0])){
            args.forEach(x => x.style.backgroundColor = "chartreuse")
            return true;
        }
        else{
            return false;
        }
    }
    if(sonIguales(botones[0], botones[1], botones[2])){
        lugarVictoria = 1;
    }
    else if(sonIguales(botones[3], botones[4], botones[5])){
        lugarVictoria = 2;
    }
    else if(sonIguales(botones[6], botones[7], botones[8])){
        lugarVictoria = 3;
    }
    else if(sonIguales(botones[0], botones[3], botones[6])){
        lugarVictoria = 4;
    }
    else if(sonIguales(botones[1], botones[4], botones[7])){
        lugarVictoria = 5;
    }
    else if(sonIguales(botones[2], botones[5], botones[8])){
        lugarVictoria = 6;
    }
    else if(sonIguales(botones[0], botones[4], botones[8])){
        lugarVictoria = 7;
    }
    else if(sonIguales(botones[2], botones[4], botones[6])){
        lugarVictoria = 8;
    }

    if(lugarVictoria > 0){
        if(turno == 1){
            nEstado = 1;
        }
        else{
            nEstado = -1;
        }
    }
    return nEstado;
}
for(let i=0; i<5; i++){
    value();
}
function value(){
    let counter = 0;
    console.log("couter value:", counter+1)
}
