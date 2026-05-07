---
title: Constantes y comentarios
sidebar_position: 4
description: B1.5 y B1.8. Uso de valores inmutables y la importancia de la documentación interna en pseudocódigo.
---

Escribir código que funcione es solo la mitad del trabajo. La otra mitad es escribir código que **tú y tus compañeros podáis entender** meses después. En este tema veremos cómo documentar nuestro código y cómo proteger valores que no deben cambiar.

## ¿Qué vamos a aprender?

*   Qué es una **constante** y cuándo usarla.
*   Cómo usar los **comentarios** de forma inteligente.
*   Buenas prácticas de **legibilidad** y nombrado.

---

## Concepto Teórico

### Las Constantes: "Cajas selladas"
A diferencia de una variable (que puede cambiar su valor), una **constante** es un valor que se define al principio y permanece igual durante toda la ejecución del programa. 

¿Por qué usarlas?
*   **Seguridad**: Evitas errores accidentales (como cambiar el valor del IVA a mitad del programa).
*   **Claridad**: Es mucho más fácil entender `precio * IVA` que `precio * 0.21`.

### Los Comentarios: "Notas para humanos"
Los comentarios son líneas de texto que el ordenador ignora por completo. Su única misión es ayudar a la persona que lee el código.

*   **En PSeInt**: Se escriben usando la doble barra: `// Esto es un comentario`.
*   **Regla de oro**: No comentes **qué** hace el código (eso ya se ve), comenta **por qué** lo hace o para qué sirve esa sección.

---

## Ejemplo en Código

Calcularemos el precio final de un producto aplicando un impuesto fijo.

```javascript title="algoritmos/calculo_iva.psc"
Algoritmo CalculoIVA
    // DEFINICIÓN DE CONSTANTES
    // En PSeInt no hay una palabra "Constante", así que usamos variables 
    // escritas en MAYÚSCULAS por convención.
    IVA <- 0.21 
    
    Definir precioBase, precioFinal Como Real
    
    Escribir "Introduce el precio del producto:"
    Leer precioBase
    
    // Procesamiento: Calculamos el precio con el impuesto
    precioFinal <- precioBase + (precioBase * IVA)
    
    // Salida de resultados
    Escribir "El precio final con un IVA del ", IVA * 100, "% es: ", precioFinal
FinAlgoritmo
```

### Buenas Prácticas de Nombrado
*   **Variables**: Usa `camelCase` (ej: `totalFactura`).
*   **Constantes**: Usa **MAYÚSCULAS** y guiones bajos (ej: `PI`, `TIPO_INTERES`, `IVA`). Esto ayuda a diferenciarlas de un vistazo.

---

## Errores Comunes

:::warning[Comentar lo obvio]
Evita comentarios como este:
`x <- x + 1 // Sumamos uno a x`
Este comentario no aporta nada. Es mejor:
`x <- x + 1 // Incrementamos el contador de intentos fallidos`
:::

:::warning[Cambiar una "constante"]
Aunque PSeInt te permita cambiar el valor de `IVA` a mitad del código, si la has nombrado en mayúsculas, **nunca deberías hacerlo**. Es una regla de respeto hacia tu propio diseño.
:::

---

## Reto Rápido

:::tip[Piensa un poco]
¿Cuáles de los siguientes valores deberían guardarse en una **constante** y cuáles en una **variable**?
1.  El nombre de un usuario que se acaba de registrar.
2.  El valor del número PI (3.14159).
3.  La velocidad máxima permitida en una autovía (120).
4.  La puntuación actual de un jugador en una partida.
:::

---

:::info[Solución]
1. Variable (cada usuario es diferente), 2. Constante (PI nunca cambia), 3. Constante (el límite es fijo), 4. Variable (los puntos suben y bajan).
:::
