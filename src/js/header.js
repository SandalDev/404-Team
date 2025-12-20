const modal = document.querySelector('[data-order-modal]');
const btnHeader = document.querySelector('.btn-header');
const btnHeaderMobile = document.querySelector('.btn-header-mobile');
const friend = document.querySelector('.mobile-menu-section');

if (btnHeader) {
    btnHeader.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('is-hidden');
        document.body.style.overflow = 'hidden';
    });
}

if (btnHeaderMobile) {
    btnHeaderMobile.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('is-hidden');
        document.body.style.overflow = 'hidden';
        if (friend) {
            friend.classList.add('is-hidden');
        }
    });
}

