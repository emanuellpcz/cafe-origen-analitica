const ventas = require("./datos")

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

    let promedio = 0

    if(numVentas > 0){

    promedio = total / numVentas

    }
    else{

    promedio = null

    }

    return promedio

}

    function ventasPorCiudad(ventas, ciudad){

        let city = null
        let suma = 0
        let lectura = ciudad.trim().toLowerCase()

        for(let venta of ventas){

            city = venta.ciudad.trim().toLowerCase()

            if(city === lectura){

                suma += valorVenta(venta)

            }

        }

        return suma

    }

    function totalVendidoM(ventas) {

    const valor = ventas.map(venta => {

        return valorVenta(venta);

    });

    const total = valor.reduce((acumulador, num) => {

        return acumulador + num;

    }, 0);

    return total;
    }

    console.log(totalVendidoM(ventas))

    function unidadesVendidasM(ventas) {

    const uni = ventas.map(unidad => {

        return unidad.cantidad;

    });

    const total = uni.reduce((acumulador, num) => {

        return acumulador + num;

    }, 0);

    return total;
    }

    console.log(unidadesVendidasM(ventas))

    function ventasPorCiudadM(ventas, ciudad){

        const normal = ciudad.trim().toLowerCase()

        const filtro = ventas.filter(venta =>{

            return venta.ciudad.trim().toLowerCase() === normal

        })

        const total = filtro.reduce((cont, num)=>{

                return cont + valorVenta(num);

            }, 0);

            return total

        }

        

    console.log(ventasPorCiudadM(ventas, "caLi"))

    function totalPorCiudad(ventas){

        const result = ventas.reduce((acum, obj)=>{

            let ciudadNormalizada = obj.ciudad.trim().toLowerCase()

            if(acum[ciudadNormalizada] === undefined){

                acum[ciudadNormalizada] = 0

            }

            acum[ciudadNormalizada] += valorVenta(obj)

            return acum

        },{});

        return result

    }

    console.log(totalPorCiudad(ventas))

    function unidadesPorProducto(ventas){

        const result = ventas.reduce((acum, obj)=>{

            let producto = obj.producto

            if(acum[producto] === undefined){

                acum[producto] = 0

            }

            acum[producto] += obj.cantidad

            return acum

        },{});

        return result

    }

    console.log(unidadesPorProducto(ventas))

    function topProductosPorValor(ventas, k){

        const prods = ventas.reduce((acum, obj)=>{

            let producto = obj.producto;

            if(acum[producto] === undefined){

                acum[producto] = 0

            }

            acum[producto] += valorVenta(obj)

            return acum

        },{})

        const array = Object.entries(prods)

        const copia = [...array]

        copia.sort((a, b) => b[1] - a[1]);

        return copia.slice(0, k)

    }

    console.table(topProductosPorValor(ventas, 3))




module.exports = {
    valorVenta,
    totalVendido,
    unidadesVendidas,
    ventaMayor,
    ticketPromedio,
    ventasPorCiudad,
    totalVendidoM,
    unidadesVendidasM,
    ventasPorCiudadM
};