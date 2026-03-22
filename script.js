const galleryGrid = document.getElementById('gallery-grid');
const totalImages = 31;

for (let i = 1; i <= totalImages; i++) {

    const card = document.createElement('div');
    card.className = "gallery-card";

    const img = document.createElement('img');
    img.src = `images/shaza${i}.jpeg`;
    img.alt = `Shaza Drum ${i}`;
    img.loading = "lazy";

    img.onerror = function () {
        card.remove();
    };

    card.appendChild(img);
    galleryGrid.appendChild(card);
}
