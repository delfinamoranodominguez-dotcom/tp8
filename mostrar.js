
let lista_personas = JSON.parse(localStorage.getItem("personas")) || [];
let lista_autos = JSON.parse(localStorage.getItem("autos")) || [];

let div_resultados_personas = document.getElementById("div_resultados_personas");
let div_resultados_autos = document.getElementById("div_resultados_autos");

function mostrar_datos() {
    mostrar_personas(lista_personas);
    mostrar_autos(lista_autos);
}


function mostrar_personas(lista) {
    div_resultados_personas.innerHTML = "";

    if (lista.length === 0) {
        div_resultados_personas.innerHTML = "No hay personas";
    }

    for (let i = 0; i < lista.length; i++) {
        let persona = lista[i];

        div_resultados_personas.innerHTML +=
            "<h3>Nombre: " + persona.nombre + "</h3>" +
            "<p>Edad: " + persona.edad + "</p>" +
            "<p>Tipo de carnet: " + persona.tipo_carnet + "</p>" +
            "<p>Seguro: " + persona.seguro + "</p>" +
            "<button onclick='borrar_persona(\"" + persona.nombre + "\", \"" + persona.edad + "\")'>Borrar</button><hr>";
    }
}


function mostrar_autos(lista) {
    div_resultados_autos.innerHTML = "";

    if (lista.length === 0) {
        div_resultados_autos.innerHTML = "No hay autos";
    }

    for (let i = 0; i < lista.length; i++) {
        let auto = lista[i];

        div_resultados_autos.innerHTML +=
            "<h3>Marca: " + auto.marca + "</h3>" +
            "<p>Modelo: " + auto.modelo + "</p>" +
            "<p>Patente: " + auto.patente + "</p>" +
            "<p>Tipo de carnet: " + auto.tipo_carnet + "</p><hr>";
    }
}

function filtrar_A1() {
    let personas = lista_personas.filter(persona => persona.tipo_carnet === "A1");
    let autos = lista_autos.filter(auto => auto.tipo_carnet === "A1");

    mostrar_personas(personas);
    mostrar_autos(autos);
}

function filtrar_A2() {
    let personas = lista_personas.filter(persona => persona.tipo_carnet === "A2");
    let autos = lista_autos.filter(auto => auto.tipo_carnet === "A2");

    mostrar_personas(personas);
    mostrar_autos(autos);
}

function filtrar_A3() {
    let personas = lista_personas.filter(persona => persona.tipo_carnet === "A3");
    let autos = lista_autos.filter(auto => auto.tipo_carnet === "A3");

    mostrar_personas(personas);
    mostrar_autos(autos);
}

function filtrar_seguro_si() {
    let personas = lista_personas.filter(persona => persona.seguro === "si");

    mostrar_personas(personas);
    mostrar_autos(lista_autos);
}

function filtrar_seguro_no() {
    let personas = lista_personas.filter(persona => persona.seguro === "no");

    mostrar_personas(personas);
    mostrar_autos(lista_autos);
}

mostrar_datos();

function borrar_persona(nombre, edad) {
    for (let i = 0; i < lista_personas.length; i++) {
        if (lista_personas[i].nombre === nombre && lista_personas[i].edad == edad) {
            lista_personas.splice(i, 1);
            break;
        }
    }

    localStorage.setItem("personas", JSON.stringify(lista_personas));
    mostrar_datos();
}
