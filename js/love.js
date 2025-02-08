document.querySelectorAll('.love').forEach(button => {
    button.addEventListener('click', function() {
        const bookId = this.getAttribute('data-book-id');
        this.querySelector('i').classList.toggle('fa-solid');
        this.querySelector('i').classList.toggle('fa-regular');
        
        if (this.querySelector('i').classList.contains('fa-solid')) {
            addToFavorites(bookId);
        } else {
            removeFromFavorites(bookId);
        }
    });
});

function addToFavorites(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(bookId)) {
        favorites.push(bookId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

function removeFromFavorites(bookId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== bookId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
