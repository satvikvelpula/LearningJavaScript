let originalImage = "img/picA.jpg"
let hoverImage = "img/picB.jpg"

trigger_text = document.getElementById('trigger-text')
trigger_text.addEventListener('mouseover', change_img)

function change_img() {
    let getting_img = document.getElementById('target-image')
    getting_img.src = hoverImage
}

trigger_text.addEventListener('mouseleave', change_back_to_original)

function change_back_to_original() {
    let getting_img = document.getElementById('target-image')
    getting_img.src = originalImage
}
