class libro{
    constructor (titulo, autor, editorial, ejemplares){
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.ejemplares = parseInt(ejemplares);
    }
    retirar(cantidadRetirar){
        if (this.ejemplares >= cantidadRetirar){
            alert ("Se retiraron " + cantidadRetirar + " ejemplares de " + this.titulo + ". Quedan aún " + this.verificarStock(cantidadRetirar) + " disponibles.");
        }else{
            alert("No hay suficientes ejemplares para retirar. Tenemos a disposición: " + this.ejemplares + " ejemplares.");
        }
    }
    verificarStock(cantidadRetirar){
        return this.ejemplares - cantidadRetirar
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

const cantidadRetirar = prompt("¿Cuantos ejemplares desea retirar?");

switch(libros){
    case 1:
        const libro1 = new libro("El Aleph", "Jorge Luis Borges", "Zahir", 5);
        alert("Eligió " + libro1.titulo + " (" + libro1.autor + "). Editorial " + libro1.editorial + ". Hay disponibles " + libro1.ejemplares + " ejemplares para retirar.");
        libro1.retirar(cantidadRetirar)
        break;

    case 2:
        const libro2 = new libro("Rayuela", "Julio Cortazar", "Alfaguara", 3);;
        alert("Eligió " + libro2.titulo + " (" + libro2.autor + "). Editorial " + libro2.editorial + ". Hay disponibles " + libro2.ejemplares + " ejemplares para retirar.");
        libro2.retirar(cantidadRetirar)
        break;

    case 3:
        const libro3 = new libro("El amor en los tiempos del cólera", "Gabriel García Márquez", "Random House", 4);;
        alert("Eligió " + libro3.titulo + " (" + libro3.autor + "). Editorial " + libro3.editorial + ". Hay disponibles " + libro3.ejemplares + " ejemplares para retirar.");
        libro3.retirar(cantidadRetirar)
        break;
    
    case 4:
        const libro4 = new libro("Sobre héroes y tumbas", "Ernesto Sabato", "La Nación", 1);;
        alert("Eligió " + libro4.titulo + " (" + libro4.autor + "). Editorial " + libro4.editorial + ". Hay disponibles " + libro4.ejemplares + " ejemplares para retirar.");
        libro4.retirar(cantidadRetirar)
        break;

    case 5:
        const libro5 = new libro("La invención de Morel", "Adolfo Bioy Casares", "Booket", 0);;
        alert("Eligió " + libro5.titulo + " (" + libro5.autor + "). Editorial " + libro5.editorial + ". Hay disponibles " + libro5.ejemplares + " ejemplares para retirar.");
        libro5.retirar(cantidadRetirar)
        break;

    default:
    alert("Ingreso algun dato invalido o simplemente no quiere realizar un pedido. Muchas gracias, que tenga un buen día.")
}