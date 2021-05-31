let jogo=[];//recebe o controle do jogo guarda as posiçoes das jogadas 0ouX
let tabuleiro=[];//vai controlar os elementos visuaus onde ta vazio
//quando clicar faz interação com jogo e ataulaiaa vizualmente no tabuleiro
let quemJoga=0;//0 joagador, 1 cpu
let verifica;//verifica o resulatado de uma funçao criada que vai verificar se ouve vencedor ou n;
let jogando= true;// indica se o jogo ta rolando ou n
let nivelDificuldade=2;
let jogadaCpu=1;//indicar a jogada da cpu dependadno do nivel joga em posiçao aleatoria
let quemComeca=1;//indica se é o jogador ou a cpu
let jogada=0;

function cpuJoga(){
    if(jogando){
        let linha, coluna;
        if(nivelDificuldade==1){
            do{
                linha=Math.round(Math.random()*2);
                coluna=Math.round(Math.random()*2);
            }while (jogo[linha][coluna]!="");
            jogo[linha][coluna]="O";
        }

        else if(nivelDificuldade==2){
            //Ataque
            //jogadas Linha 1
            if((jogo[0][0]=="O")&&(jogo[0][1]=="O")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else if((jogo[0][0]=="O")&&(jogo[0][1]=="")&&(jogo[0][2]=="O")){
                jogo[0][1]="O";
            }else if((jogo[0][0]=="")&&(jogo[0][1]=="O")&&(jogo[0][2]=="O")){
                jogo[0][0]="O";
            }else //if(else if) ,porém o if vai fcar a baixo
            //jogadas Linha 2
            if((jogo[1][0]=="O")&&(jogo[1][1]=="O")&&(jogo[1][2]=="")){
                jogo[1][2]=="O";
            }else if((jogo[1][0]=="O")&&(jogo[1][1]=="")&&(jogo[1][2]=="O")){
                jogo[1][1]="O";
            }else if((jogo[1][0]=="")&&(jogo[1][1]=="O")&&(jogo[1][2]=="O")){
                jogo[1][0]="O";
            }else 
            //jogadas Linha 3
            if((jogo[2][0]=="O")&&(jogo[2][1]=="O")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[2][0]=="O")&&(jogo[2][1]=="")&&(jogo[2][2]=="O")){
                jogo[2][1]="O";
            }else if((jogo[2][0]=="")&&(jogo[2][1]=="O")&&(jogo[2][2]=="O")){
                jogo[2][0]="O";
            }else 

            //jogadas Coluna 1
            if((jogo[0][0]=="O")&&(jogo[1][0]=="O")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][0]=="O")&&(jogo[1][0]=="")&&(jogo[2][0]=="O")){
                jogo[1][0]="O";
            }else if((jogo[0][0]=="")&&(jogo[1][0]=="O")&&(jogo[2][0]=="O")){
                jogo[0][0]="O";
            } 
            //jogadas Coluna 2
            else if((jogo[0][1]=="O")&&(jogo[1][1]=="O")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[0][1]=="O")&&(jogo[1][1]=="")&&(jogo[2][1]=="O")){
                jogo[1][1]="O";
            }else if((jogo[0][1]=="")&&(jogo[1][1]=="O")&&(jogo[2][1]=="O")){
                jogo[0][1]="O";
            } 

            //jogadas Coluna 3
            else if((jogo[0][2]=="O")&&(jogo[1][2]=="O")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][2]=="O")&&(jogo[1][2]=="")&&(jogo[2][2]=="O")){
                jogo[1][2]="O";
            }else if((jogo[0][2]=="")&&(jogo[1][2]=="O")&&(jogo[2][2]=="O")){
                jogo[0][2]="O";
            }

            //jogadas Diagonal 1
            else if((jogo[2][0]=="O")&&(jogo[1][1]=="O")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else if((jogo[2][0]=="O")&&(jogo[1][1]=="")&&(jogo[0][2]=="O")){
                jogo[1][1]="O";
            }else if((jogo[2][0]=="")&&(jogo[1][1]=="O")&&(jogo[0][2]=="O")){
                jogo[2][0]="O";
            }
            //jogadas Diagonal 2
            else if((jogo[0][2]=="O")&&(jogo[1][1]=="O")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][2]=="O")&&(jogo[1][1]=="")&&(jogo[2][0]=="O")){
                jogo[1][1]="O";
            }else if((jogo[0][2]=="")&&(jogo[1][1]=="O")&&(jogo[2][0]=="O")){
                jogo[0][2]="O";
            }

            //Defesa
            //jogadas Linha 1
            else if((jogo[0][0]=="X")&&(jogo[0][1]=="X")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else if((jogo[0][0]=="X")&&(jogo[0][1]=="")&&(jogo[0][2]=="X")){
                jogo[0][1]="O";
            }else if((jogo[0][0]=="")&&(jogo[0][1]=="X")&&(jogo[0][2]=="X")){
                jogo[0][0]="O";
            }else //if , poré o diff vai fcar a baixo
            //jogadas Linha 2
            if((jogo[1][0]=="X")&&(jogo[1][1]=="X")&&(jogo[1][2]=="")){
                jogo[1][2]="O";
            }else if((jogo[1][0]=="X")&&(jogo[1][1]=="")&&(jogo[1][2]=="X")){
                jogo[1][1]="O";
            }else if((jogo[1][0]=="")&&(jogo[1][1]=="X")&&(jogo[1][2]=="X")){
                jogo[1][0]="O";
            }else 
            //jogadas Linha 3
            if((jogo[2][0]=="X")&&(jogo[2][1]=="X")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[2][0]=="X")&&(jogo[2][1]=="")&&(jogo[2][2]=="X")){
                jogo[2][1]="O";
            }else if((jogo[2][0]=="")&&(jogo[2][1]=="X")&&(jogo[2][2]=="X")){
                jogo[2][0]="O";
            }else 

            //jogadas Coluna 1
            if((jogo[0][0]=="X")&&(jogo[1][0]=="X")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][0]=="X")&&(jogo[1][0]=="")&&(jogo[2][0]=="X")){
                jogo[1][0]="O";
            }else if((jogo[0][0]=="")&&(jogo[1][0]=="X")&&(jogo[2][0]=="X")){
                jogo[0][0]="O";
            } 
            //jogadas Coluna 2
            else if((jogo[0][1]=="X")&&(jogo[1][1]=="X")&&(jogo[2][1]=="")){
                jogo[2][1]="O";
            }else if((jogo[0][1]=="X")&&(jogo[1][1]=="")&&(jogo[2][1]=="X")){
                jogo[1][1]="O";
            }else if((jogo[0][1]=="")&&(jogo[1][1]=="X")&&(jogo[2][1]=="X")){
                jogo[0][1]="O";
            } 

            //jogadas Coluna 3
            else if((jogo[0][2]=="X")&&(jogo[1][2]=="X")&&(jogo[2][2]=="")){
                jogo[2][2]="O";
            }else if((jogo[0][2]=="X")&&(jogo[1][2]=="")&&(jogo[2][2]=="X")){
                jogo[1][2]="O";
            }else if((jogo[0][2]=="")&&(jogo[1][2]=="X")&&(jogo[2][2]=="X")){
                jogo[0][2]="O";
            }

            //jogadas Diagonal 1
            else if((jogo[2][0]=="X")&&(jogo[1][1]=="X")&&(jogo[0][2]=="")){
                jogo[0][2]="O";
            }else if((jogo[2][0]=="X")&&(jogo[1][1]=="")&&(jogo[0][2]=="X")){
                jogo[1][1]="O";
            }else if((jogo[2][0]=="")&&(jogo[1][1]=="X")&&(jogo[0][2]=="X")){
                jogo[2][0]="O";
            }
            //jogadas Diagonal 2
            else if((jogo[0][2]=="X")&&(jogo[1][1]=="X")&&(jogo[2][0]=="")){
                jogo[2][0]="O";
            }else if((jogo[0][2]=="X")&&(jogo[1][1]=="")&&(jogo[2][0]=="X")){
                jogo[1][1]="O";
            }else if((jogo[0][2]=="")&&(jogo[1][1]=="X")&&(jogo[2][0]=="X")){
                jogo[0][2]="O";
            }else{
                if (jogada<8) {
                    do{
                        linha=Math.round(Math.random()*2);
                        coluna=Math.round(Math.random()*2);
                    }while (jogo[linha][coluna]!="");
                    jogo[linha][coluna]="O";
                }else{
                    for (let linha = 0; linha < 3; linha++) {
                        for (let coluna = 0; coluna < 3; coluna++) {
                            if (jogo[linha][coluna]=="") {
                                jogo[linha][coluna]=="O";
                            }
                        }
                    }
                }
            }
        }
        jogada++;
        verifica=verificarVitoria();
        if(verifica!=""){
            alert(verifica+" Venceu");
            jogando=false;
        }
        atualizaTabuleiro();
        quemJoga=0;
    }
}

