let fechaActual = new Date();

let diaSemana = fechaActual.getDay();
let diaN = fechaActual.getDate();

let nombreDias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let nombreDia = nombreDias[diaSemana]

console.log(`Hoy es: ${nombreDia} ${diaN} `)
