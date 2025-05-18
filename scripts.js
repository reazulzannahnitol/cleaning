// Add any interactive functionality here if needed
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = -140; // Adjust this value based on your navbar height or layout

        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition - offset, // Apply the offset
                behavior: 'smooth'
            });
        }
    });
});








function openSidebar() {
    document.getElementById("mobile-menu").style.left = "0"; // Open sidebar from the left
    document.getElementById("overlay").style.display = "block"; // Show overlay
}

function closeSidebar() {
    document.getElementById("mobile-menu").style.left = "-100%"; // Close sidebar to the left
    document.getElementById("overlay").style.display = "none"; // Hide overlay
}

// Close sidebar when clicking outside
document.addEventListener("click", function (event) {
    const sidebar = document.getElementById("mobile-menu");
    const toggleButton = document.getElementById("menu-toggle"); // Ensure this is your menu button

    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        closeSidebar();
    }
});

// Toggle submenu visibility on click
document.querySelectorAll('.submenu > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const parent = this.parentElement;

        // Toggle submenu visibility
        parent.classList.toggle('open');

        // Stop propagation so it doesn't trigger the close event
        event.stopPropagation();
    });
});

// Close navbar when clicking an actual menu link (except dropdown toggles)
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", function (event) {
        if (!this.parentElement.classList.contains("submenu")) { 
            closeSidebar(); // Close menu only for actual links, not dropdowns
        }
    });
});













document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
                let counter = entry.target;
                let target = parseInt(counter.getAttribute("data-target"));
                let count = 0;
                let increment = target / 100;
                
                let updateCounter = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerHTML = target === 1 ? `#${Math.ceil(count)}` : Math.ceil(count);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.innerHTML = target === 1 ? `#${target}` : target;
                    }
                };

                updateCounter();
                counter.classList.add("counted"); // Prevent re-triggering the animation
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    counters.forEach(counter => observer.observe(counter));
});









document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,  // Animation duration
        easing: "ease-in-out",  // Easing type
        once: false,  // Ensures animation happens every time element comes into view
        mirror: true  // Re-animates when scrolling up
    });
});










function toggleCard(id) {
    var content = document.getElementById(id);
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
  