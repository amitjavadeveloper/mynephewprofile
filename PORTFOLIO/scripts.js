document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.png',
        'image4.jpg',
        'image5.jpeg',
        'image6.jpeg',
        // Add more image filenames as needed
    ];

    // Dynamically create thumbnail elements
    // images.forEach((image, index) => {
        // const thumbnail = document.createElement('div');
        // thumbnail.classList.add('thumbnail');
        // thumbnail.innerHTML = `<img src="${image}" alt="Baby ${index + 1}">`;

        // thumbnail.addEventListener('click', function () {
            // modal.style.display = 'block';
            // modalImage.src = image;
        // });

        // gallery.appendChild(thumbnail);
    // });

    const closeModal = document.getElementsByClassName('close')[0];

    closeModal.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
