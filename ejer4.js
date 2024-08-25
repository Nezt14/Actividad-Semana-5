function diferenciaEnDias(fecha1, fecha2) {

const fechaInicio = new Date(fecha1);
const fechaFin = new Date(fecha2);

const diferenciaEnMilisegundos = fechaFin - fechaInicio;
const milisegundosPorDia = 1000 * 60 * 60 * 24;

const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / milisegundosPorDia);

return diferenciaEnDias;
}

const fecha1 = "2024-07-19";
const fecha2 = "2024-08-24";

console.log(`La diferencia en días es: ${diferenciaEnDias(fecha1, fecha2)} días`);