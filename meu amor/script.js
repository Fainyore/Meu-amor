// Data de início (data do evento)
const startDate = new Date("April 14, 2024 00:00:00").getTime();

// Função para calcular o tempo desde a data de início
function updateTimeElapsed() {
    const now = new Date().getTime();
    const timeElapsed = now - startDate;

    // Calcular anos, meses, dias, horas, minutos e segundos
    const years = Math.floor(timeElapsed / (1000 * 3600 * 24 * 365));
    const months = Math.floor((timeElapsed % (1000 * 3600 * 24 * 365)) / (1000 * 3600 * 24 * 30));
    const days = Math.floor((timeElapsed % (1000 * 3600 * 24 * 30)) / (1000 * 3600 * 24));
    const hours = Math.floor((timeElapsed % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutes = Math.floor((timeElapsed % (1000 * 3600)) / (1000 * 60));
    const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);

    // Atualizar o HTML com os valores calculados
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Atualizar o tempo a cada 1 segundo
setInterval(updateTimeElapsed, 1000);

// Adiciona os eventos de clique nas setas para navegar
prevButton.addEventListener('click', () => {
    moveSlide(-1); // Desliza para a esquerda (anterior)
});

nextButton.addEventListener('click', () => {
    moveSlide(1); // Desliza para a direita (próxima)
});
        // Função para garantir que a música comece ao carregar a página
        window.onload = function() {
            const audio = document.getElementById('background-music');
            audio.play().catch(function(error) {
                console.log("Erro ao tentar tocar a música:", error);
            });

            // Abaixar o volume da música
            audio.volume = 0.2; // Ajuste o valor conforme necessário (0.0 a 1.0)
        };
        