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


## Plan de indicadores en pseudocódigo

### 1. Ventas totales

**Objetivo:** Calcular el dinero total generado por las ventas.

**Plan:**

```text
INICIAR totalVentas en 0

PARA cada venta del arreglo ventas:
    calcular valorVenta = cantidad * precio
    sumar valorVenta a totalVentas

MOSTRAR totalVentas
```

**Patrones utilizados:** Acumulador.

**Valor inicial:** 0.

### 2. Unidades vendidas

**Objetivo:** Calcular la cantidad total de productos vendidos.

**Plan:**

```text
INICIAR totalUnidades en 0

PARA cada venta del arreglo ventas:
    sumar cantidad de la venta a totalUnidades

MOSTRAR totalUnidades
```

**Patrones utilizados:** Acumulador.

**Valor inicial:** 0.

### 3. Venta más grande

**Objetivo:** Identificar la venta con el mayor valor económico.

**Plan:**

```text
SI el arreglo ventas tiene registros:

    INICIAR ventaMayor con el valor de la primera venta

    PARA cada venta del arreglo ventas:
        calcular valorVenta = cantidad * precio

        SI valorVenta es mayor que ventaMayor:
            actualizar ventaMayor con valorVenta

    MOSTRAR ventaMayor

SI NO:
    MOSTRAR que no existen ventas para analizar
```

**Patrones utilizados:** Máximo y comparación condicional.

**Valor inicial:** Valor económico de la primera venta, siempre que existan registros.

### 4. Ticket promedio

**Objetivo:** Calcular cuánto dinero se gasta en promedio por cada compra.

**Plan:**

```text
INICIAR totalVentas en 0
INICIAR cantidadCompras en 0

PARA cada venta del arreglo ventas:
    calcular valorVenta = cantidad * precio
    sumar valorVenta a totalVentas
    aumentar cantidadCompras en 1

SI cantidadCompras es mayor que 0:
    calcular ticketPromedio = totalVentas / cantidadCompras
    MOSTRAR ticketPromedio

SI NO:
    MOSTRAR que no existen compras para calcular el promedio
```

**Patrones utilizados:** Acumulador y contador.

**Valores iniciales:** totalVentas = 0 y cantidadCompras = 0.

# Bitácora – Café Origen Analítica

## 1. Diccionario de datos

| Campo | Tipo de dato | Descripción |
|---|---|---|
| id | Number | Identificador único de cada registro de venta. |
| fecha | String | Fecha en la que se realizó la venta. |
| cliente | String | Código que identifica al cliente. |
| producto | String | Nombre del producto vendido. |
| ciudad | String | Ciudad asociada a la venta. |
| cantidad | Number | Número de unidades vendidas. |
| precio | Number | Precio unitario del producto. |

## 2. Casos borde detectados

- **Diferencias en el nombre de las ciudades:** se identificó que Medellín aparece escrita con diferentes combinaciones de mayúsculas y minúsculas. Se decidió normalizar los textos durante las comparaciones, sin modificar los datos originales.
- **Cantidad igual a cero:** se encontró un registro con cantidad `0`. Se conserva el registro, pero no se considera una venta válida para calcular el ticket promedio.
- **Clientes repetidos:** algunos códigos de clientes aparecen en diferentes registros. Esto no significa necesariamente que existan ventas duplicadas, ya que un cliente puede realizar varias compras.

## 3. Pseudocódigo de los indicadores

### Total vendido
1. Inicializar un acumulador en cero.
2. Recorrer todas las ventas.
3. Calcular el valor de cada venta multiplicando cantidad por precio.
4. Sumar cada resultado al acumulador.
5. Devolver el total acumulado.

### Unidades vendidas
1. Inicializar un acumulador en cero.
2. Recorrer todas las ventas.
3. Sumar la cantidad de unidades de cada registro.
4. Devolver el total de unidades.

