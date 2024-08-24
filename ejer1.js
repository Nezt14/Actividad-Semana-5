let fecha = new Date(`2012-02-20-3:12`)

let mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "octubre", "Noviembre", "Diciembre"]

let año = fecha.getFullYear()
let mes1 = mesesAño[fecha.getMonth()]
let dia1 = fecha.getDate()
let hora = fecha.getHours()
let min = fecha.getMinutes()

console.log(` ${mes1} ${dia1}, ${año}, ${hora}:${min}AM `)