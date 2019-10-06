document.body.onkeydown = Move;
var bar01 = document.getElementsByClassName("bar")[0]; //Var = barra 1
var bar02 = document.getElementsByClassName("bar")[1]; //Var = barra 2

var posB01 = 320; //Posição atual bar 1
var posB02 = 320; //Posição atual bar 2

bar01.style.top = posB01 + 'px'; //Movendo a bar 1
bar02.style.top = posB02 + 'px'; //Movendo a bar 2

function Move(){//Mover barras
    if(event.key == "w"){ //Qnd apertar W
        var idS = setInterval(Sobe, 1); //Ativando a animação quando pressionada a tecla, e sera de 1 milisegundo
        var canB1 = 0; //Variável, definindo quanto que a barra 1 pode se mover

        function Sobe(){ //Animação
            if(posB01 < 0 || canB1 > 45){ //Se a barra 1 se mover mais de 45 vezes ou se encostar na borda de cima
                if(posB01 < 0){ //Se somente encostar na borda de cima
                    posB01++;                            
                }
            }

            else{ //Se não encostar, se moverá
                canB1++;
                posB01--;
                bar01.style.top = posB01 + 'px';
            }
        }
    }

    if(event.key == "s"){ //Qnd apertar S
        var idS = setInterval(Desc, 1); //Ativando a animação quando pressionada a tecla
        var canB1 = 0; //Variável, definindo quanto que a barra 1 pode se mover

        function Desc(){ //Animação
            if(posB01 > screen.height - 260 || canB1 > 45){ //Se a barra 1 se mover mais de 45 vezes ou se encostar na borda de baixo, se subtrai 260, pois é o screen.height é o tamanho da tela, e 256 é o tamanho da barra
                if(posB01 > screen.height - 260){ //Se somente encostar na borda de baixo
                    posB01--;                            
                }
            }

            else{ //Se não encostar, se moverá
                canB1++;
                posB01++;
                bar01.style.top = posB01 + 'px';
            }
        }
    }

    if(event.key == "ArrowUp"){ //Qnd apertar seta pra cima
        var idS = setInterval(Desc, 1); //Ativando a animação quando pressionada a tecla
        var canB2 = 0; //Variável, definindo quanto que a barra 2 pode se mover

        function Desc(){ //Animação
            if(posB02 < 0 || canB2 > 45){ //Se a barra 2 se mover mais de 45 vezes ou se encostar na borda de cima
                if(posB02 < 0){ //Se somente encostar na borda de cima
                    posB02++;                            
                }
            }

            else{ //Se não encostar, se moverá
                canB2++;
                posB02--;
                bar02.style.top = posB02 + 'px';
            }
        }
    }

    if(event.key == "ArrowDown"){ //Qnd apertar seta pra baixo
        var idS = setInterval(Desc, 1); //Ativando a animação quando pressionada a tecla
        var canB2 = 0; //Variável, definindo quanto que a barra 2 pode se mover

        function Desc(){ //Animação
            if(posB02 > screen.height - 260 || canB2 > 45){ //Se a barra 2 se mover mais de 45 vezes ou se encostar na borda de baixo
                if(posB02 > screen.height - 260){ //Se somente encostar na borda de baixo
                    posB02--;                            
                }
            }

            else{ //Se não encostar, se moverá
                canB2++;
                posB02++;
                bar02.style.top = posB02 + 'px';
            }
        }
    }
}



var ball = document.getElementsByClassName("ball")[0];

var randomRight = parseInt(Math.random() * 2); //Sorteando se ela vai para a direita ou esquerda
var randomTop = parseInt(Math.random() * 2); //Sorteando se ela vai pra cima ou pra baixo

if(randomRight == 0){
    var right = false; //Não vai para a direita
}

else if(randomRight == 1){ //Vai para a direira
    var right = true;
}


if(randomTop == 0){ //Não vai pra cima
    var topo = false;
}

else if(randomTop == 1){ // Vai pra cima
    var topo = true;
}


var anima = setInterval(MoveBall, 1); //Animação
var ballPosX = 650; //Posição inicial da bola no eixo X
var ballPosY = 350; //Posição inicial da bola no eixo Y
var pontosP1 = 0; //Pontos Player 1
var pontosP2 = 0; //Pontos Player 2
var pontuacao = document.getElementsByClassName("pontos")[0]; //Pegando o parágrafo da pontuação

function MoveBall(){
    if(ballPosX < 0 || ballPosX > screen.width - 62 || ballPosY < 0 || ballPosY > screen.height - 135 || ballPosY > posB01 - 70 && ballPosY < posB01 + 160 && ballPosX < 90 || ballPosY > posB02 - 100 && ballPosY < posB02 + 160 && ballPosX > screen.width - 150){ //Se a bola encostar nas bordas ou nas barras
        if(right == true && topo == false){//Se ela estiver indo para direita e para baixo
            right = true;
            topo = true;

        }

        else if(right == true && topo == true){ //Se ela estiver indo para direita e para cima
            right = false;
            topo = true;

            if(ballPosX > screen.width - 62 && topo == true){ //Se ela encostar na parede do Player 2
                pontosP1++;
            }
        }

        else if(right == false && topo == true){ //Se ela estiver indo para esquerda e para cima
            right = false;
            topo = false;
        }

        else if(right == false && topo == false){ //Se ela estiver indo para esquerda e para baixo
            right = true;
            topo = false;

            if(ballPosX < 0 && topo == false){ //Se ela encostar na parede do Player 1
                pontosP2++;
            }
        }


        //IGNORE ISSO
        // if(ballPosX > screen.width - 62 && topo == true){
        //     pontosP1++;
        // }

        // else if(ballPosX > screen.width - 62 && topo == false){
        //     pontosP1++;
        // }

        // if(ballPosX < 0 && topo == false){
        //     pontosP2++;
        // }

        // else if(ballPosX < 0 && topo == true){
        //     pontosP2++;
        // }
    }

    if(right == true && topo == false){
        ballPosX++;
        ballPosY++;

        ball.style.left = ballPosX + 'px'; //Move a bola para a esquerda ou direita
        ball.style.top = ballPosY + 'px'; //Move a bola para cima ou pra baixo
    }

    else if(right == true && topo == true){
        ballPosX++;
        ballPosY--;

        ball.style.left = ballPosX + 'px';
        ball.style.top = ballPosY + 'px';
    }

    else if(right == false && topo == false){
        ballPosX--;
        ballPosY++;

        ball.style.left = ballPosX + 'px';
        ball.style.top = ballPosY + 'px';
    }

    else if(right == false && topo == true){
        ballPosX--;
        ballPosY--;

        ball.style.left = ballPosX + 'px';
        ball.style.top = ballPosY + 'px';
    }

    pontuacao.innerHTML = pontosP1 + " x " + pontosP2; //Escreve no parágrafo (texto da pontuação), a pontuação atual dos players
}