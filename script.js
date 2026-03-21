const galleryGrid = document.getElementById('gallery-grid');
const totalImages = 31; // change this if you have more or fewer

for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `images/shaza${i}.jpg`;
    img.alt = `Shaza Drum ${i}`;
    galleryGrid.appendChild(img);
}
