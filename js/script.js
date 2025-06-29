let visits = localStorage.getItem('visits') ? parseInt(localStorage.getItem('visits')) : 0;


visits++;
localStorage.setItem('visits', visits);


document.getElementById('visits').textContent = visits;


function resetCounter() {
    visits = 0;
    localStorage.setItem('visits', visits);
    document.getElementById('visits').textContent = visits;
}