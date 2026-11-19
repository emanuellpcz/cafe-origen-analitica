//archivo para probar las funciones que hice

const ventas = require("./datos.js")

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor
} = require("./analitica");

console.log(valorVenta(ventas))