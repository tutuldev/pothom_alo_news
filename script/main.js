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