function verificarVitoria(){
    let linha, coluna;
    //Linha
    for (linha = 0; linha < 3; linha++) {
        if ((jogo[linha][0]==jogo[linha][1])&&(jogo[linha][1]==jogo[linha][2])) {
            return jogo[linha][0];
        }
    }
    //Coluna
    for (coluna = 0; coluna < 3; coluna++) {
        if ((jogo[0][coluna]==jogo[1][coluna])&&(jogo[1][coluna]==jogo[2][coluna])) {
            return jogo[0][coluna];
        }
    }
    //Diagonal
    if ((jogo[0][0]==jogo[1][1])&&(jogo[1][1]==jogo[2][2])) {
        return jogo[0][0];
    }
    if ((jogo[0][2]==jogo[1][1])&&(jogo[1][1]==jogo[2][0])) {
        return jogo[0][2];
    }
    return "";
}

function jogar(posicao){
    if((jogando)&&(quemJoga==0)){
        switch (posicao) {
            case 1:
                //com a patriz vazia(joggo na função inicia)
                //podemos vreificar se a posição um esta vazia para a jogada
                if(jogo[0][0]==""){
                    //se jogo na posicao [0][0] da matriz estiver vazia o jogador acrescenta
                    jogo[0][0]="X";//jogador faz a jogada
                    quemJoga=1;//passa pra cpu
                }
                break;
            case 2:
                if(jogo[0][1]==""){
                    jogo[0][1]="X";
                    quemJoga=1;
                }
                break;
            case 3:
                if(jogo[0][2]==""){
                    jogo[0][2]="X";
                    quemJoga=1;
                }
                break;
            case 4:
                if(jogo[1][0]==""){
                    jogo[1][0]="X";
                    quemJoga=1;
                }
                break;    
            case 5:
                if(jogo[1][1]==""){
                    jogo[1][1]="X";
                    quemJoga=1;
                }
                break;
            case 6:
                if(jogo[1][2]==""){
                    jogo[1][2]="X";
                    quemJoga=1;
                }
                break;
            case 7:
                if(jogo[2][0]==""){
                    jogo[2][0]="X";
                    quemJoga=1;
                }
                break;    
            case 8:
                if(jogo[2][1]==""){
                    jogo[2][1]="X";
                    quemJoga=1;
                }
                break;
            case 9:
                if(jogo[2][2]==""){
                    jogo[2][2]="X";
                    quemJoga=1;
                }
                break;
        }
        if(quemJoga==1){
            atualizaTabuleiro();
            verifica=verificarVitoria();
            if(verifica!=""){
                alert(verifica+" Venceu");
                jogando=false;
            }
            jogada++;
            cpuJoga();
        }
        
    }
}

