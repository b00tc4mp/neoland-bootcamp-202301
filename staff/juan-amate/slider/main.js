// Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const prevBtn = document.querySelectorAll(".prev")
const nextBtn = document.querySelectorAll(".next")

prevBtn.addEventListener("click", prevSlide)
nextBtn.addEventListener("click", nextSlide)

// Utility vars
let index = 0

// Set interval
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
}

function resetInterval() {
    clearInterval(interval)
    
}

function moveCarousel() {
    if (index > imagesCollection.length - 1) {
        index = 0
    } else if (index < 0) {
        index = imagesCollection.length - 1
    }
    images.style.transform = `translateX(-${index * 800}px)`
}

// Nav buttons
function prevSlide() {
    index--
    resetInterval()
    moveCarousel()

}

function nextSlide() {
    index++
    resetInterval()
    moveCarousel()
}