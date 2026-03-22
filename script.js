const gallery = document.getElementById("gallery-scroll");
const totalImages = 31;

for (let i = 1; i <= totalImages; i++){
    const img = document.createElement("img");
    img.src = `images/shaza${i}.jpeg`;
    img.alt = `Shaza Drum ${i}`;

    img.onerror = function(){
        img.remove();
    };

    gallery.appendChild(img);
}

// Scroll buttons
function scrollGallery(direction){
    gallery.scrollBy({
        left: direction * 400,
        behavior: "smooth"
    });
}
