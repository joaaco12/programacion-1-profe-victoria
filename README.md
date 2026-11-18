## PROGRAMACION I

## Descripcion
Taller de programacion

## Temas trabajados:
- Selectivas / Condicionales -> if/else, switch
- Repetitivas -> for, do while, while
- Arreglos -> Simples y Compuestos, metodos
- P.O.O. -> Clases, Subclases, Objetos y pilares
- D.O.M.

##
- Selectivas: Permiten que el programa tome decisiones. Si la condicion es verdadera ejecuta una accion; si no, hace otra
```bash
if (this.stock > 0) {
    console.log(`El stock esta disponible y es igual a: ${this.stock}`);
} else {
    console.log('No hay stock disponible');
}
```

##
- Repetitivas: Permiten ejecutar un bloque de codigo varias veces sin tener que escribirlo repetidamente.
```bash
for (let i = 1; i <= 5; i++) {
    console.log("Hola");
}
```

##
- Arreglos: Permiten guardar varios datos dentro de una misma variable.
```bash
let frutas = ["Manzana","Banana","Naranja"];
console.log(frutas);
```

##
- P.O.O.: Sirve para representar elementos de la vida real en la programacion.
```bash
class Persona {
constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}
}
```

##
- D.O.M.: Permite que javascript interactue con html y cambie el contenido de una pagina sin tener que modificar directamente el archivo html.
- html:
```bash
<h1 id ="titulo">Hola mundo</h1>
```

- js:
```bash
let titulo = document.getElementById("titulo");
titulo.textContent = "Bienvenidos";
```

- css:
```bash
.titulo {
color: pink;
}
```