let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡No te queda de otra eh!\nTe amoo';
    document.getElementById('messageContainer2').style.display = 'block';
    document.getElementById('messageContainer2').innerHTML = '(Te toca regalo, guiño guiño)';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¿Que pasó?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '15px';
            document.getElementById('siBtn').style.padding = '10px 20px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = 'Creo que te equivocaste amor...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '20px';
            document.getElementById('siBtn').style.padding = '15px 25px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = '¿Otra vez te equivocaste?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '25px';
            document.getElementById('siBtn').style.padding = '20px 30px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = '¿Realmente estas segura?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '30px';
            document.getElementById('siBtn').style.padding = '25px 35px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'Di que si por favor';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '35px';
            document.getElementById('siBtn').style.padding = '30px 40px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Solo piensa en nuestro huevo';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '35px 45px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Andaleeeee';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '45px';
            document.getElementById('siBtn').style.padding = '40px 50px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'Yaaa';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '45px 55px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Vale, ya dejaré de preguntar...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

         
            document.getElementById('siBtn').style.fontSize = '55px';
            document.getElementById('siBtn').style.padding = '50px 60px';
    
            noButtonState++;
            break;
        case 9:
           
            document.getElementById('noBtn').innerHTML = 'Es broma, POR FAVOR DI SÍ';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '55px 65px';
            
            noButtonState++;
            break;
        
        case 10:
           
            document.getElementById('noBtn').innerHTML = 'NO... ya di que si';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '65px';
            document.getElementById('siBtn').style.padding = '60px 70px';
            
            noButtonState++;
            break;
        
        case 11:
           
            document.getElementById('noBtn').innerHTML = 'Anda Siiiiiiiiiiiiiiiiiiiiiiiiiii';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '65px 75px';
          
            noButtonState++;
            break;
        
     
        case 12:
                document.getElementById('noBtn').innerHTML = 'por favooooooor';
                document.getElementById('noBtn').style.backgroundColor = '#F1330A';
              
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('happyGifContainer').style.display = 'none';
                // Vuelve al estado 0
                noButtonState = 0;
                document.getElementById('noBtn').style.display = 'none';
                break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }
});


