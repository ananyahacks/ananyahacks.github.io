// script.js - Adding a fallback for loading screen

document.addEventListener('DOMContentLoaded', () => {
    console.log('Simplified script loaded. DOM Content Loaded.');

    const particlesJsDiv = document.getElementById('particles-js');
    const mainContentDiv = document.querySelector('.content');

    // Function to hide the loading screen and show the main content
    const hideLoadingScreen = () => {
        if (particlesJsDiv && mainContentDiv) {
            console.log('Attempting to hide loading screen and show content.');
            particlesJsDiv.classList.add('fade-out'); // Trigger CSS fade-out

            // Listen for the end of the CSS transition
            particlesJsDiv.addEventListener('transitionend', () => {
                particlesJsDiv.style.display = 'none'; // Hide completely after transition
                particlesJsDiv.style.visibility = 'hidden';
                mainContentDiv.classList.remove('hidden'); // Show main content
                mainContentDiv.classList.add('visible'); // Add visible class for potential CSS transitions
                console.log('Loading screen hidden, main content visible.');
            }, { once: true });

            // FALLBACK: If transitionend doesn't fire for some reason,
            // force hide and show after a slightly longer delay.
            setTimeout(() => {
                if (particlesJsDiv.style.display !== 'none') { // Only if not already hidden by transitionend
                    particlesJsDiv.style.display = 'none';
                    particlesJsDiv.style.visibility = 'hidden';
                    mainContentDiv.classList.remove('hidden');
                    mainContentDiv.classList.add('visible');
                    console.log('Fallback activated: Loading screen forced hidden.');
                }
            }, 4000); // 4 seconds (slightly longer than the 3.5s initial timeout + 1s transition)

        } else {
            console.error('Error: Loading screen or main content div not found in HTML.');
            // Fallback: If elements are missing, just show content after a delay
            if (mainContentDiv) {
                mainContentDiv.classList.remove('hidden');
                mainContentDiv.classList.add('visible');
            }
            if (particlesJsDiv) {
                particlesJsDiv.style.display = 'none';
            }
        }
    };

    // Set a timeout to hide the loading screen after 3.5 seconds
    setTimeout(hideLoadingScreen, 3500); // 3.5 seconds delay
});
