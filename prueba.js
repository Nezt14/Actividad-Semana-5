// trate de hacer el 1 asi pero al final no pude poner bien la hora

let fecha = new Date(`2012-02-20   `)


mesesAño = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "oct", "Nov", "Dic"]

let año = fecha.getFullYear();
let mes = mesesAño[fecha.getMonth()];
let dia = fecha.getDate();

let horas = new Date(`03:12:00`);
let hrs = horas.getHours();
let min = horas.getMinutes();


console.log(`la fecha es:${mes},${dia + 1},${año}, ${hrs}:${min} `)