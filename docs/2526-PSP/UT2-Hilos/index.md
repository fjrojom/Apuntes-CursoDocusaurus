---
description: "Introducción a los hilos"
title: "Introducción a los hilos"
position: 1
---

# UT2: Introducción a los Hilos

En esta unidad exploraremos la programación multihilo, una técnica esencial para crear aplicaciones modernas, fluidas y eficientes que aprovechen los procesadores multinúcleo actuales.

## 1. ¿Qué es un Hilo (Thread)?

Un **hilo** (o hilo de ejecución) es la unidad más pequeña de procesamiento que puede ser planificada por un sistema operativo. Un hilo vive dentro de un proceso y permite que una aplicación realice varias tareas de forma "simultánea".

### Proceso vs. Hilo
Es vital entender la diferencia:
*   **Proceso**: Un entorno de ejecución independiente con su propio espacio de memoria. Son "pesados" de crear y comunicar.
*   **Hilo**: Una unidad de ejecución dentro de un proceso. Todos los hilos de un proceso **comparten la misma memoria** (variables globales, heap, archivos abiertos), pero tienen su propia pila (stack) y contador de programa.

## 2. Beneficios de la Programación Multihilo

1.  **Capacidad de respuesta**: Permite que una aplicación siga respondiendo al usuario mientras realiza tareas pesadas en segundo plano (ej. descargar un archivo).
2.  **Compartición de recursos**: Los hilos comparten la memoria del proceso, lo que facilita la comunicación entre ellos.
3.  **Economía**: Crear y cambiar entre hilos es mucho más rápido ("ligero") que hacerlo entre procesos.
4.  **Aprovechamiento de Sistemas Multiprocesador**: Los hilos pueden ejecutarse en paralelo real si el sistema tiene varios núcleos.

## 3. Estados de un Hilo

Al igual que los procesos, los hilos pasan por diferentes estados en Java:
-   **New (Nuevo)**: El hilo ha sido creado pero no se ha iniciado.
-   **Runnable (Ejecutable)**: El hilo está listo para correr o está corriendo.
-   **Blocked (Bloqueado)**: Esperando un monitor para entrar en una sección sincronizada.
-   **Waiting (Esperando)**: Esperando indefinidamente a que otro hilo realice una acción.
-   **Timed Waiting (Espera con tiempo)**: Esperando durante un tiempo determinado.
-   **Terminated (Terminado)**: El hilo ha finalizado su ejecución.

## 4. Implementación en Java

En Java, tenemos dos formas principales de crear hilos:

### A. Heredando de la clase `Thread`
```java
class MiHilo extends Thread {
    public void run() {
        System.out.println("Hilo corriendo");
    }
}
// Uso: new MiHilo().start();
```

### B. Implementando la interfaz `Runnable` (Recomendado)
```java
class MiTarea implements Runnable {
    public void run() {
        System.out.println("Tarea corriendo");
    }
}
// Uso: new Thread(new MiTarea()).start();
```

> [!IMPORTANT]
> Nunca llames directamente al método `run()`. Para iniciar un hilo real en el sistema operativo, debes llamar al método `start()`.

---

En las próximas lecciones, profundizaremos en la **sincronización** y cómo evitar los problemas clásicos de la concurrencia como las condiciones de carrera (race conditions).