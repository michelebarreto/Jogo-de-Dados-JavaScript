function sorteio(){
    var sorteio = Math.floor(Math.random() * 6 + 1)
    //o Math é para gerar numero aleatorios no javascript
    // o Math.random sempre inicializa do , por isso colocou o +1
   switch(sorteio){
       case 1:
           document.getElementById('fac1').src ="imagem/dado1.jpg";
           break;

           case 2:
               document.getElementById('fac1').src="imagem/dado2.jpg";

               break;

            case 3:
                document.getElementById('fac1').src="imagem/dado3.jpg";
                break;

            case 4:
                document.getElementById('fac1').src="imagem/dado4.jpg";
                break;

            case 5:
                document.getElementById('fac1').src="imagem/dado5.jpg";
                break;

             case 6:
                 document.getElementById('fac1').src="imagem/dado6.jpg";

                 break;

                 default:



               
   }
}