const ventas = require("./datos");

const {
    totalVendido,
    unidadesVendidas,
    totalPorCiudad,
    unidadesPorProducto,
    topProductosPorValor,
    ventasDelDia
} = require("./analitica");


console.log("\n==============================================");
console.log("          RESUMEN GENERAL DE VENTAS");
console.log("                  CAFE ORIGEN");
console.log("==============================================\n");


console.log("INDICADORES GENERALES");
console.log("----------------------------------------------");

console.log("\nUNIDADES VENDIDAS");
console.log("----------------------------------------------");
console.log("El total de unidades vendidas en Cafe Origen es de:", unidadesVendidas(ventas));


console.log("\nTOTAL VENDIDO");
console.log("----------------------------------------------");
console.log("El total vendido contando todas las ventas es de: $", totalVendido(ventas).toLocaleString("es-CO"));


console.log("\nVENTAS POR CIUDAD");
console.log("----------------------------------------------");

const ciudades = totalPorCiudad(ventas);

for (const ciudad in ciudades) {
    console.log(
        ciudad.padEnd(20),
        "$ " + ciudades[ciudad].toLocaleString("es-CO")
    );
}


console.log("\nUNIDADES POR PRODUCTO");
console.log("----------------------------------------------");

const productos = unidadesPorProducto(ventas);

for (const producto in productos) {
    console.log(
        producto.padEnd(20),
        productos[producto]
    );
}


console.log("\nTOP 3 PRODUCTOS POR VALOR");
console.log("----------------------------------------------");

const topProductos = topProductosPorValor(ventas, 3);

topProductos.forEach((producto, indice) => {
    console.log(
        `${indice + 1}. ${producto[0]}: $ ${producto[1].toLocaleString("es-CO")}`
    );
});

const ventasDiaConVentas = ventasDelDia(ventas, "2026-09-01");
const ventasDiaSinVentas = ventasDelDia(ventas, "2026-09-07");

console.log("\nRESUMEN DIARIO");
console.log("----------------------------------------------");

console.log("\nFECHA: 2026-09-01");
console.log("Cantidad de ventas:", ventasDiaConVentas.length);
console.log("Unidades vendidas:", unidadesVendidas(ventasDiaConVentas));
console.log("Total vendido: $", totalVendido(ventasDiaConVentas).toLocaleString("es-CO"));

console.log("\nFECHA: 2026-09-07");
console.log("Cantidad de ventas:", ventasDiaSinVentas.length);
console.log("Unidades vendidas:", unidadesVendidas(ventasDiaSinVentas));
console.log("Total vendido: $", totalVendido(ventasDiaSinVentas).toLocaleString("es-CO"));


console.log("\n==============================================");
console.log("                 FIN DEL REPORTE");
console.log("==============================================");