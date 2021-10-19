/*class libro{
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

libro2.retirar(retirar);*/


class libro{
    constructor (titulo, autor, editorial, ejemplares){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.ejemplares = parseInt(ejemplares);
    }
    
    retirar(cantidadRetirar){
        if (this.verificarDisponibilidad(cantidadRetirar)){
            this.ejemplares = this.ejemplares - cantidadRetirar;
            alert ("Se retiraron " + cantidadRetirar + " ejemplares de " + this.titulo + ". Quedan aún " + this.ejemplares + " disponibles.");
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

let libros = parseInt(prompt(`Bienvendio a la biblioteca del grupo Zahir.

Seleccione su producto:
    1. El aleph
    2. Rayuela
    3. El amor en los tiempos del cólera
    4. Sobre héroes y tumbas
    5. La invención de Morel
`));

const retirar = prompt("¿Cuantos ejemplares desea retirar?");

switch(libros){
    case 1:
        const libro1 = new libro("El Aleph", "Jorge Luis Borges", "Zahir", 5);
        alert("Eligió " + libro1.titulo + " (" + libro1.autor + "). Editorial " + libro1.editorial + ". Hay disponibles " + libro1.ejemplares + " ejemplares para retirar.");
        alert = retirar;
        libro1.retirar(retirar)
        break;

    case 2:
        const libro2 = new libro("Rayuela", "Julio Cortazar", "Alfaguara", 3);;
        alert("Eligió " + libro2.titulo + " (" + libro2.autor + "). Editorial " + libro2.editorial + ". Hay disponibles " + libro2.ejemplares + " ejemplares para retirar.");
        alert = retirar;
        libro2.retirar(retirar)
        break;

    case 3:
        const libro3 = new libro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Random House", 4);;
        alert("Eligió " + libro3.titulo + " (" + libro3.autor + "). Editorial " + libro3.editorial + ". Hay disponibles " + libro3.ejemplares + " ejemplares para retirar.");
        alert = retirar;
        libro3.retirar(retirar)
        break;
    
    case 4:
        const libro4 = new libro("Sobre héroes y tumbas", "Ernesto Sabato", "La Nación", 1);;
        alert("Eligió " + libro4.titulo + " (" + libro4.autor + "). Editorial " + libro4.editorial + ". Hay disponibles " + libro4.ejemplares + " ejemplares para retirar.");
        alert = retirar;
        libro4.retirar(retirar)
        break;

    case 5:
        const libro5 = new libro("La invención de Morel", "Adolfo Bioy Casares", "Booket", 0);;
        alert("Eligió " + libro5.titulo + " (" + libro5.autor + "). Editorial " + libro5.editorial + ". Hay disponibles " + libro5.ejemplares + " ejemplares para retirar.");
        alert = retirar;
        libro5.retirar(retirar)
        break;

    default:
    alert("Ingreso algun dato invalido o simplemente no quiere realizar un pedido. Muchas gracias, que tenga un buen día.")
}