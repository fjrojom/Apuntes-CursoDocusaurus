---
title: Conversiones de tipos
sidebar_position: 6
description: B1.7. Transformación de datos entre diferentes tipos en PSeInt. Conversión implícita y explícita.
---

En programación, a menudo recibimos datos en un formato (por ejemplo, texto) pero necesitamos usarlos en otro (por ejemplo, para sumar). A este proceso de cambio lo llamamos **conversión de tipos** o *casting*.

## ¿Qué vamos a aprender?

*   La diferencia entre conversión **implícita** y **explícita**.
*   Cómo usar funciones para forzar el cambio de tipo.
*   El riesgo de la **pérdida de precisión**.

---

## Concepto Teórico

### 1. Conversión Implícita (Automática)
Ocurre cuando el lenguaje hace el cambio por ti porque es seguro. 
*   **Ejemplo**: Si sumas un `Entero` (5) y un `Real` (2.5), PSeInt convertirá el 5 en real automáticamente para poder sumarlos. El resultado será `7.5` (Real).

### 2. Conversión Explícita (Manual)
Ocurre cuando tú, como programador, obligas al cambio. En PSeInt usamos funciones especiales:
*   `ConvertirANumero(texto)`: Pasa de cadena a número.
*   `ConvertirATexto(numero)`: Pasa de número a cadena.

### 3. Pérdida de Precisión
Cuando pasas de un tipo "más grande" o complejo a uno "más pequeño", puedes perder información.
*   **Ejemplo**: Si intentas guardar `3.99` (Real) en una variable de tipo `Entero`, el ordenador eliminará los decimales y se quedará con `3`. ¡Has perdido casi un número entero por el camino!

---

## Ejemplo en Código

A veces, al leer datos, queremos asegurarnos de que el texto se trate como un número para realizar operaciones.

```javascript title="algoritmos/ejemplo_conversion.psc"
Algoritmo EjemploConversion
    Definir textoEdad Como Caracter
    Definir numeroEdad Como Entero
    
    Escribir "Introduce tu edad (como texto):"
    Leer textoEdad
    
    // CONVERSIÓN EXPLÍCITA
    // Transformamos el texto en un número para poder sumar
    numeroEdad <- ConvertirANumero(textoEdad)
    
    // Ahora ya podemos operar con ella
    Escribir "El año que viene tendrás: ", numeroEdad + 1, " años."
    
    // Ejemplo de pérdida de precisión
    Definir piReal Como Real
    Definir piEntero Como Entero
    
    piReal <- 3.14159
    piEntero <- piReal // PSeInt truncará los decimales
    
    Escribir "PI original: ", piReal
    Escribir "PI convertido a entero: ", piEntero
FinAlgoritmo
```

---

## Errores Comunes

:::warning[Texto no numérico]
Si intentas usar `ConvertirANumero("Hola")`, el programa fallará con un error porque la palabra "Hola" no tiene una representación numérica. Asegúrate siempre de que el texto contenga solo números.
:::

:::warning[Truncado vs Redondeo]
Recuerda que al convertir de Real a Entero, el ordenador **trunca** (corta los decimales), no redondea. `4.9` se convertirá en `4`, no en `5`.
:::

---

## Reto Rápido

:::tip[¿Qué pasará?]
Si tenemos la variable `precio <- 19.95` y hacemos `Escribir ConvertirATexto(precio) + " euros"`, ¿cuál será el resultado?
1.  Un error de tipos.
2.  El texto "19.95 euros".
3.  El número 19.95.
:::

---

:::info[Solución]
La opción **2**. Al convertir el número a texto, podemos "pegarlo" (concatenarlo) con otra cadena de texto sin problemas.
:::
