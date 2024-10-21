// owl carosul 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// owl carosul end
// display size debugger

//<div id="dimensions" class=" "></div> 
function updateDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimensionsDiv = document.getElementById('dimensions');
    dimensionsDiv.textContent = `Width: ${width}px, Height: ${height}px`;
}

// Update on initial load
updateDimensions();

// Update on window resize
window.addEventListener('resize', updateDimensions);


// display size debugger end

//menu
// menu bar 

const navbar = document.getElementById('navbar');
const navLink = document.querySelector('.nav-link');
const toggleButton = document.getElementById('menu-button');

toggleButton.addEventListener('click', function(event) {
    navLink.classList.toggle('hidden');
    // alert (23);
    event.stopPropagation(); // Prevent click from bubbling up
});

document.addEventListener('click', function(event) {
    if (!navbar.contains(event.target)) {
        navLink.classList.add('hidden'); 
    }
});


// menu bar end
// menu end 


