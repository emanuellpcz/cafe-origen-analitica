const ventas = require("./datos");

const {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");

const resultadoCiclo1 = totalVendido(ventas);
const resultadoMetodos1 = totalVendidoM(ventas);

console.log(
    resultadoCiclo1 === resultadoMetodos1 ? "OK" : "DIFERENTE"
);

const resultadoCiclo2 = unidadesVendidas(ventas);
const resultadoMetodos2 = unidadesVendidasM(ventas);

console.log(
    resultadoCiclo2 === resultadoMetodos2 ? "OK" : "DIFERENTE"
);

const resultadoCiclo3 = ventasPorCiudad(ventas, "medellín");
const resultadoMetodos3 = ventasPorCiudadM(ventas, "medellín");

console.log(
    resultadoCiclo3 === resultadoMetodos3 ? "OK" : "DIFERENTE"
);

const pruebaBogota = [
    { ciudad: "Bogotá", cantidad: 2, precio: 10000 },
    { ciudad: "BOGOTÁ", cantidad: 3, precio: 10000 }
];

console.log("PRUEBA DE AGRUPACIÓN DE BOGOTÁ");
console.log(totalPorCiudad(pruebaBogota));

const ventasDiaSinVentas = ventasDelDia(ventas, "2026-09-07");

console.log("PRUEBA DE TICKET PROMEDIO");
console.log(ticketPromedio(ventasDiaSinVentas));