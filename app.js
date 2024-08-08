// La función `generateCard` se ejecuta cuando el evento `onload` del `body` es disparado
function generateCard() {
    // Definición de los palos y valores posibles de las cartas
    const suits = ['spade', 'club', 'heart', 'diamond']; // Palos posibles: Espada, trébol, corazón y diamante
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Valores posibles de la carta
    const icons = {
        'spade': '♠',    // Icono de espada
        'club': '♣',     // Icono de trébol
        'heart': '♥',    // Icono de corazón
        'diamond': '♦'   // Icono de diamante
    };

    // Generación de un índice aleatorio para el palo de la carta (de 0 a 3)
    const randomSuitIndex = Math.floor(Math.random() * 4); // `Math.random()` genera un número decimal entre 0 y 1. `Math.floor()` lo convierte en un número entero entre 0 y 3
    // Generación de un índice aleatorio para el valor de la carta (de 0 a 12)
    const randomValueIndex = Math.floor(Math.random() * 13); // `Math.random()` genera un número decimal entre 0 y 1. `Math.floor()` lo convierte en un número entero entre 0 y 12

    // Selección aleatoria del palo y valor usando los índices generados
    const randomSuit = suits[randomSuitIndex]; // Obtiene el palo correspondiente al índice aleatorio
    const randomValue = values[randomValueIndex]; // Obtiene el valor correspondiente al índice aleatorio

    // Obtención del elemento del DOM que representa la carta
    const card = document.getElementById('card'); // Selecciona el elemento con id 'card'
    const cardNumber = document.getElementById('card-number'); // Selecciona el elemento con id 'card-number'

    // Asignación de las clases para el estilo de la carta
    card.className = `card ${randomSuit}`; // Asigna la clase correspondiente al palo seleccionado a la carta

    // Establecimiento de los íconos en las esquinas de la carta
    const topLeftIcon = card.querySelector('.top-left'); // Selecciona el elemento con la clase 'top-left' dentro de la carta
    const bottomRightIcon = card.querySelector('.bottom-right'); // Selecciona el elemento con la clase 'bottom-right' dentro de la carta

    topLeftIcon.textContent = icons[randomSuit]; // Establece el ícono correspondiente al palo en la esquina superior izquierda
    bottomRightIcon.textContent = icons[randomSuit]; // Establece el ícono correspondiente al palo en la esquina inferior derecha

    // Establecimiento del número en el centro de la carta
    cardNumber.textContent = randomValue; // Muestra el valor de la carta en el centro
}

// Ejecutar la función generateCard cuando el DOM esté completamente cargado
window.onload = generateCard;
