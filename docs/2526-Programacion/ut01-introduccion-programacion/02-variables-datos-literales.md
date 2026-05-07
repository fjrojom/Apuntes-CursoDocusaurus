---
title: Variables, tipos y literales
sidebar_position: 3
description: B1.2, B1.3 y B1.4. Gestión de la memoria, tipos de datos y valores literales en PSeInt.
---

Para que un programa sea útil, debe ser capaz de recordar información. En este tema aprenderemos a gestionar la memoria del ordenador mediante el uso de **variables**.

## ¿Qué vamos a aprender?

*   Qué es una **variable** y cómo declararla.
*   Los **tipos de datos** básicos (números, texto y lógica).
*   La diferencia entre una variable y un **literal**.
*   Reglas para poner nombres (**identificadores**) a nuestras variables.

---

## Concepto Teórico

### Las Variables: "Cajas con nombre"
Imagina que la memoria de tu ordenador es un almacén gigante lleno de estanterías vacías. Una **variable** es como una caja que pones en una de esas estanterías. Para que la caja sea útil, necesitas dos cosas:
1.  **Un nombre (Identificador)**: Para saber qué caja buscar más tarde (ej: `edad`, `precioProducto`).
2.  **Un tipo**: Para saber qué puedes meter dentro. No usarías una caja de zapatos para guardar sopa, ¿verdad?

### Tipos de Datos en PSeInt
En PSeInt (y en la mayoría de lenguajes), debemos definir qué tipo de información guardaremos:

| Tipo | Descripción | Ejemplo de valores |
| :--- | :--- | :--- |
| **Entero** | Números sin decimales. | `10`, `-5`, `0` |
| **Real** | Números con decimales. | `3.14`, `19.99`, `-0.5` |
| **Caracter** | Texto, letras o símbolos (va entre comillas). | `"Hola"`, `"A"`, `"123"` |
| **Logico** | Valores de verdadero o falso. | `Verdadero`, `Falso` |

### Literales
Un **literal** es un valor que escribes directamente en el código. Por ejemplo, en la instrucción `edad <- 20`, `edad` es la variable y `20` es el literal.

---

## Ejemplo en Código

Vamos a crear un programa que gestione la ficha de un videojuego para practicar todos los tipos.

```javascript title="algoritmos/ficha_videojuego.psc"
Algoritmo FichaVideojuego
    // 1. Declaración de variables (Definimos el tipo)
    Definir titulo Como Caracter
    Definir nivel Como Entero
    Definir precio Como Real
    Definir esMultijugador Como Logico
    
    // 2. Asignación de valores (Usamos literales)
    titulo <- "The Legend of Java"
    nivel <- 1
    precio <- 59.95
    esMultijugador <- Falso
    
    // 3. Mostrar la información
    Escribir "Videojuego: ", titulo
    Escribir "Nivel actual: ", nivel
    Escribir "Precio: ", precio, " euros"
    Escribir "¿Tiene multijugador?: ", esMultijugador
FinAlgoritmo
```

---

## Reglas de Identificadores (Nombres)
Para que el ordenador te entienda, los nombres de tus variables deben seguir estas reglas:
*   Deben empezar por una **letra** (nunca por un número).
*   No pueden contener **espacios** (usa `nombreUsuario` o `nombre_usuario`).
*   No pueden ser palabras reservadas del lenguaje (como `Algoritmo` o `Escribir`).

:::tip[Consejo Pro: camelCase]
En este curso usaremos preferiblemente **camelCase**: empezar en minúscula y cada nueva palabra en mayúscula (ej: `puntosVidaJugador`). Es el estándar que usaremos luego en Java.
:::

---

## Errores Comunes

:::warning[¡Tipos incompatibles!]
Si defines una variable como `Entero` e intentas guardarle un texto (`nombre <- "Juan"`), PSeInt te dará un error de **"Tipos no coinciden"**. Recuerda: la caja debe coincidir con el contenido.
:::

---

## Reto Rápido

¿De qué tipo de dato deberían ser las siguientes variables?
1.  El número de alumnos en clase.
2.  La nota media de un examen.
3.  Si un alumno ha entregado o no la tarea.
4.  La dirección de correo electrónico.

:::info[Solución]
1. Entero, 2. Real, 3. Logico, 4. Caracter.
:::
