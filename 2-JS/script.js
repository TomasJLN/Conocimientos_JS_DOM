'use strict';

// puntuaciones
const puntuaciones = [
  {
    equipo: 'Toros Negros',
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: 'Amanecer Dorado 🤦‍♂️',
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: 'Águilas Plateadas',
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: 'Leones Carmesí',
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: 'Rosas Azules',
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: 'Mantis Verdes',
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: 'Ciervos Celestes',
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: 'Pavos Reales Coral',
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: 'Orcas Moradas',
    puntos: [2, 3, 3, 4],
  },
];

//Creamos array temporal para manipular datos
const tmpArr = [];

//Pusheamos en el array temporal los datos que nos interesan por cada equipo
for (const item of puntuaciones) {
  const result = item.puntos.reduce((acc, points) => {
    return acc + points;
  }, 0);
  tmpArr.push({ nombre: item['equipo'], puntos: result });
}

//Ordenamos de mayor a menor los equipos por su puntuación total
tmpArr.sort((a, b) => b.puntos - a.puntos);

//Extraemos los datos del equipo con más puntos
const firstTeam = tmpArr.shift();

//Extraemos los datos del equipo con menos puntos
const lastTeam = tmpArr.pop();

//Mostramos el contenido pedido por consola
console.log(
  `🥇 El equipo con mayor puntuación es: \n${firstTeam.nombre} con ${firstTeam.puntos} puntos`
);

console.log(' ');
console.log(
  `🚩 El equipo con menor puntuación es: \n${lastTeam.nombre} con ${lastTeam.puntos} puntos`
);

//Otra forma de sacar el 1º y último sin modificar el array temporal
// const firstTeam = tmpArr[0];
// const lastTeam = tmpArr[tmpArr.length - 1];
// console.log(
//   `🥇 El equipo con mayor puntuación es: ${firstTeam.nombre} con ${firstTeam.puntos} puntos`
// );
// console.log(
//   `🚩 El equipo con menor puntuación es: ${lastTeam.nombre} con ${lastTeam.puntos} puntos`
// );
