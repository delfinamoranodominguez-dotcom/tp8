const div_resultados_personas = document.getElementById("resultados_personas");
const div_resultados_autos = document.getElementById("resultados_autos");

listas_personas=[];
listas_autos=[];

function filtrar_A1() {
    if (lista_personas.length === 0) {
        div_resultados_personas.innerHTML = "No hay personas"
    } else {
        div_resultados_personas.innerHTML = ""

        for (let i = 0; i < lista_personas.length; i++) {
            let persona = lista_personas[i];
            if (persona["tipo_carnet"] === "A1") {
                div_resultados_personas.innerHTML += "<h2>Nombre: " + persona["nombre"] + "</h2>"
                div_resultados_personas.innerHTML += "<h2>Apellido: " + persona["apellido"] + "</h2>"
                div_resultados_personas.innerHTML += "<p>Tipo de carnet: " + persona["tipo_carnet"] + "</p>"
                div_resultados_personas.innerHTML += "<p>Seguro: " + persona["seguro"] + "</p>"
            }
        }
    }
    if (lista_autos.length === 0) {
    div_resultados_autos.innerHTML = "No hay autos"
    } else {
    div_resultados_autos.innerHTML = ""

    for (let i = 0; i < lista_autos.length; i++) {
        let auto = lista_autos[i];
        if (auto["tipo_carnet"] === "A1") {
            div_resultados_autos.innerHTML += "<h2>Marca: " + auto["marca"] + "</h2>"
            div_resultados_autos.innerHTML += "<h2>Modelo: " + auto["modelo"] + "</h2>"
            div_resultados_autos.innerHTML += "<p>Patente: " + auto["patente"] + "</p>"
            div_resultados_autos.innerHTML += "<p>Tipo de carnet: " + auto["tipo_carnet"] + "</p>"
        }
    }
}
}


let lista_personas = JSON.parse(localStorage.getItem("personas")) || [];

function crear_persona() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let tipo_carnet = document.getElementById("tipo_carnet").value;
    let seguro = document.getElementById("seguro").value;

    if (nombre === "" || edad === "") {
        document.getElementById("resultado").innerHTML = "Completa todos los datos";
    } else {
        let persona = {
            nombre: nombre,
            edad: edad,
            tipo_carnet: tipo_carnet,
            seguro: seguro
        };

        lista_personas.push(persona);

        localStorage.setItem("personas", JSON.stringify(lista_personas));

        document.getElementById("resultado").innerHTML = "Persona creada";

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";
    }
}
