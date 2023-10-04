let currentPage = 1;

function showPage(step) {
    const pages = document.querySelectorAll('.page');
    pages[currentPage - 1].style.display = 'none';
    currentPage += step;
    pages[currentPage - 1].style.display = 'block';
    updateProgress();
}

function updateProgress() {
    const pages = document.querySelectorAll('.page');
    const progress = Math.round((currentPage / pages.length) * 100);
    document.getElementById('pontuacao').textContent = `${progress}%`;
}

showPage(0); // Inicia na primeira página
