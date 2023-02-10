let tabuleiro = ['','','','','','','','',''];
let simbolo = ['x','o'];
let empate = false;
let fimDeJogo = false;
let turnoJogador = 0;
let contadorEmpate = 0;
let vitoriaO = 0;
let vitoriaX = 0;
let winStatus = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function jogar(posicao){

    if(fimDeJogo){
        return;
    }

    if(tabuleiro[posicao] == ""){
        tabuleiro[posicao] = simbolo[turnoJogador];

        fimDeJogo = vitoria();

        if(fimDeJogo == false){      
            turnoJogador = (turnoJogador == 0) ? 1 : 0;
        }
        
    }

    return fimDeJogo;;
}

function vitoria(){

    for(let i = 0; i<winStatus.length;i++){
        let seq = winStatus[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if(tabuleiro[pos1] == tabuleiro[pos2] && tabuleiro[pos1] == tabuleiro[pos3] && tabuleiro[pos1] != ""){
            if(tabuleiro[pos1] == "x"){
                vitoriaX++;
            }else if(tabuleiro[pos1] == "o"){
                vitoriaO++;
            }
            return true; 
        }
    }
    contadorEmpate++;

    if(contadorEmpate==9){
        empate = true;
    }
    return false;
}