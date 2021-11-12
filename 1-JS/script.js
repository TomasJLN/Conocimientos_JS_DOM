'use strict';

//Generamos una contraseña aleatoria de 0 a 100
const password = Math.floor(Math.random() * 101);

//Definimos variables que vamos a utilizar
let tries = 1;
let winner = false;
let userNumber = 0;

//Bucle do while para los 5 intentos
do {
  //Si es el último intento, avisamos  al usuario que no tiene más oportunidades
  //Si no, le avisamos de cuántos intentos le quedan
  if (tries === 5) {
    userNumber = Number(prompt(`Último intento ${tries} de 5: `));
  } else {
    userNumber = Number(
      prompt(
        `🧐 Introduce el nº secreto entre 0 a 100. Intento ${tries} de 5: `
      )
    );
  }

  //Comprobamos que el nº introducido se encuentra en el rango de los nº aceptados
  if (checkNumber(userNumber)) {
    //Si el nº usuario es igual a la contraseña, la variable winner la pasamos a true
    if (userNumber === password) {
      winner = true;
      //Si no se da una pista sobre si la contraseña es mayor o menor que el número dado
    } else {
      if (tries < 5) alert(clueNumber());
      tries++;
    }
    //Si el nº introducido no es válido, avisamos al usuario y cuenta como intento
  } else {
    if (tries <= 4) {
      alert(
        `El nº debe estar entre el 0 y el 100...\nHas perdido una oportunidad, te quedan ${
          5 - tries
        }`
      );
      tries++;
    } else {
      alert('Ya no te quedan oportunidades...');
      tries++;
    }
  }
} while (!winner && tries < 6);

//Comprobamos si al salir del bucle el usuario acertó o falló
//Al finalizar le damos la oportunidad de jugar de nuevo
if (winner) {
  alert(
    `🎉 Enhorabuena!! 🎉 \nHas acertado la contraseña en el intento: ${tries}`
  );
} else {
  alert(`🤪 Has perdido!!. La Contraseña era ${password}`);
}

//Damos la posibilidad al finalizar de jugar otra vez.
const repeat = confirm('Quieres intentarlo de nuevo?');
if (repeat) window.location.reload();

/**
 * #############
 * ## funciones ##
 * #############
 */

//Chequeamos que el nº que introduce el usuario cumple las condiciones
function checkNumber(num) {
  if (num >= 0 && num < 101) return true;
  else return false;
}

//Función pista sobre la contraseña
function clueNumber() {
  if (password < userNumber)
    return `👁️‍🗨️ La Contraseña es MENOR que ${userNumber}`;
  else return `👁️‍🗨️ La Contraseña es MAYOR que ${userNumber}`;
}
