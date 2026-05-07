---
title: Operadores y expresiones
sidebar_position: 5
description: B1.6. Operadores aritméticos, relacionales y lógicos en PSeInt. Precedencia de operadores.
---

Una vez que sabemos cómo guardar datos, el siguiente paso es aprender a manipularlos. Los **operadores** son los símbolos que nos permiten realizar cálculos, comparaciones y tomar decisiones lógicas.

## ¿Qué vamos a aprender?

*   Los **operadores aritméticos** para hacer cálculos matemáticos.
*   Los **operadores relacionales** para comparar valores.
*   Los **operadores lógicos** para combinar condiciones.
*   La **precedencia**: qué operaciones se ejecutan primero.

---

## Concepto Teórico

### 1. Operadores Aritméticos
Son los que ya conoces de las matemáticas, con un par de novedades:

| Operador | Acción | Ejemplo |
| :--- | :--- | :--- |
| `+`, `-` | Suma y Resta | `5 + 2 = 7` |
| `*`, `/` | Multiplicación y División | `10 / 2 = 5` |
| `%` o `MOD` | **Módulo** (Resto de la división) | `10 % 3 = 1` |
| `^` | Potencia | `2 ^ 3 = 8` |

### 2. Operadores Relacionales
Sirven para comparar dos valores. El resultado siempre es un valor **Lógico** (`Verdadero` o `Falso`).

*   `>` (Mayor), `<` (Menor)
*   `>=` (Mayor o igual), `<=` (Menor o igual)
*   `=` (Igual)
*   `<>` o `!=` (Diferente)

### 3. Operadores Lógicos
Permiten unir varias comparaciones:
*   **Y (AND)**: Verdadero solo si ambas partes son verdaderas.
*   **O (OR)**: Verdadero si al menos una parte es verdadera.
*   **NO (NOT)**: Invierte el valor (Verdadero -> Falso).

### 4. La Precedencia
Al igual que en matemáticas, hay un orden de prioridad:
1.  Paréntesis `()`
2.  Potencias `^`
3.  Multiplicación, División y Módulo `*`, `/`, `%`
4.  Suma y Resta `+`, `-`
5.  Operadores Relacionales `>`, `<`, `=`...
6.  Operadores Lógicos `NO`, `Y`, `O`

---

## Ejemplo en Código

Vamos a crear un programa que verifique si un alumno ha aprobado el curso. Para aprobar necesita una nota media de 5 **Y** que sus faltas sean menores a 10.

```javascript title="algoritmos/verificar_aprobado.psc"
Algoritmo VerificarAprobado
    Definir nota1, nota2, media Como Real
    Definir faltas Como Entero
    Definir estaAprobado Como Logico
    
    Escribir "Introduce la nota del primer examen:"
    Leer nota1
    Escribir "Introduce la nota del segundo examen:"
    Leer nota2
    Escribir "Introduce el número de faltas de asistencia:"
    Leer faltas
    
    // EXPRESIÓN COMPLEJA
    // Usamos paréntesis para asegurar que la suma se haga antes que la división
    media <- (nota1 + nota2) / 2
    
    // Combinamos dos condiciones con el operador lógico Y
    estaAprobado <- (media >= 5) Y (faltas < 10)
    
    Escribir "Tu nota media es: ", media
    Escribir "¿Estás aprobado?: ", estaAprobado
FinAlgoritmo
```

---

## Errores Comunes

:::warning[División por cero]
Intentar dividir un número por cero (`10 / 0`) hará que tu programa explote (error de ejecución). Asegúrate siempre de que el divisor no sea cero.
:::

:::warning[Olvidar los paréntesis]
No es lo mismo `10 + 5 / 2` (que da 12.5) que `(10 + 5) / 2` (que da 7.5). Si no pones paréntesis, el ordenador seguirá la precedencia matemática y dividirá antes de sumar.
:::

---

## Reto Rápido

¿Cuál es el resultado de estas expresiones?
1.  `10 + 5 * 2`
2.  `(10 + 5) * 2`
3.  `10 > 5 Y 3 < 1`
4.  `10 > 5 O 3 < 1`

---

:::info[Solución]
1. **20** (Multiplica antes), 2. **30** (Paréntesis primero), 3. **Falso** (Verdadero Y Falso = Falso), 4. **Verdadero** (Verdadero O Falso = Verdadero).
:::
