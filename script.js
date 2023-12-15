document.addEventListener("DOMContentLoaded", function () {
    var cantidadTicketsInput = document.getElementById("cant");
    var totalInput = document.getElementById("total");
    var botonResumen = document.getElementById("btn-resumen");
    var botonBorrar = document.getElementById("btn-borrar");
    var categoriaSelect = document.getElementById("categoria");

    botonResumen.addEventListener('click', function () {
        var cantidadTickets = parseInt(cantidadTicketsInput.value);
        if (cantidadTickets > 0 && !isNaN(cantidadTickets)) {
            var precio = 200;
            var descuento;
            var categoria = categoriaSelect.value;
            switch (categoria) {
                case "1":
                    descuento = 0.2;
                    break;
                case "2":
                    descuento = 0.5;
                    break;
                case "3":
                    descuento = 0.85;
                    break;
                default:
                    alert("Seleccionar categoría.")
                    break;
            }
            
            var total = cantidadTickets * precio * descuento;
            totalInput.value = total
        } else {
            alert("Por favor, ingresa una cantidad correcta.");
        }
    });

    botonBorrar.addEventListener('click', function () {
        cantidadTicketsInput.value = "";
        totalInput.value = "";
        categoriaSelect.value = "";
    });
});