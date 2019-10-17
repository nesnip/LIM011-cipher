# Cifrado César

## Índice

* [1. Presentación](#1-presentación)
* [2. Objetivos de aprendizaje Cipher](#2-objetivos-de-aprendizaje-cipher)
* [3. Prototipado](#3-prototipado)
* [4. Resumen del feedback recibido](#4-resumen-del-feedback-recibido)
* [5. Investigación UX](#5-investigación-ux)

***

## 1. Introducción

Munay es una aplicación que te permite cifrar y/o descifrar mensajes de acuerdo al nivel de seguridad elegido.

## 2. Objetivos de aprendizaje Cipher

### UX

- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener feedback e iterar.
- [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
​
### HTML y CSS

- [X] Uso correcto de HTML semántico.
- [X] Uso de selectores de CSS.
- [X] Construir tu aplicación respetando el diseño realizado (maquetación).
​
### DOM

- [X] Uso de selectores del DOM.
- [X] Manejo de eventos del DOM.
- [ ] Manipulación dinámica del DOM.
​
### Javascript

- [ ] Manipulación de strings.
- [X] Uso de condicionales (if-else | switch).
- [ ] Uso de bucles (for | do-while).
- [X] Uso de funciones (parámetros | argumentos | valor de retorno).
- [X] Declaración correcta de variables (const & let).
​
### Testing
- [X] Testeo de tus funciones.
​
### Git y GitHub
- [X] Comandos de git (add | commit | pull | status | push).
- [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages).
​
### Buenas prácticas de desarrollo
- [X] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- [X] Uso de linter para seguir buenas prácticas (ESLINT).

## 3. Prototipado

### Prototipado Inicial

### Prototipado Final

## 4. Resumen del feedback recibido

Que haga una pequeña introducción de la aplicación explicando su funcionamiento, que además agregara un botón de regresar y además que al presionar el botón 'Inicio' los valores ingresados se restablezcan.

## 5. Investigación UX

*



**`README.md`**:

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en balsamiq
utilizando HTML5 y CSS3. En este momento elegirás los colores, tipo de fuente,
etc a usar.

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS3
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
* No se debe utilizar la _pseudo-variable_ `this`.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

**`src/cipher.js`**:

Acá escribirás las 2 funciones necesarias para el usuario pueda cifrar o descifrar.
Para esto debes implementar el **objeto `cipher`**, el cual ya se encuentra _exportado_ en el
objeto global (`window`). Este objeto (`cipher`) contiene dos métodos:

  - **`cipher.encode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos cifrar.
  - **`cipher.decode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la izquierda en el alfabeto y `string` el mensaje (texto) que queremos descifrar.

**`src/index.js`**:

Acá escribirás todo el código que tenga que ver con la interacción del DOM (seleccionar,
actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar a `cipher.encode(offset, string)` y
`cipher.decode(offset, string)` según sea necesario para actualizar el resultado en la
pantalla(UI).

**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
`cipher.encode(offset, string)` y `cipher.decode(offset, string)` implementadas en `cipher.js`
utilizando Jest.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_ (sentencias),
_functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% de _branches_ (ramas).

## 6. Hacker edition

Las secciones llamadas Hacker Edition son opcionales. Si terminaste con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.



## Objetivos de aprendizaje Cipher
​
A continuación te presentamos los objetivos de aprendizaje de este proyecto. Reflexiona y luego marca los objetivos que has llegado a **entender** y **aplicar** en tu proyecto.
​
### UX
​
- [X] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener feedback e iterar.
- [] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).
​
### HTML y CSS
​
- [X] Uso correcto de HTML semántico.
- [X] Uso de selectores de CSS.
- [X] Construir tu aplicación respetando el diseño realizado (maquetación).
​
### DOM
​
- [X] Uso de selectores del DOM.
- [X] Manejo de eventos del DOM.
- [] Manipulación dinámica del DOM.
​
### Javascript
​
- [] Manipulación de strings.
- [X] Uso de condicionales (if-else | switch).
- [] Uso de bucles (for | do-while).
- [] Uso de funciones (parámetros | argumentos | valor de retorno).
- [X] Declaración correcta de variables (const & let).
​
### Testing
- [X] Testeo de tus funciones.
​
### Git y GitHub
- [X] Comandos de git (add | commit | pull | status | push).
- [] Manejo de repositorios de GitHub (clone | fork | gh-pages).
​
### Buenas prácticas de desarrollo
- [] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- [X] Uso de linter para seguir buenas prácticas (ESLINT).
