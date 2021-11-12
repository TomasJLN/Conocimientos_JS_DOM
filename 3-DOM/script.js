'use strict';

const { body } = document;
//Creamos el div contenedor para el reloj
const clockDiv = document.createElement('div');
//Creamos el div contenedor para la imagen
const divImg = document.createElement('div');
divImg.classList.add('eyesR');
//Insertamos el div de la imagen en el body
body.append(divImg);
//Insertamos el div del reloj en el body
body.append(clockDiv);

//Función que sobreescribe la hora cada segundo
setInterval(() => {
  //Cambio de la dirección de la vista cada segundo
  //activando y desactivando clases
  divImg.classList.toggle('eyesR');
  divImg.classList.toggle('eyesL');
  //Pintamos el contenido del div de la hora actualizado
  clockDiv.innerHTML = getTime();
}, 1000);

//Función que retorna la hora en formato deseado
function getTime() {
  const date = new Date();
  const now = date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return now;
}
