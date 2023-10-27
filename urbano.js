document.addEventListener("DOMContentLoaded", function() {
    const imagenModal = document.getElementById("imagenModal");
    const imagenEnGrande = document.getElementById("imagenEnGrande");
    
    // Función para mostrar una imagen en grande
    function mostrarImagenEnGrande(src) {
        imagenEnGrande.src = src;
        imagenModal.style.display = "block";
    }
});