### Venta mayor
1. Comprobar que el arreglo no esté vacío.
2. Inicializar el registro mayor con la primera venta.
3. Recorrer las ventas y calcular el valor de cada una.
4. Comparar cada valor con el máximo encontrado.
5. Actualizar el registro mayor cuando se encuentre una venta superior.
6. Devolver el objeto completo de la venta mayor.
7. Si el arreglo está vacío, devolver `null`.

### Ticket promedio
1. Inicializar un acumulador para el total vendido.
2. Inicializar un contador de ventas válidas.
3. Recorrer las ventas.
4. Contar únicamente los registros cuya cantidad sea mayor que cero.
5. Dividir el total vendido entre la cantidad de ventas válidas.
6. Si no existen ventas válidas, devolver `null`.

### Ventas por ciudad
1. Recibir el arreglo de ventas y una ciudad como parámetros.
2. Normalizar el nombre de la ciudad eliminando espacios sobrantes y convirtiendo el texto a minúsculas.
3. Inicializar un acumulador en cero.
4. Recorrer todas las ventas.
5. Normalizar la ciudad de cada registro.
6. Comparar ambas ciudades.
7. Si coinciden, sumar el valor de la venta al acumulador.
8. Devolver el total vendido en esa ciudad.

## 4. Decisiones sobre arreglos vacíos

Se establecieron los siguientes comportamientos para evitar resultados incorrectos:

| Función | Resultado con `[]` | Justificación |
|---|---|---|
| `totalVendido` | `0` | No existen valores que sumar. |
| `unidadesVendidas` | `0` | No existen unidades que contar. |
| `ventaMayor` | `null` | No existe un registro que represente la venta mayor. |
| `ticketPromedio` | `null` | No hay ventas válidas para calcular un promedio. |
| `ventasPorCiudad` | `0` | No existen ventas para la ciudad consultada. |

## 5. Pruebas realizadas

Se establecieron tres escenarios de prueba para las funciones que reciben arreglos:

- **Arreglo completo:** permite comprobar el comportamiento con todos los registros originales.
- **Arreglo de un elemento:** permite comprobar que las funciones trabajan correctamente con una sola venta.
- **Arreglo vacío:** permite verificar el manejo de casos borde.

También se realizaron pruebas de comparación de ciudades utilizando diferentes combinaciones de mayúsculas, minúsculas y espacios sobrantes.

### Observaciones de aprendizaje

Durante el desarrollo se identificaron y corrigieron los siguientes errores:

- Inicializar un acumulador dentro de un ciclo provocaba que su valor se reiniciara en cada iteración.
- Colocar `return` dentro de un ciclo provocaba que la función terminara antes de recorrer todos los registros.
- Utilizar `=` en lugar de `===` dentro de una condición provocaba una asignación en lugar de una comparación.
- Intentar utilizar una variable fuera del bloque donde fue declarada generaba errores relacionados con el alcance de las variables (*scope*).
- Pasar un arreglo completo a una función que esperaba un objeto individual producía resultados `NaN`.

Estos errores permitieron comprender mejor el funcionamiento de los ciclos, acumuladores, condiciones, parámetros, retornos y alcance de las variables en JavaScript.

## 6. Verificación manual mediante tablas de traza

Para comprobar el funcionamiento de las funciones, se realizaron dos tablas de traza utilizando los 12 registros originales.

### Traza de totalVendido()

Se realizó el seguimiento del acumulador durante cada iteración del ciclo. En cada paso se multiplicó la cantidad por el precio unitario y se sumó el resultado al acumulador.

**Resultado manual:** 985.000

**Resultado del programa:** 985.000

### Traza de unidadesVendidas()

Se realizó el seguimiento del acumulador de unidades, sumando la cantidad de productos de cada registro.

**Resultado manual:** 21 unidades.

**Resultado del programa:** 21 unidades.

### Conclusión

Los resultados obtenidos manualmente mediante las tablas de traza coinciden con los resultados devueltos por el programa. Esto permite comprobar que ambas funciones realizan correctamente sus operaciones con el conjunto de datos utilizado.