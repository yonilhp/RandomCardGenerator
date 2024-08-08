function generateCard() {
    // Definir palos y valores
    const suits = ['spade', 'club', 'heart', 'diamond'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const icons = {
        'spade': '♠',
        'club': '♣',
        'heart': '♥',
        'diamond': '♦'
    };

    // Generar palo y valor aleatorio
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Obtener el contenedor de la carta
    const card = document.getElementById('card');
    card.className = `card ${randomSuit}`; // Aplicar clase del palo

    // Establecer íconos
    const topLeftIcon = card.querySelector('.top-left');
    const bottomRightIcon = card.querySelector('.bottom-right');

    topLeftIcon.textContent = `${randomValue} ${icons[randomSuit]}`;
    bottomRightIcon.textContent = `${icons[randomSuit]} ${randomValue}`;
}
