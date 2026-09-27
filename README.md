# Forma · Práctica de React Hook Form

Versión en castellano · [English version](#english-version)

## Versión en castellano

Práctica de React Hook Form del módulo FRONTEND [REACT] del máster **Rock The Code** de [The Power Tech School](https://thepower.education/thepowermba/tech). El ejercicio consiste en crear un formulario de registro con nombre de usuario, correo electrónico y contraseña, validando los campos antes de aceptar el envío.

He separado el formulario en `RegisterForm` y las reglas en `src/utils/validation.js`. React Hook Form registra los campos, valida los datos y gestiona los errores. La propuesta visual, **Forma**, combina tonos verdes, fondo cálido y una ilustración geométrica hecha con CSS.

![Formulario en escritorio](docs/screenshots/registro-escritorio.png)

### Qué hace

- Los tres campos son obligatorios. El nombre tampoco admite una entrada formada solo por espacios.
- El correo se comprueba con una expresión regular de formato `nombre@dominio.extensión`.
- La contraseña exige al menos ocho caracteres, una mayúscula, una minúscula, un número y un símbolo, sin espacios. Esta regla concreta es una decisión del proyecto porque el enunciado no define el patrón.
- Los errores aparecen junto al campo al enviar y se actualizan al corregirlo.
- El botón Mostrar/Ocultar permite revisar la contraseña sin enviar el formulario.
- Un envío válido presenta una confirmación con el nombre y borra los valores del formulario. Se puede volver para empezar otro registro.
- Incluye etiquetas accesibles, foco en el primer error, envío con Intro y diseño adaptable a móvil.

**Es una demostración de frontend:** no crea cuentas, no envía datos a un servidor y no los guarda en `localStorage` ni en `sessionStorage`. La contraseña no se imprime ni se muestra en la confirmación. El nombre se conserva únicamente en el estado de React mientras aparece la confirmación.

### Estructura

```text
src/
  App.jsx
  App.css
  main.jsx
  index.css
  components/RegisterForm/
    RegisterForm.jsx
    RegisterForm.css
  utils/validation.js
tests/
  validation.test.js
  browser.cjs
docs/screenshots/
MEMORIA.md
```

### Tecnologías

React 19, React Hook Form 7, Vite 7 y CSS. Oxlint revisa el código; Node.js y Playwright comprueban las reglas y la interacción. Las fuentes DM Sans y Manrope se cargan desde Google Fonts, con alternativas locales si no hay conexión.

### Instalación local

Requiere Node.js 22.12 o superior compatible con Vite 7.

```bash
git clone https://github.com/AraceliFradejas/ejercicioES7--hook-form.git
cd ejercicioES7--hook-form
npm ci
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`; Vite puede elegir otro puerto si está ocupado.

```bash
npm test         # Pruebas de las reglas de validación
npm run lint     # Revisión del código
npm run build    # Compilación de producción en dist
npm run preview  # Vista local de la compilación
```

Para reproducir la prueba de navegador se necesita **Google Chrome instalado**. Arrancar Vite en una terminal y ejecutar la prueba en otra:

```bash
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
# En otra terminal, desde la carpeta del proyecto:
npm run test:browser
```

La prueba genera las capturas de `docs/screenshots/` y utiliza exclusivamente datos ficticios.

### Memoria del proyecto

Los requisitos, las decisiones de implementación, las capturas y las comprobaciones se detallan en la [memoria del proyecto](MEMORIA.md). El documento Word del enunciado se conserva localmente y se excluye del repositorio, siguiendo el criterio de las prácticas anteriores.

### Redes sociales

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Autora

**Araceli Fradejas Muñoz** · Proyecto académico del máster Rock The Code de [The Power Tech School](https://thepower.education/thepowermba/tech).

---

## English version

[Volver a la versión en castellano](#versión-en-castellano)

React Hook Form exercise from the FRONTEND [REACT] module of the **Rock The Code** master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech). The assignment is a registration form with required username, email and password fields, using regular expressions to validate email and password.

I separated the form into `RegisterForm` and its validation rules into `src/utils/validation.js`. React Hook Form registers the fields, validates their values and manages errors. **Forma** uses a warm background, green accents and a geometric illustration made with CSS.

### What it does

- Requires all three fields and rejects usernames made only of whitespace.
- Checks email format with a regular expression.
- Requires a password of at least eight characters, including an uppercase letter, a lowercase letter, a number and a symbol, with no whitespace. This specific rule is a project decision because the assignment does not specify the pattern.
- Displays errors on submission and updates them as the user corrects the fields.
- Toggles password visibility without submitting the form.
- Shows a personalised confirmation after valid submission and clears the form values.
- Supports keyboard submission, accessible labels, focus management and mobile layouts.

This is a frontend demonstration: it does not create accounts, send registration data to a server or persist them in browser storage. The password is never logged or included in the confirmation. Only the username remains in React state while the confirmation is displayed.

### Technologies and structure

React 19, React Hook Form 7, Vite 7, CSS, Oxlint, Node.js tests and Playwright. `src/components/RegisterForm` contains the form and its styles, `src/utils/validation.js` holds the rules and `tests` contains validation and browser checks. DM Sans and Manrope load from Google Fonts, with local fallbacks.

### Local setup

Requires Node.js 22.12 or a later version supported by Vite 7.

```bash
git clone https://github.com/AraceliFradejas/ejercicioES7--hook-form.git
cd ejercicioES7--hook-form
npm ci
npm run dev
```

Open `http://localhost:5173`. Run `npm test` for validation tests, `npm run lint` for code checks, `npm run build` for production output and `npm run preview` to preview it.

Browser checks require Google Chrome. Start Vite with `npm run dev -- --host 127.0.0.1 --port 5173 --strictPort`, then run `npm run test:browser` in a second terminal. This regenerates the screenshots using fictitious data.

### Project report

Requirements, implementation decisions, screenshots and verification results are in the [project report in Spanish](MEMORIA.md). The original assignment document remains local, following previous exercises.

### Social media

[GitHub](https://github.com/AraceliFradejas) · [LinkedIn](https://www.linkedin.com/in/araceli-fradejas-munoz-transformaciondigital/) · [X](https://x.com/AraceliFradejas) · [Medium](https://medium.com/@araceli.fradejas) · [YouTube](https://www.youtube.com/@aracelifradejasmunoz2758)

### Author

**Araceli Fradejas Muñoz** · Academic project for the Rock The Code master's programme at [The Power Tech School](https://thepower.education/thepowermba/tech).
