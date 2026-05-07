---
description: "Introducción a los procesos"
title: "Introducción a los procesos"
position: 1
---

# UT1: Introducción a los Procesos

En esta unidad vamos a profundizar en qué es un proceso, cómo lo gestiona el sistema operativo y cómo podemos interactuar con ellos desde nuestras aplicaciones en Java.

## 1. ¿Qué es un Proceso?

Un **proceso** se define comúnmente como un **programa en ejecución**. Mientras que un programa es una entidad pasiva (un archivo en el disco que contiene instrucciones), un proceso es una entidad activa que consume recursos del sistema.

### Diferencias clave entre Programa y Proceso
*   **Programa**: Un conjunto estático de instrucciones almacenadas en un medio (ej. `mi_programa.exe`).
*   **Proceso**: La ejecución real de esas instrucciones, que incluye:
    *   El código del programa (segmento de texto).
    *   Datos actuales (segmento de datos y variables).
    *   La pila (stack) para llamadas a funciones y variables locales.
    *   El contador de programa (PC), que indica la siguiente instrucción a ejecutar.

## 2. Estados de un Proceso

Un proceso no está siempre "corriendo". A lo largo de su vida, pasa por diferentes estados gestionados por el **planificador (scheduler)** del sistema operativo:

1.  **Nuevo (New)**: El proceso se está creando.
2.  **Preparado/Listo (Ready)**: El proceso está esperando a que se le asigne un procesador.
3.  **Ejecución (Running)**: Se están ejecutando sus instrucciones.
4.  **Bloqueado/Espera (Waiting)**: El proceso está esperando a que ocurra algún evento (como una operación de E/S).
5.  **Terminado (Terminated)**: El proceso ha finalizado su ejecución.

## 3. Bloque de Control de Proceso (PCB)

Para gestionar cada proceso, el sistema operativo mantiene una estructura de datos llamada **PCB (Process Control Block)**. Contiene toda la información necesaria para suspender y reanudar el proceso sin perder su estado:
*   ID del proceso (PID).
*   Estado del proceso.
*   Valor del contador de programa.
*   Registros de la CPU.
*   Información de gestión de memoria.
*   Lista de archivos abiertos.

## 4. Gestión de Procesos en Java

En Java, la forma principal de interactuar con los procesos del sistema operativo es a través de la clase `java.lang.ProcessBuilder`. 

Esta clase nos permite:
*   Lanzar comandos del sistema.
*   Redirigir la entrada y salida de los procesos.
*   Controlar las variables de entorno.
*   Esperar a que un proceso termine y obtener su código de salida.

:::tip
En las siguientes secciones de esta unidad, realizaremos prácticas de código para aprender a lanzar y gestionar procesos externos utilizando `ProcessBuilder`.
:::