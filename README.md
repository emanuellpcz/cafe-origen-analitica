# Café Origen Analítica

## Descripción

Café Origen Analítica es un proyecto desarrollado en JavaScript que permite analizar los registros de ventas de una cafetería. Su objetivo es procesar la información y generar un reporte organizado en consola para facilitar la consulta de indicadores comerciales.

El proyecto utiliza funciones propias y métodos de arreglos como `map()`, `filter()` y `reduce()` para calcular indicadores, agrupar información y obtener rankings de productos.

## Funcionalidades principales

- Calcular el total de unidades vendidas.
- Calcular el valor total de las ventas.
- Agrupar las ventas por ciudad.
- Calcular las unidades vendidas por producto.
- Obtener los tres productos con mayor valor de ventas.
- Consultar las ventas correspondientes a una fecha específica.
- Generar resúmenes diarios, incluso cuando no existen ventas.

## Requisitos

- Node.js instalado.
- No requiere dependencias externas.

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir una terminal en la carpeta raíz del proyecto.
3. Ejecutar el siguiente comando:

```bash
node src/reporte.js
```

El reporte se mostrará directamente en la consola.

## ¿Qué preguntas responde el análisis?

El proyecto permite responder preguntas como:

- ¿Cuántas unidades se han vendido?
- ¿Cuál es el valor total de las ventas?
- ¿Qué ciudad genera mayores ingresos?
- ¿Cuántas unidades se han vendido de cada producto?
- ¿Cuáles son los tres productos con mayor valor de ventas?
- ¿Cuántas ventas se registraron en una fecha determinada?
- ¿Cuánto dinero y cuántas unidades se vendieron durante un día específico?
- ¿Qué sucede cuando se consulta una fecha sin ventas?

## Estructura del proyecto

```text
cafe-origen-analitica/
├── src/
│   ├── datos.js
│   ├── analitica.js
│   ├── explorar.js
│   ├── verificar.js
│   └── reporte.js
├── bitacora.md
└── README.md
```

## Versión

**v0.1** — Primera versión del motor de análisis y generación de reportes de Café Origen.