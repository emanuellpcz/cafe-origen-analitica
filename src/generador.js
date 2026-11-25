const productos = [

    {producto:"Origen Huila 500 g", precio:42000},
    {producto:"Origen Nariño 250 g", precio:26000},
    {producto:"Origen Sierra 500 g", precio:45000},
    {producto:"Prensa francesa",precio:95000},
    {producto:"Molino manual", precio:120000}

]

const ciudades = ["Medellín","Bogotá","Cali","Pereira"]

function generarVentas(n){

    const ventas = []

    for(let i=0;i<n;i++){

        let productoAleatorio = Math.floor(Math.random()*productos.length)
        let ciudadAleatoria = Math.floor(Math.random()*ciudades.length)
        const maxCliente = Math.max(1, Math.floor(n/3))
        let clienteAleatorio = Math.floor(Math.random()*maxCliente) +1
        
        
        
        const producto = productos[productoAleatorio].producto
        const precio = productos[productoAleatorio].precio
        const ciudad = ciudades[ciudadAleatoria]
        const cantidad = Math.floor(Math.random() * 5) + 1
        const cliente = "C"+clienteAleatorio.toString().padStart(2,"0")

        const nuevaventa = {

            id : i+1,
            fecha : "2026-11-25",
            cliente : cliente,
            producto : producto,
            ciudad : ciudad,
            cantidad : cantidad,
            precio : precio

        }

        ventas.push(nuevaventa)
        

    }
    return ventas
}

    console.log(generarVentas(6))

    module.exports = {
        generarVentas,
        productos,
        ciudades
    };
