onload = () => {
        document.body.classList.remove("container");
};

window.addEventListener('load', function() {
        const images = document.querySelectorAll('.floating-image');
    
        images.forEach(image => {
            const randomTop = Math.floor(Math.random() * 50); // Randomize the top position (adjust range as needed)
            const randomLeft = Math.floor(Math.random() * 30); // Randomize the left position (adjust range as needed)
    
            image.style.top = randomTop + 'vh'; // Apply the random top position
            image.style.left = randomLeft + 'vw'; // Apply the random left position
            image.style.position = 'fixed'; // Set position to 'fixed' for the floating effect
        });
    });