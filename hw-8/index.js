function addToFavorites(postContent) {
    const favoritesContainer = document.getElementById('favoritesContainer');
    const noFavoritesMessage = favoritesContainer.querySelector('p.hidden');

    if (noFavoritesMessage) {
        noFavoritesMessage.classList.add('hidden');
    }

    const favoritePost = document.createElement('div');
    favoritePost.className = 'post';
    favoritePost.innerHTML = `
        <p>${postContent}</p>
        <button onclick="removeFromFavorites(this)">Убрать из избранного</button>`
    ;
    favoritesContainer.appendChild(favoritePost);
}

function removeFromFavorites(button) {
    const favoritePost = button.parentElement;
    const favoritesContainer = favoritePost.parentElement;
    favoritesContainer.removeChild(favoritePost);

    if (!favoritesContainer.children.length) {
        const noFavoritesMessage = document.createElement('p');
        noFavoritesMessage.className = 'hidden';
        noFavoritesMessage.textContent = 'No favorites yet.';
        favoritesContainer.appendChild(noFavoritesMessage);
    }
}
