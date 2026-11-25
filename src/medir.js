const {
    productos,
    ciudades,
    generarVentas

} = require("./generador");

const {
    totalPorCiudadInstrumentado,
    ventaMayorInstrumentado,
    totalVendidoInstrumentado,
    primeraVenta
} = require("./analitica");

const tamanos = [100, 1000, 10000, 100000]

const resultados = []

for(let cantidad of tamanos){

const contadorTotalVendido = {

    elementosVisitados: 0,
    comparaciones: 0

}

const contadorVentaMayor = {

    elementosVisitados: 0,
    comparaciones: 0

}

const contadorTotalPorCiudad = {

    elementosVisitados: 0,
    comparaciones: 0

}

const contadorPrimeraVenta = {

    elementosVisitados: 0,
    comparaciones: 0

}

const ventas = generarVentas(cantidad)

const totalVendido = totalVendidoInstrumentado(ventas, contadorTotalVendido)
const ventaMayor = ventaMayorInstrumentado(ventas, contadorVentaMayor)
const totalPorCiudad = totalPorCiudadInstrumentado(ventas, contadorTotalPorCiudad)
const PrimeraVenta = primeraVenta(ventas,contadorPrimeraVenta)

resultados.push({

    cantidad: cantidad,

    totalVendidoElementos: contadorTotalVendido.elementosVisitados,
    totalVendidoComparaciones: contadorTotalVendido.comparaciones,

    ventaMayorElementos: contadorVentaMayor.elementosVisitados,
    ventaMayorComparaciones: contadorVentaMayor.comparaciones,

    totalPorCiudadElementos: contadorTotalPorCiudad.elementosVisitados,
    totalPorCiudadComparaciones: contadorTotalPorCiudad.comparaciones,

    primeraVentaElementos: contadorPrimeraVenta.elementosVisitados,
    primeraVentaComparaciones: contadorPrimeraVenta.comparaciones

})

console.table(resultados)

}

