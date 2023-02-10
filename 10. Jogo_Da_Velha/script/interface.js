document.addEventListener("DOMContentLoaded", ()=>{

    let square = document.querySelectorAll(".coluna");

    square.forEach((square)=>{
        square.addEventListener("click", handleClick);
    })
})

function handleClick(evento){    
    let exibir = document.getElementById("exibir");
    let vitX = document.getElementById("vitX");
    let vitO = document.getElementById("vitO");
    let square = evento.target;
    let posicao = square.id;

    if(jogar(posicao)){
        setTimeout(()=>{
        let simbolo = tabuleiro[posicao];
        exibir.style.display = 'block';
        exibir.innerHTML = `<div class=${simbolo}><p class="texto">O GANHADOR FOI:</p></div>`
        vitX.innerHTML = `<div><p>${vitoriaX}</p></div>`
        vitO.innerHTML = `<div><p>${vitoriaO}</p></div>`
        },10)
    }

    if(empate == true){
        exibir.style.display = 'block';
        exibir.innerHTML = `<div class="velha"><p class="texto">A PARTIDA EMPATOU</p></div>`
    }
    atlColuna(posicao)();
}


function atlColuna(posicao){
    let square = document.getElementById(posicao.toString());
    let simbolo = tabuleiro[posicao];
    square.innerHTML=`<div class=${simbolo}></div>`;   
}

function resertJogo(){

    let exibir = document.getElementById("exibir");
    let square = document.querySelectorAll(".coluna");
    square.forEach((square)=>{
        square.innerHTML=`<div></div>`    
    })

     tabuleiro = ['','','','','','','','',''];
     empate = false;
     fimDeJogo = false;
     turnoJogador = 0;
     contadorEmpate = 0;
     exibir.innerHTML = `<div></div>`;
     exibir.style.display = 'none';
}