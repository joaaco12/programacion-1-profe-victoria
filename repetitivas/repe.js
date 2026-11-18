function ej1() {
    let suma = 0;
    let contador = 0;
    let num;
    do {
        num = parseInt(prompt("Ingrese numeros (0 corta)"));
        while (isNaN(num)) {
            alert("Error, ingrese un numero valido")
            num = parseFloat(prompt("Ingrese num (0 corta)"));
        }
        if (num !== 0) {
            contador++;
            suma = suma + num;
        }
    } while (num !== 0);
    let promedio = suma / contador;
    console.log("La suma de todos los numeros ingresados es: " + suma);
    console.log("El promedio de todos los numeros ingresados es: " + promedio)
}

function ej2() {
    let num;
    let cantidad = parseInt(prompt("Cuantos numeros quiere ingresar?"));
    if (isNaN(cantidad || cantidad < 0)) {
        alert("Ingreso invalido. Por favor ingrese un numero")
    }
    let mayores0 = 0;
    let menores0 = 0;
    let iguales0 = 0;
    for (let i = 1; i <= cantidad; i++) {
        num = parseInt(prompt("Ingrese un numero"));
        if (isNaN(num)) {
            alert("Ingreso invalido. Por favor ingrese un numero")
            i--
        } else {
            if (num > 0) {
                mayores0++;
            } else {
                if (num < 0) {
                    menores0++;
                } else {
                    iguales0++;
                }
            }
        }
    }
    console.log("Hay " + mayores0 + " numeros mayores a 0");
    console.log("Hay " + menores0 + " numeros menores a 0");
    console.log("Hay " + iguales0 + " numeros iguales a 0");
}

function ej3() {
    let caracteres;
    do {
        caracteres = prompt("Ingrese caracteres (ingrese espacio para terminar)");
        if (caracteres !== " ") {
            caracteres = caracteres.toLowerCase()
            if (caracteres === "a" || caracteres === "e" || caracteres === "i" || caracteres === "o" || caracteres === "u") {
                console.log("VOCAL");
            } else {
                console.log("NO VOCAL");
            }
        }
    } while (caracteres !== " ");
    return "programa terminado.";
}

function ej4() {
    let salario = 1500;
    for (let anio = 1; anio <= 6; anio++) {
        salario = salario * 1.10;
        console.log("Año " + anio + ": $" + salario);
    }
    console.log("Salario al cabo de 6 años: $" + salario);
}

function ej5() {
    let n = parseInt(prompt("cuantas hamburguesas desea comprar?"));
    let total = 0;
    for (let i = 1; i <= n; i++) {
        let tipo = prompt("Ingrese el tipo de hamburguesa (s, d, t)").toLowerCase();
        if (tipo === "s") {
            total = total + 20;
        } else {
            if (tipo === "d") {
                total = total + 25;
            } else {
                if (tipo === "t") {
                    total = total + 28;
                } else {
                    console.log("tipo de hamburguesa no valido");
                    i--;
                }
            }
        }
    }
    let tarjeta = prompt("desea pagar con tarjeta? (si/no)").toLowerCase();
    if (tarjeta === "si") {
        total = total * 1.05;
    }
    console.log("Total a pagar: $" + total.toFixed(2));
}

function ej6() {
    let n = parseInt(prompt("Ingrese la cantidad de focos"));
    let verdes = 0;
    let blancos = 0;
    let rojos = 0;
    for (let i = 1; i <= n; i++) {
        let color = prompt("Ingrese el color del foco " + i + " (verde blanco o rojo):").toLowerCase();
        switch (color) {
            case "verde":
                verdes++;
                break;
            case "blanco":
                blancos++;
                break;
            case "rojo":
                rojos++;
                break;
            default:
                alert("Color no valido");
                i--;
                break;
        }
    }
    console.log("Focos verdes: " + verdes);
    console.log("Focos blancos: " + blancos);
    console.log("Focos rojos: " + rojos);
}

function ej7() {
    let ahorroDiario = 3;
    let ahorroAnual = 0;
    for (let dia = 1; dia <= 365; dia++) {
        console.log("Día " + dia + ": $" + ahorroDiario);
        ahorroAnual = ahorroAnual + ahorroDiario;
        ahorroDiario = ahorroDiario * 3;
    }
    console.log("Ahorro total en un año: $" + ahorroAnual);
}

function ej8() {
    let num = parseInt(prompt("Ingrese un numero del 1 al 10"));
    while (isNaN(num) || num < 1 || num > 10) {
        console.log("Error, valor no valido");
        num = parseInt(prompt("Ingrese un numero del 1 al 10"));
    }
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    return "tabla del " + num + " en pantalla";
}