document.addEventListener('DOMContentLoaded', function () {

    // Animação de entrada das cartas
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1'; // Tornar a carta visível com efeito de fade-in
            card.style.transition = 'opacity 0.5s ease';
        }, index * 300); // Delay para cada carta, criando o efeito de sequência
    });

    // Função de interatividade nas cartas
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const levelElement = card.querySelector('.level');
            const currentLevel = parseInt(levelElement.textContent.split(' ')[1]);

            // Só aumenta o nível até o Nível 10
            if (currentLevel < 10) {
                levelElement.textContent = `Nível ${currentLevel + 1}`;
                levelElement.style.color = '#ffcc00'; // Cor para destacar o nível
                card.style.transform = 'scale(1.1)'; // Aumenta o tamanho da carta levemente
                setTimeout(() => {
                    card.style.transform = 'scale(1)'; // Restaura o tamanho após a animação
                }, 200);
            }
        });
    });

    // Efeito de hover para as cartas
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.8)';
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.7)';
            card.style.transform = 'scale(1)';
        });
    });
});
