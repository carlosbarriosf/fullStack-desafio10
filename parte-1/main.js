class Libro {
    constructor (titulo, autor) {
        this.titulo =  titulo;
        this.autor = autor;
        this.obra = `${this.titulo}, de ${(this.autor).toUpperCase()}.`;
        this.mostrarDatosEnConsola = function() {
            console.log(this.obra);
        }
        this.mostrarDatosEnAlert = function() {
            alert(this.obra);
        }
        this.getTitulo = function() { return this.titulo;}
        this.mostrarDatos = function(funcion) {
            switch (funcion) {
                case "alert":
                    this.mostrarDatosEnAlert();
                    break;
                case "console":
                    this.mostrarDatosEnConsola();
                    break;
                default:
                    this.mostrarDatosEnConsola();
                    break;
            }
        }
    }
}

//Ejercicio 4.

let unLibro = new Libro("Angeles y Demonios", "Dan Brown");
unLibro.mostrarDatosEnConsola();
unLibro.mostrarDatosEnAlert();

//Ejercicio 5.

let nuevoLibro = new Libro("Fuego y Sangre", "George R. R. Martin");
let tituloDelNuevoLibro = nuevoLibro.getTitulo();
alert(tituloDelNuevoLibro);



//Ejercicio 6. Descomentar el llamado a mostrarDatos del cual se quiere probar el 
//funcionamiento, y comentar los otros dos.

nuevoLibro.mostrarDatos();
// nuevoLibro.mostrarDatos("console");
// nuevoLibro.mostrarDatos("alert");
