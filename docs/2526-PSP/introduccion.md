---
sidebar_position: 1
description: 'Introducción a la asignatura de Programación de Servicios y Procesos'
title: 'Introducción'
---

# Programación de Servicios y Procesos

¡Bienvenido al módulo de **Programación de Servicios y Procesos (PSP)**! En esta asignatura exploraremos cómo los programas interactúan con el sistema operativo y entre sí para realizar tareas complejas, eficientes y concurrentes.

A lo largo del curso, utilizaremos **Java** como lenguaje principal, aprovechando su potente ecosistema para la gestión de hilos, procesos y comunicaciones en red.

## ¿Qué aprenderemos?

El objetivo fundamental es entender cómo maximizar el rendimiento de nuestras aplicaciones y cómo permitir que se comuniquen a través de una red. Para ello, nos centraremos en tres pilares fundamentales:

### 1. Procesos
Un **proceso** es básicamente un programa en ejecución. Cuando abres un navegador o un editor de código, el sistema operativo crea un proceso para esa instancia. Cada proceso tiene su propio espacio de memoria aislado. 
En esta parte aprenderemos a:
- Gestionar y lanzar procesos externos desde nuestras aplicaciones Java.
- Entender la jerarquía y el ciclo de vida de un proceso.
- La comunicación entre procesos (IPC).

### 2. Hilos (Threads)
Los **hilos** (o hilos de ejecución) son unidades de procesamiento más pequeñas que viven *dentro* de un proceso. A diferencia de los procesos, los hilos de un mismo programa comparten la misma memoria.
Esto nos permite la **programación concurrente**: realizar múltiples tareas "a la vez" (como descargar un archivo mientras la interfaz sigue respondiendo). Veremos:
- Creación y gestión de hilos en Java (`Thread`, `Runnable`).
- Sincronización para evitar que dos hilos "se peleen" por los mismos datos.
- Programación multihilo avanzada.

### 3. Servicios
Un **servicio** es un programa o componente que se ejecuta en segundo plano para ofrecer funcionalidades a otros programas (clientes). En el contexto de este módulo, nos centraremos en los **servicios de red**.
Aprenderemos a construir aplicaciones distribuidas:
- Uso de **Sockets** para comunicación TCP/UDP.
- Creación de servidores que atienden a múltiples clientes simultáneamente.
- Protocolos de aplicación y seguridad en las comunicaciones.

## ¿Por qué es importante este módulo?

Hoy en día, casi ninguna aplicación funciona de forma aislada o secuencial. Los servidores web manejan miles de peticiones a la vez (hilos), las aplicaciones móviles se comunican con APIs (servicios) y los sistemas complejos aprovechan toda the potencia de los procesadores multinúcleo (procesos y hilos).

Dominar PSP es pasar de escribir scripts sencillos a construir sistemas robustos, escalables y profesionales.