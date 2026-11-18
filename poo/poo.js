
/*
1: abstraccion

un celular puede tener estos atributos:
-marca
-modelo
-bateria
-color
-almacenamiento
-tamaño de pantalla

estos metodos:
-cargar
-usar
-encender
-apagar
-llamar
-enviar mensajes

elijo estos 3 atributos:
marca, modelo y bateria

uso 2 metodos:
cargar() y usar()
*/

// clase celular
class Celular {

    // propiedades privadas
    #pin;
    #intentos = 0;
    #bloqueado = false;

    constructor(marca, modelo, pin) {
        this.marca = marca;
        this.modelo = modelo;
        this.bateria = 100;
        this.#pin = pin;
    }

    // 1: cargar la bateria
    cargar() {
        this.bateria = 100;
        console.log(
            `${this.marca} ${this.modelo}: bateria al 100%`
        );
    }

    // 1: usar el celular
    usar(minutos) {

        // validar los minutos
        if (
            typeof minutos !== "number" ||
            !Number.isFinite(minutos) ||
            minutos <= 0
        ) {
            console.error("error: los minutos deben ser un numero mayor a 0");
            return;
        }

        this.bateria -= minutos;

        // la bateria nunca puede ser menor que 0
        if (this.bateria < 0) {
            this.bateria = 0;
        }

        console.log(
            `${this.modelo}: bateria restante ${this.bateria}%`
        );
    }

    // metodo privado para sumar intentos incorrectos
    #registrarIntentoFallido() {
        this.#intentos++;

        console.error(`pin incorrecto. Intento ${this.#intentos} de 3`);

        if (this.#intentos >= 3) {
            this.#bloqueado = true;
            console.error("celular bloqueado por 3 intentos incorrectos");
        }
    }

    // 2: comprobar el pin
    desbloquear(pin) {

        if (this.#bloqueado) {
            console.error("el celular esta bloqueado");
            return false;
        }

        if (this.#pin === pin) {
            this.#intentos = 0;
            return true;
        } else {
            this.#registrarIntentoFallido();
            return false;
        }
    }

    // 2: cambiar el pin
    cambiarPin(pinActual, pinNuevo) {

        if (this.#bloqueado) {
            console.error("no se puede cambiar el pin: celular bloqueado");
            return;
        }

        if (this.#pin === pinActual) {
            this.#pin = pinNuevo;
            console.log("pin cambiado correctamente");
        } else {
            this.#registrarIntentoFallido();
            console.error("error: el pin actual es incorrecto");
        }
    }

    // 4: encender el celular
    encender() {
        console.log("el celular se enciende");
    }
}


/*
3: herencia

smartphone hereda de celular
con super() llamo al constructor de la clase padre
*/

class Smartphone extends Celular {
    constructor(marca, modelo, pin, sistema) {
        super(marca, modelo, pin);

        this.sistema = sistema;
        this.apps = [];
    }

    // instalar una aplicacion
    instalarApp(nombre) {
        this.apps.push(nombre);
        console.log(`aplicacion ${nombre} instalada`);
    }

    // 3: desinstalar una aplicacion
    desinstalarApp(nombre) {
        const posicion = this.apps.findIndex(
            app => app === nombre
        );

        if (posicion === -1) {
            console.log(`la aplicacion ${nombre} no esta instalada`);
        } else {
            this.apps.splice(posicion, 1);
            console.log(`aplicacion ${nombre} desinstalada`);
        }
    }

    // 3: listar las aplicaciones
    listarApps() {
        if (this.apps.length === 0) {
            console.log("no hay apps instaladas");
        } else {
            console.log("aplicaciones instaladas:");
            this.apps.forEach((app, indice) => {
                console.log(`${indice + 1}. ${app}`);
            });
        }
    }

    // 4: polimorfismo
    encender() {
        console.log(`iniciando ${this.sistema}...`);
    }

    // 4: usar gasta el doble de bateria
    usar(minutos) {

        // validar los minutos antes de multiplicar
        if (
            typeof minutos !== "number" ||
            !Number.isFinite(minutos) ||
            minutos <= 0
        ) {
            console.error("error: los minutos deben ser un numero mayor a 0");
            return;
        }
        super.usar(minutos * 2);
    }
}


/*
4: polimorfismo

CelularBasico tambien hereda de celular,
pero tiene su propia version de encender().
*/

class CelularBasico extends Celular {
    encender() {
        console.log("el celular basico se enciende");
    }
}


/*
pruebas practica 1:
*/

console.log("abstraccion");

const celular1 = new Celular("Motorola", "G85", 1234);
const celular2 = new Celular("Motorola", "G54", 5678);

celular1.usar(30);
celular2.usar(50);

celular1.cargar();
celular2.cargar();

// probar validacion de minutos
celular1.usar(-5);
celular1.usar("10");


/*
pruebas practica 2:
*/

console.log("encapsulamiento");

console.log("pin correcto:", celular1.desbloquear(1234));
console.log("pin incorrecto:", celular1.desbloquear(9999));

celular1.cambiarPin(1234, 4321);

console.log("nuevo pin funciona:", celular1.desbloquear(4321));

// intentar acceder a la propiedad publica inexistente
console.log("celular1.pin:", celular1.pin);

// la siguiente linea produciria un error de sintaxis:
// console.log(celular1.#pin);


// probar los 3 intentos incorrectos
const celularPrueba = new Celular("Samsung", "A15", 5555);

console.log(celularPrueba.desbloquear(1111));
console.log(celularPrueba.desbloquear(2222));
console.log(celularPrueba.desbloquear(3333));

// intentar desbloquear despues del bloqueo
console.log(celularPrueba.desbloquear(5555));


/*
pruebas practica 3:
*/

console.log("herencia");

const smartphone1 = new Smartphone(
    "Apple",
    "iPhone 15",
    1111,
    "iOS"
);

smartphone1.cargar();
smartphone1.usar(20);

console.log(
    "desbloqueado:",
    smartphone1.desbloquear(1111)
);

smartphone1.instalarApp("whatsapp");
smartphone1.instalarApp("instagram");
smartphone1.instalarApp("tiktok");

// listar las aplicaciones
smartphone1.listarApps();

// desinstalar una aplicacion
smartphone1.desinstalarApp("instagram");

// volver a listar las aplicaciones
smartphone1.listarApps();

// intentar desinstalar una aplicacion que no existe
smartphone1.desinstalarApp("facebook");


/*
pruebas practica 4:
*/

console.log("polimorfismo");

const celularComun = new Celular("Nokia", "C20", 2222);

const smartphone2 = new Smartphone(
    "Motorola",
    "G85",
    3333,
    "Android"
);

const celularBasico = new CelularBasico(
    "Alcatel",
    "1066",
    4444
);

// guardo las tres clases en un arreglo
const celulares = [
    celularComun,
    smartphone2,
    celularBasico
];

// recorro el arreglo y llamo al mismo metodo
celulares.forEach(celular => {
    celular.encender();
});


// probar que Smartphone gasta el doble de bateria
console.log("Consumo doble de bateria:");

smartphone2.usar(10);
