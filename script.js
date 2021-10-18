class libro{
    constructor (titulo, autor, editorial, paginas, ejemplares){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.paginas = parseInt(paginas);
        this.ejemplares = parseInt(ejemplares);
    }

    retirar(cantidadRetirar){
        if (this.verificarDisponibilidad(cantidadRetirar)){
            this.ejemplares = this.ejemplares - cantidadRetirar;
            alert ("Se retiraron " + cantidadRetirar + " ejemplares de " + this.titulo + ".");
            alert ("Quedan aún " + this.ejemplares + " disponibles.");
        }else{
            alert("No hay suficientes ejemplares para retirar. Tenemos a disposición: " + this.ejemplares + " ejemplares.");
        }
    }

    verificarDisponibilidad(cantidadRetirar){
        if(this.ejemplares >= cantidadRetirar){
            return true;
        }
    }
}

const libro1 = new libro("El Aleph", "Jorge Luis Borges", "Zahir", 146, 5);
const libro2 = new libro("Rayuela", "Julio Cortazar", "Alfaguara", 908, 3);
const libro3 = new libro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Zahir", 442, 4);
const libro4 = new libro("Sobre héroes y tumbas", "Ernesto Sabato", "Zahir", 386, 1);
const libro5 = new libro("La invención de Morel", "JAdolfo Bioy Casares", "Zahir", 96, 0);

for (const propiedades in libro2){
    alert(propiedades + ": " + libro2[propiedades]);
}

let retirar = prompt("¿Cuantos ejemplares desea retirar?");

libro2.retirar(retirar);