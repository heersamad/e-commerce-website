document.addEventListener("DOMContentLoaded", function (){
    const categories = document.querySelectorAll(".category-item");

    categories.forEach(category => {
        category.addEventListener("click", function () {
            categories.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
 

// Countdown Timer
// function Countdown() {
//     let days = 4, hours = 13, minutes = 34, seconds = 56;
    
//     function updateTimer() {
//         seconds--;

//         if (seconds < 0) {
//             seconds = 59;
//             minutes--;
//         }
//         if (minutes < 0) {
//             minutes = 59;
//             hours--;
//         }
//         if (hours < 0) {
//             hours = 23;
//             days--;
//         }
//         if (days < 0) {
//             clearInterval(".countdown");
//             document.querySelector(".countdown").innerText = "Offer Expired!";
//             return;
//         }

//         // Update the timer display
//         document.querySelector(".countdown").innerText = 
//             `${days} |  ${hours} |  ${minutes} |  ${seconds} `;
//     }

//     let countdown = setInterval(updateTimer, 1000);
// }

// Run the countdown function on page load
window.onload = function () {
    startCountdown();

    // Add event listeners to sidebar categories
    let categoryItems = document.querySelectorAll(".sidebar ul li");
    categoryItems.forEach(item => {
        item.addEventListener("click", function() {
            // Remove 'active' class from all items
            categoryItems.forEach(i => i.classList.remove("active"));
            
            // Add 'active' class to the clicked item
            this.classList.add("active");
        });
    });
};

// javascript for form

document.getElementById('quoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('input[required]');
    let emptyFields = false;

    // Check if any required field is empty
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            emptyFields = true;
            input.classList.add('shake');
            setTimeout(() => input.classList.remove('shake'), 300);
        }
    });

    if (!emptyFields) {
        alert("Your inquiry has been sent!");
    }
});

// function toggleSidebar() {
//     document.getElementById("sidebar").classList.toggle("open");
// }

// toggleSidebar();










document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".view-details");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            button.style.transform = "scale(1.1)";
            button.style.transition = "0.3s";
        });

        button.addEventListener("mouseleave", function () {
            button.style.transform = "scale(1)";
        });
    });

    // Smooth scrolling for pagination
    document.querySelectorAll(".pagination button").forEach(button => {
        button.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    });
});

