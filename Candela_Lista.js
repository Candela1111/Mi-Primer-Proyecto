

let url= new URL("https://es.wikipedia.org/wiki/Cien_a%C3%B1os_de_soledad");
const fecha_cadena= new Date (" december  27 1997");
const candela={
    nombre:"Candela",
    edad: 25,
    desarrollador:false,
    fecha: fecha_cadena,
    libro:{
        titulo:"Cien años de Soledad",
        autor: "Gabriel Garcia Márquez",
        fechalibro: "28 de enero de 1998",
        url : url
    }
}

const lista_Candela=[candela.nombre,candela.edad,candela.desarrollador,candela.fecha,candela.libro];
console.log(lista_Candela);