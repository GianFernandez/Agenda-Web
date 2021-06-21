function cargarContactos(){
    fetch("http://www.raydelto.org/agenda.php")
    .then(function(resultados){
        return resultados.json();
    }).then(function(resultados){
        var txtNombre = document.getElementById("txtNombre");
        var txtApellido = document.getElementById("txtApellido");
        var txtTelefono = document.getElementById("txtTelefono");

        txtNombre.innerHTML=resultados[1]["nombre"];
        txtApellido.innerHTML=resultados[1]["apellido"];
        txtTelefono.innerHTML=resultados[1]["telefono"];
    });
}