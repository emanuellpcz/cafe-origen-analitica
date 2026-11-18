Esta seccion esta puramente hecha con IA (Obviamente entendiendo el contenido que me genero)

Diccionario de datos

ID - number: Es el identificador unico de cada venta

Fecha - string: La fecha en la que se hizo la venta

Cliente - string: Código que identifica al cliente que realizó la compra

Producto - string: Nombre del producto vendido

Ciudad - string: Ciudad asociada a la venta

Cantidad - number: Número de unidades del producto compradas

Precio - number: Precio unitario del producto

Casos borde detectados

1. Inconsistencia en los nombres de las ciudades

Se identificó una diferencia en la escritura del nombre de Medellín. En el registro número 5 aparece como medellín, mientras que en los demás registros aparece como Medellín.

Decisión: Conservar los datos originales durante la exploración y normalizar los nombres de las ciudades durante la etapa de limpieza para evitar que una misma ciudad aparezca como dos valores diferentes.

2. Cantidad de productos igual a cero

En el registro número 8 se encontró una venta con una cantidad de 0 unidades. Este valor resulta sospechoso porque una venta normalmente debería representar la compra de al menos un producto.

Decisión: No modificar el registro automáticamente. Se marcará como un dato sospechoso y se solicitará su verificación antes de utilizarlo en los cálculos definitivos.

3. Identificadores de clientes repetidos

Se identificó que algunos códigos de clientes aparecen en varios registros. Por ejemplo, el cliente C01 aparece en las ventas 1, 4 y 11.

Esto no representa necesariamente un error, ya que un mismo cliente puede realizar varias compras.

Decisión: Conservar los registros y utilizar el código del cliente para relacionar sus diferentes compras. Se verificará que los identificadores correspondan correctamente a cada cliente.