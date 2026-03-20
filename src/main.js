import './style.css'

const elements = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); } }); });
elements.forEach(el => observer.observe(el));

const text = "Moderní weby a digitální řešení, která přinášejí výsledky.";
const typedText = document.getElementById('typed-text');
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // скорость печати
    }
}

typeWriter();