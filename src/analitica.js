function valorVenta(venta){

    let total = 0 
    total = venta.precio * venta.cantidad
    return total

}

function totalVendido(ventas){

    for(let venta of ventas){

        let totalVenta = valorVenta(venta)

        let total = 0
        total += totalVenta

        return total

    }

}

function unidadesVendidas(ventas){

    for(let cant of ventas){

        let total = 0
        total += cant.cantidad
        return total

    }

}

function ventaMayor(ventas){

    for(let contador of ventas){

        let price = valorVenta(contador)

        let mayor = 0

        if (mayor < price) {

            mayor = ventas.contador

        }

    }

    return mayor

}




module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor
};