function atualizaTabuleiro(){
//essa fução n recebe parametro so vai atualizar conforme a função jogar for rodando
//inicialaiza na função inicia com o array tabuleiro
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            if (jogo[linha][coluna]=="X") {
                tabuleiro[linha][coluna].innerHTML="X";
                tabuleiro[linha][coluna].style.cursor="default";
            }else if (jogo[linha][coluna]=="O") {
                tabuleiro[linha][coluna].innerHTML="O";
                tabuleiro[linha][coluna].style.cursor="default";
            }else{
                tabuleiro[linha][coluna].innerHTML="";
                tabuleiro[linha][coluna].style.cursor="pointer";
            }
        }
    }
}

function inicia(){
    //função para inicializar a matriz do jogo da velha(inicializar a matriz de joggo)
    jogando=true;//jogo ta rolando
    jogadaCpu=1;//a cpu jogga primeiro
    jogada=0;
    jogo=[["","",""],
          ["","",""],
          ["","",""]];//inicialização do tabuleiro , zera a matriz
    tabuleiro=[[document.getElementById("espaco1"),document.getElementById("espaco2"),document.getElementById("espaco3")],
               [document.getElementById("espaco4"),document.getElementById("espaco5"),document.getElementById("espaco6")],
               [document.getElementById("espaco7"),document.getElementById("espaco8"),document.getElementById("espaco9")]];

    atualizaTabuleiro();
    if(quemComeca==1){
        quemComeca=0;;
        quemJoga=quemComeca;
        document.getElementById("quemComeca").innerHTML="Jogador Começa";
    }else{
        quemComeca=1;
        quemJoga=quemComeca;
        document.getElementById("quemComeca").innerHTML="CPU Começa";
        cpuJoga();
    }
}
window.addEventListener("load",inicia);



//jeito errado
            /*//linha
            if (jogo[linha][0]==jogo[linha][1]) {
                jogo[linha][2]="O";
            }
            else if (jogo[linha][1]==jogo[linha][2]) {
                jogo[linha][0]="O";
            }
            else if (jogo[linha][0]==jogo[linha][2]) {
                jogo[linha][1]="O";
            }
            //coluna
            else if (jogo[0][coluna]==jogo[1][coluna]) {
                jogo[2][coluna]="O";
            }
            else if (jogo[1][coluna]==jogo[2][coluna]) {
                jogo[0][coluna]="O";
            }
            else if (jogo[0][coluna]==jogo[2][coluna]) {
                jogo[1][coluna]="O";
            }
            //diagonal
            else if ((jogo[0][0]==jogo[1][1])) {
                jogo[2][2]="O";
            }
            else if ((jogo[1][1]==jogo[2][2])) {
                jogo[0][0]="O";
            }
            else if ((jogo[0][0]==jogo[2][2])) {
                jogo[1][1]="O";
            }

            else if ((jogo[0][2]==jogo[1][1])) {
                jogo[2][0]="O";
            }
            else if ((jogo[1][1]==jogo[2][0])) {
                jogo[0][2]="O";
            }
            else if ((jogo[0][2]==jogo[2][0])) {
                jogo[1][1]="O";
            }*/
