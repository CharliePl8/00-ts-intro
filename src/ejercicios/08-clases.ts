console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

// private -> visibilidad dentro de la clase
// public -> visibilidad fuera de la clase
// static -> acceso al valor de la propiedad sin instanciar la clase

class PersonaNormal {
    constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, "New York, USA");
    }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);
