// Открытие и закрытие мобильного меню
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Работа модального окна записи
const modal = document.getElementById('booking-modal');
const modalTitle = document.getElementById('modal-title');
const bookingForm = document.getElementById('booking-form');

function openModal(serviceName) {
    if (modal && modalTitle) {
        modalTitle.textContent = serviceName || 'Запись в Superauto';
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    if (modal) {
        modal.classList.add('hidden');
    }
}

// Закрытие окна по клику на темный фон
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Обработка отправки формы
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо! Ваша заявка принята. Мастер Superauto свяжется с вами в ближайшие 5 минут.');
        bookingForm.reset();
        closeModal();
    });
}

// Автоматическая проверка времени работы (09:00 - 20:00)
function checkWorkStatus() {
    const statusEl = document.getElementById('work-status');
    if (!statusEl) return;

    const now = new Date();
    const hour = now.getHours();

    if (hour >= 9 && hour < 20) {
        statusEl.textContent = '🟢 Сейчас открыто (до 20:00)';
        statusEl.className = 'text-xs text-emerald-400 font-medium';
    } else {
        statusEl.textContent = '🔴 Сейчас закрыто (откроемся в 09:00)';
        statusEl.className = 'text-xs text-amber-400 font-medium';
    }
}

checkWorkStatus();