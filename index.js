
// Courasel
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slideImg");
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display ="none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

// Geolocation
var p = document.getElementsByClassName("location")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        print("Geolocation is not supported by this browser");
    }
}

function showPosition(position) {
    let latlon = position.coords.latitude + "," + position.coords.longitude;

    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" 
    +latlon+ "&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

    document.getElementsByClassName("image").innerHTML = "<img src='"+img_url+"'>";
}