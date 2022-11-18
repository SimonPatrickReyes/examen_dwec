//Inicialmente se declaran dos jugadores con las siguientes propiedades
let i;
let nombre;
let apellidos;
let nivel = 1;
let puntuacion = 1;

let Jugador1 = {
    nombre: "javier",
    apellidos: "camara",
    nivel: 1,
    puntuacion: 1,
    sumarPuntuacion,
    restarPuntuacion,
    resetearPuntuacion
};

let Jugador2 = {
    nombre: "pepe",
    apellidos: "viyuela",
    nivel: 1,
    puntuacion: 1,
    sumarPuntuacion,
    restarPuntuacion,
    resetearPuntuacion
};
function sumarPuntuacion(n) {
    this.puntuacion = puntuacion + n
    //Si llega a 10 puntos, se le suma un nivel
    if (this.puntuacion=puntuacion+10) {
        this.nivel = nivel + 1
    }
};
function restarPuntuacion(n) {
    this.puntuacion = puntuacion - n
    //Si llega a 0 niveles, se llama a la funcion resetearPuntuacion
    if(this.nivel=0){
        resetearPuntuacion()
    }
};
function resetearPuntuacion() {
    //Restablece los valores
    nivel=1;
    puntuacion=1;
};


Jugador1.sumarPuntuacion(30)

console.log(Jugador1.nombre + " " + Jugador1.apellidos + " " + Jugador1.nivel + "  " + Jugador1.puntuacion);
console.log(Jugador2.nombre + " " + Jugador2.apellidos + " " + Jugador2.nivel + "  " + Jugador2.puntuacion);

