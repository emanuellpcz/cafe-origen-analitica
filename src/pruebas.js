//archivo para probar las funciones que hice

const ventas = require("./datos.js")

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad
} = require("./analitica");


console.log("Pruebas valorVentas")
console.log(valorVenta(ventas[0]))

console.log("Pruebas totalVendido")
console.log(totalVendido(ventas))
console.log(totalVendido([ventas[0]]));
console.log(totalVendido([]));

console.log("Pruebas unidadesVendidas")
console.log(unidadesVendidas(ventas))
console.log(unidadesVendidas([ventas[0]]));
console.log(unidadesVendidas([]));

console.log("Pruebas ventaMayor")
console.log(ventaMayor(ventas))
console.log(ventaMayor([ventas[0]]));
console.log(ventaMayor([]));

console.log("Pruebas ticketPromedio")
console.log(ticketPromedio(ventas))
console.log(ticketPromedio([ventas[0]]));
console.log(ticketPromedio([]));

console.log("Pruebas ventasPorCiudad")
console.log(ventasPorCiudad(ventas, "medellín"))
console.log(ventasPorCiudad([ventas[0]], "medellín"));
console.log(ventasPorCiudad([], "medellín"));


console.log("Comprobaciones")
console.log("Total vendido:", totalVendido(ventas));
console.log("Unidades vendidas:", unidadesVendidas(ventas));