document.addEventListener("DOMContentLoaded", function() {
    // Obtener el elemento canvas del documento HTML por su id
    var canvas = document.getElementById("canvas");

    // Obtener el contexto de representación 2D del canvas
    var ctx = canvas.getContext("2d");

    // Función para dibujar en el canvas
    function draw() {
        // Limpiar el canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Evaluar el código en el área de texto
        var code = document.getElementById("code").value;
        eval(code); // ¡Ten en cuenta que eval es potencialmente peligroso si se usa con código no confiable!
    }

    // Llamar a la función draw() inicialmente
    draw();

    // Agregar un evento para detectar cambios en el área de texto y volver a dibujar
    document.getElementById("code").addEventListener("input", draw);
});
