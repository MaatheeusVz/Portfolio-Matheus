// Função para animar a contagem de trabalhos realizados
document.addEventListener("DOMContentLoaded", function () {
    const countElement = document.getElementById("work-count");
    const totalWorks = 35;  // Número de trabalhos já efetuados (modifique conforme necessário)
    let currentCount = 0;

    const interval = setInterval(() => {
        countElement.innerText = currentCount;
        if (currentCount < totalWorks) {
            currentCount++;
        } else {
            clearInterval(interval);
        }
    }, 100);  // Aumenta a contagem a cada 100ms
});
