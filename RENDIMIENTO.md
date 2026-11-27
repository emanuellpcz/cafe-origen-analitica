# Informe técnico de rendimiento
## Motor de analítica — Café Origen
**Versión:** 0.2

## 1. Introducción

Este documento presenta el análisis del rendimiento del motor de analítica de Café Origen. Se evalúa la complejidad temporal y espacial de sus funciones, considerando cómo aumenta el consumo de recursos cuando crece la cantidad de ventas procesadas.

El análisis utiliza la notación Big O, la revisión del código y las mediciones realizadas con datos generados mediante `generarVentas()`.

El objetivo es identificar las funciones que pueden representar riesgos para el rendimiento de la plataforma y establecer prioridades de optimización.

## 2. Clasificación de las funciones

| Función | Qué hace | Complejidad temporal | Complejidad espacial | Justificación | Operaciones o tiempo con 10.000 ventas |
|---|---|---|---|---|---|
| `valorVenta` | Calcula el valor de una venta multiplicando cantidad por precio. | O(1) | O(1) | Realiza una multiplicación y no recorre estructuras. | Una operación de cálculo por llamada. |
| `totalVendido` | Calcula el valor total de todas las ventas. | O(n) | O(1) | Recorre el arreglo una vez y utiliza un acumulador. | 10.000 visitas. |
| `unidadesVendidas` | Suma las unidades vendidas. | O(n) | O(1) | Recorre las ventas y acumula las cantidades. | 10.000 visitas. |
| `ventaMayor` | Encuentra la venta de mayor valor. | O(n) | O(1) | Recorre todos los elementos y conserva el mayor valor encontrado. | 10.000 visitas y hasta 10.000 comparaciones. |
| `ticketPromedio` | Calcula el promedio de las ventas válidas. | O(n) | O(1) | Recorre las ventas y utiliza acumuladores y contadores. | 10.000 visitas como máximo. |
| `ventasPorCiudad` | Calcula el total de ventas de una ciudad. | O(n) | O(1) | Recorre las ventas y acumula únicamente las que coinciden con la ciudad buscada. | 10.000 visitas como máximo. |
| `totalVendidoM` | Calcula el total vendido utilizando métodos de arreglos. | O(n) | O(n) | Utiliza `map()` para crear un arreglo nuevo y `reduce()` para sumar sus valores. | 10.000 elementos procesados por cada recorrido. |
| `unidadesVendidasM` | Calcula las unidades vendidas utilizando métodos de arreglos. | O(n) | O(1) u O(n) | Depende de si utiliza únicamente `reduce()` o crea arreglos intermedios. | Pendiente de registrar. |
| `ventasPorCiudadM` | Calcula las ventas de una ciudad utilizando métodos de arreglos. | O(n) | O(n) | Utiliza filtrado y transformación de datos mediante métodos que crean arreglos nuevos. | 10.000 elementos como máximo por recorrido. |
| `totalPorCiudad` | Agrupa el valor vendido por ciudad. | O(n) | O(k), peor caso O(n) | Recorre las ventas y almacena los resultados en un objeto cuyas propiedades representan ciudades. |
| `unidadesPorProducto` | Agrupa las unidades vendidas por producto. | O(n) | O(k), peor caso O(n) | Recorre las ventas y almacena acumulados por producto. |
| `topProductosPorValor` | Ordena los productos según su valor total vendido y devuelve los primeros k resultados. | O(n + k log k) | O(k) | Agrupa los productos y posteriormente ordena las entradas del objeto. |
| `ventasDelDia` | Filtra las ventas correspondientes a una fecha. | O(n) | O(n) | Recorre las ventas y devuelve un arreglo con las coincidencias. |
| `clientesRecurrentes` | Identifica clientes que realizaron más de una compra. | O(n²) como mínimo; hasta O(n³) por el costo de `includes()` en el peor caso. | O(n) | Utiliza ciclos anidados para comparar clientes y búsquedas adicionales en el arreglo de recurrentes. |
| `totalCiudadCadena` | Calcula las ventas de una ciudad mediante una cadena de métodos. | O(n) | O(n) | Realiza varios recorridos y crea tres arreglos intermedios. |
| `totalCiudadUnaPasada` | Calcula las ventas de una ciudad utilizando un solo ciclo. | O(n) | O(1) | Recorre las ventas una vez y utiliza únicamente variables acumuladoras. |
| `primeraVenta` | Devuelve el primer elemento del arreglo. | O(1) | O(1) | Accede directamente mediante el índice cero, sin recorrer los datos. |

**Nota:** `n` representa la cantidad de ventas y `k` representa la cantidad de elementos distintos almacenados, como ciudades o productos. Las clasificaciones espaciales dependen de las estructuras creadas por cada implementación. Las mediciones de operaciones deben distinguirse de los tiempos reales de ejecución.

## 3. Evidencia de mediciones

Las funciones instrumentadas permiten observar cuántos elementos visitan y cuántas comparaciones explícitas realizan.

Para una muestra de 10.000 ventas, los resultados esperados de las funciones instrumentadas son:

| Función | Elementos visitados | Comparaciones |
|---|---:|---:|
| `totalVendidoInstrumentado` | 10.000 | 0 |
| `ventaMayorInstrumentado` | 10.000 | 10.000 |
| `totalPorCiudadInstrumentado` | 10.000 | 10.000 |
| `primeraVenta` | 1 acceso | 0 |

Estas cantidades corresponden a los contadores definidos en el código y no representan todas las operaciones internas ejecutadas por JavaScript.

Los tiempos de ejecución se deben registrar mediante `console.time()` y `console.timeEnd()`.

