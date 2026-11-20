function valorVenta(venta){

    let total = 0 
    total = venta.precio * venta.cantidad
    return total

}

function totalVendido(ventas){

    let total = 0

    for(let venta of ventas){

        let totalVenta = valorVenta(venta)
        
        total += totalVenta

    }

    return total

}

function unidadesVendidas(ventas){

    let total = 0

    for(let cant of ventas){

        total += cant.cantidad

    }

    return total

}

function ventaMayor(ventas){

    let mayor = 0
    let venta = null

    for(let contador of ventas){

        let price = valorVenta(contador)

        if (mayor < price) {

            mayor = price
            venta = contador

        }

    }

    return venta

}

function ticketPromedio(ventas){

    let total = totalVendido(ventas)
    let numVentas = 0
    for(let venta of ventas){

        if(venta.cantidad > 0){

            numVentas++

        }

    }

    let promedio = total / numVentas

    return promedio

}

    function ventasPorCiudad(ventas, ciudad){

        

    }




module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio
};