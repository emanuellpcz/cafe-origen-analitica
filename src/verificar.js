const ventas = require("./datos");

const {
    totalVendido,
    totalVendidoM,
    unidadesVendidas,
    unidadesVendidasM,
    ventasPorCiudad,
    ventasPorCiudadM
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