| Función | Tiempo medido con 10.000 ventas |
|---|---|
| `clientesRecurrentes` | 363ms |
| `totalCiudadCadena` | 0,011ms |
| `totalCiudadUnaPasada` | 0,002ms |

## 4. Proyección

La proyección permite estimar el comportamiento del motor cuando procese un millón de ventas.

Para realizarla se utilizan las mediciones reales como referencia y se considera la complejidad temporal de cada función.

Las funciones lineales O(n) aumentan aproximadamente en proporción al tamaño de los datos. Por ejemplo, si se multiplica por 100 la cantidad de ventas, el trabajo esperado también aumenta aproximadamente 100 veces.

Las funciones constantes O(1) mantienen un trabajo similar, independientemente de la cantidad de ventas.

Las funciones cuadráticas O(n²) pueden multiplicar aproximadamente por 10.000 su trabajo cuando los datos pasan de 10.000 a 1.000.000 de ventas.

| Función | Complejidad | Proyección para 1.000.000 de ventas |
|---|---|---|
| `totalVendido` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `unidadesVendidas` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `ventaMayor` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `ticketPromedio` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `ventasPorCiudad` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `totalCiudadCadena` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `totalCiudadUnaPasada` | O(n) | Aproximadamente 100 veces el trabajo de 10.000 ventas. |
| `clientesRecurrentes` | O(n²) como mínimo | Aproximadamente 10.000 veces el trabajo cuadrático de 10.000 ventas. |
| `primeraVenta` | O(1) | Mantiene un acceso constante. |

Los tiempos exactos deben calcularse utilizando los resultados medidos. Estas proyecciones son aproximaciones matemáticas y no garantizan el mismo comportamiento en todos los equipos.

## 5. Riesgos

Las funciones se ordenan considerando el crecimiento del tiempo de ejecución y el consumo de memoria adicional.

### Riesgo alto

**`clientesRecurrentes()`**

Es la función de mayor riesgo porque utiliza ciclos anidados y búsquedas adicionales con `includes()`. Su trabajo puede crecer considerablemente cuando aumenta el historial de ventas.

### Riesgo medio

**`totalCiudadCadena()`**

Aunque tiene complejidad temporal O(n), crea tres arreglos intermedios. Esto aumenta el consumo de memoria cuando se procesan grandes cantidades de ventas.

**`totalVendidoM()` y `ventasPorCiudadM()`**

Las implementaciones que crean arreglos intermedios necesitan memoria adicional proporcional a los datos procesados.

**`topProductosPorValor()`**

Crea estructuras para agrupar y ordenar los productos. Su consumo de memoria aumenta con la cantidad de productos distintos.

**`totalPorCiudad()` y `unidadesPorProducto()`**

Almacenan resultados agrupados. Su memoria adicional depende de la cantidad de ciudades o productos diferentes.

### Riesgo bajo

**Funciones lineales que utilizan acumuladores**, como `totalVendido`, `unidadesVendidas`, `ventaMayor` y `ticketPromedio`.

Recorren todos los datos, pero mantienen una cantidad constante de variables adicionales.

**`totalCiudadUnaPasada()`**

Realiza un único recorrido y no crea arreglos intermedios, por lo que utiliza menos memoria adicional.

### Riesgo mínimo

**`primeraVenta()` y `valorVenta()`**

Realizan operaciones constantes que no aumentan su trabajo cuando crece el arreglo de ventas.

## 6. Plan de optimización

### Función prioritaria: `clientesRecurrentes()`

La implementación actual compara las ventas entre sí utilizando dos ciclos anidados. Además, utiliza `includes()` para comprobar si un cliente ya fue agregado al arreglo de recurrentes.

Esto provoca trabajo repetido:

- Se comparan clientes en múltiples combinaciones.
- Se realizan búsquedas adicionales dentro del arreglo de recurrentes.
- La lista de clientes recurrentes puede crecer y hacer que esas búsquedas sean más costosas.

### Propuesta de mejora

Una alternativa es utilizar un objeto o una estructura `Map` para almacenar cuántas compras ha realizado cada cliente.

De esta manera, en lugar de comparar cada venta con todas las demás, se podría recorrer el historial una vez y actualizar el contador correspondiente a cada cliente.

Después se identificarían los clientes cuyo contador sea mayor que uno.

Esta estrategia evitaría repetir comparaciones y búsquedas innecesarias, reduciendo considerablemente el costo temporal de la función.

La implementación de esta mejora queda pendiente para una siguiente versión.

## 7. Conclusión

El análisis demuestra que el rendimiento del motor depende de cómo están implementadas sus funciones y de la cantidad de datos que necesitan procesar.

Las funciones lineales pueden manejar el crecimiento de los datos de manera más predecible, mientras que las funciones cuadráticas representan un riesgo mayor cuando el historial de ventas aumenta.

También se identificó que el consumo de memoria es importante. Crear arreglos intermedios facilita la lectura del código, pero puede generar un costo adicional en servidores con recursos limitados.

La prioridad de optimización será `clientesRecurrentes()`, debido a sus ciclos anidados y búsquedas repetidas. También se recomienda conservar implementaciones como `totalCiudadUnaPasada()`, que obtienen el mismo resultado con menos estructuras temporales.

El objetivo es mantener un motor de analítica eficiente, escalable y preparado para procesar historiales de ventas cada vez mayores.

Revision de compañero:

Nombre del compañero: Kevin Grajales

Observacion del compañero: En la proyeccion creeria que falta el calculo de Big O en cada funcion, no solo poner 100 veces el trabajo de 10.000 ventas, sino el valor aproximado de el trabajo con 10.000 ventas.

Respuesta: Considero innecesario poner el valor que daria el calculo cuando no se sabe con certeza, veo mas logico poner en cuanto se incrementaria el valor