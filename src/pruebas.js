//archivo para probar las funciones que hice

const ventas = require("./datos.js")

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio
} = require("./analitica");

console.log(valorVenta(ventas[0]))

console.log(totalVendido(ventas))

console.log(unidadesVendidas(ventas))

console.log(ventaMayor(ventas))

console.log(ticketPromedio(ventas))