function ej1() {
    const nums = [4, 8, 15, 16, 23, 42];
    nums.forEach((n) => {
        console.log(n);
    });
}

function ej2() {
    const nums = [3, 12, 7, 25, 5, 18, 9, 30];
    const mayores10 = nums.filter((num) => num > 10);
    console.log(mayores10);
}

function ej3() {
    const nums = [2, 5, 10, 3, 8, 6];
    const triples = nums.map((n) => n * 3);
    console.log(triples);
}

function ej4() {
    const nums = [14, 7, -3, 22, -8, 5, -1];
    const negativo = nums.find((n) => n < 0);
    console.log(negativo);
}

function ej5() {
    const nums = [12, 45, 67, 8, 91, 33, 55];
    const idx = nums.findIndex((n) => n > 50);
    console.log(idx);
}

function ej6() {
    const frutas = ["manzana", "banana", "naranja", "uva"];
    frutas.push("pera");
    console.log(frutas);
}

function ej7() {
    const colores = ["rojo", "azul", "verde", "amarillo", "blanco"];
    const elim = colores.splice(1, 2);
    console.log(colores);
}

function ej8() {
    const letras = ["a", "e", "i", "o", "u"];
    console.log(letras.length);
}

function ej9() { //combinar filter y map para obtener los numeros pares multiplicados por 2
    const nums = [1, 4, 7, 8, 3, 12, 5, 6, 11, 10];
    const pares = nums.filter((n) => n % 2 === 0);
    const dobles = pares.map((n) => n * 2);
    console.log("Numeros pares del array inicial: " + pares);
    console.log("Numeros pares multiplicados por 2: " + dobles);
}

function ej10() { //filtrar temperaturas mayores a 25 y generar un nuevo array con formato "°C"
    let temperaturas = [18, 25, 31, 12, 28, 35, 20];
    const mayores25 = temperaturas.filter((t) => t > 25);
    const grados = mayores25.map((t) => t + "°C");
    console.log("Temperaturas mayores a 25: " + mayores25);
    console.log("Temperaturas mayores a 25 en formato °C: " + grados)
}

function ej11() {
    let nums = [5, 9, 14, 22, 3, 18, 27];
    let indice = nums.findIndex(num => num % 7 === 0);
    nums.splice(indice, 1);
    console.log("Array base sin el primer multiplo de 7: " + nums);
}

function ej12() {
    let nums = [2, 7, 10, 15, 4, 9, 12];
    let pares = nums.filter(n => n % 2 === 0);
    let cuadrados = pares.map(n => n * n);
    console.log("Numeros pares al cuadrado: " + cuadrados);
}

function ej13() {
    let alimentos = ["pan", "leche", "huevos"];
    alimentos.push("queso", "jamon");
    let indice = alimentos.indexOf("leche");
    alimentos.splice(indice, 1);
    console.log(alimentos);
}

function ej14() {
    const num14 = [5, 10, 15, 20, 25, 10];
    const idx15 = num14.findIndex(num => num === 15);
    console.log(idx15);
}

function ej15() {
    const num14 = [5, 10, 15, 20, 25, 10];
    let posicion = -1;
    num14.forEach((num, indice) => {
        if (num === 10) {
            posicion = indice;
        }
    });
    console.log(posicion);
}

function ej16() {
    const num14 = [5, 10, 15, 20, 25, 10];
    const numero = num14.find(num => num === 30);
    console.log(numero !== undefined);
}

function ej17() {
    const num14 = [5, 10, 15, 20, 25, 10];
    let mayor = false;
    num14.forEach(num=> {
        if (num > 20) {
            mayor = true;
        }
    });
    console.log(mayor);
}