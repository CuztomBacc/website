
// Selecciona todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-link');

// Aplica eventos para cambiar el color de los enlaces y el tamaño de fuente al hacer hover
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#16FF00'; // Color verde brillante al hacer hover
        link.style.fontSize = '1.1em'; // Aumenta el tamaño de fuente
    });

    link.addEventListener('mouseout', () => {
        link.style.color = '#00712D'; // Color verde oscuro predeterminado
        link.style.fontSize = '1em'; // Restablece el tamaño de fuente
    });

    // Agrega el desplazamiento suave a cada enlace del menú
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Realiza el desplazamiento suave
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

//Animacion enlazada con CSS3 para comentarios de clientes.
const comentarios = [
    { text: "“La mejor tienda para amantes de la música, ¡excelentes diseños y calidad!”", autor: "- Juan Pérez" },
    { text: "“No había encontrado una camisa de Limp Bizkit hasta hoy! Gracias Cuztom!!”", autor: "- Ana Gómez" },
    { text: "“Mi hijo adolescente es bastante complicado, pero siempre que toca un regalo, Cuztom es la mejor opción.”", autor: "- María Rodríguez" }
];

let currentComentario = 0;
const ComentarioTextos = document.getElementById("comentarios-text");
const ComentarioAutor = document.getElementById("comentarios-autor");

function showNextComentario() {
    //Aplica la animación de salida
    ComentarioTextos.style.animation = "fadeSlideOut 1s forwards";
    ComentarioAutor.style.animation = "fadeSlideOut 1s forwards";

    setTimeout(() => {
        //Cambia al siguiente testimonio después de la animación de salida
        currentComentario = (currentComentario + 1) % comentarios.length;
        ComentarioTextos.textContent = comentarios[currentComentario].text;
        ComentarioAutor.textContent = comentarios[currentComentario].autor;

        //Aplica la animación de entrada
        ComentarioTextos.style.animation = "fadeSlideIn 1s forwards";
        ComentarioAutor.style.animation = "fadeSlideIn 1s forwards";
    }, 1000); //Espera 1 segundo antes de cambiar el contenido
}

//Cambia de testimonio cada 5 segundos
setInterval(showNextComentario, 5000);
