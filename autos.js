
let lista_autos = JSON.parse(localStorage.getItem("autos")) || [];

function crear_auto() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let patente = document.getElementById("patente").value;
    let tipo_carnet = document.getElementById("tipo_carnet").value;

    if (marca === "" || modelo === "" || patente === "") {
        document.getElementById("resultado").innerHTML = "Completa todos los datos";
    } else {
        let auto = {
            marca: marca,
            modelo: modelo,
            patente: patente,
            tipo_carnet: tipo_carnet
        };

        lista_autos.push(auto);

        localStorage.setItem("autos", JSON.stringify(lista_autos));

        document.getElementById("resultado").innerHTML = "Auto creado";

        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("patente").value = "";
    }
}

function crear_auto() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let patente = document.getElementById("patente").value;
    let tipo_carnet = document.getElementById("tipo_carnet").value;

    if (marca === "" || modelo === "" || patente === "") {
        document.getElementById("resultado").innerHTML = "Completa todos los datos";
    } else {
        let auto = {
            marca: marca,
            modelo: modelo,
            patente: patente,
            tipo_carnet: tipo_carnet
        };

        lista_autos.push(auto);

        localStorage.setItem("autos", JSON.stringify(lista_autos));

        document.getElementById("resultado").innerHTML = "Auto creado";

        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("patente").value = "";
    }
}
