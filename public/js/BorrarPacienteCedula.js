document.getElementById("deleteForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtén el valor del campo de entrada (ID del artículo)
        var cedula = document.getElementById("cedula").value;

        // Envía el ID del artículo al servidor
        fetch("/api/principal/pacientes/" + cedula, {
method: "delete"
})
        .then(function(response) {
            if (response.ok) {
            alert("El paciente se eliminó correctamente");
            // Realiza cualquier otra acción necesaria después de eliminar el artículo
            } else {
            alert("Error al eliminar el artículo");
            // Maneja el error de eliminación del artículo
            }
            })
        .catch(function(error) {
            console.log(error);
            });
});

