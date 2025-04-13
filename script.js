// Data de início (data do evento)
const startDate = new Date("April 14, 2024 00:00:00");

function updateTimeElapsed() {
    const now = new Date();

    // Cálculo de anos, meses e dias baseado em datas reais
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    // Calcular horas, minutos e segundos restantes
    const pastDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        startDate.getHours(),
        startDate.getMinutes(),
        startDate.getSeconds()
    );
    const diffMs = now - pastDate;

    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

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

// Selecionar os botões (certifique-se que os IDs existem no HTML)
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Eventos de clique nos botões
prevButton.addEventListener('click', () => {
    moveSlide(-1); // Desliza para a esquerda (anterior)
});

nextButton.addEventListener('click', () => {
    moveSlide(1); // Desliza para a direita (próxima)
});

// Função para garantir que a música comece ao carregar a página
window.onload = function() {
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Erro ao tentar tocar a música:", error);
        });
        audio.volume = 0.2; // Ajuste o valor conforme necessário (0.0 a 1.0)
    }
};
