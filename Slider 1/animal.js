let nextDon = document.getElementById('next');
let prevDon = document.getElementById('prev');
let carouselDon = document.querySelector('.carousel');
let listItemDon = document.querySelector('.carousel .list');
let thumbnailDon = document.querySelector('.carousel .thumbnail');

nextDon.onclick = function() {
    showSlider('next');
}
prevDon.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;

let runAutoRun = setTimeout(() => {
    nextDon.click();
}, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDon.appendChild(itemSlider[0]);
        thumbnailDon.append(itemThumbnail[0]);
        carouselDon.classList.add('next');
    } else {
        let positionLastItem = itemSlider.length - 1;
        listItemDon.prepend(itemSlider[positionLastItem]);
        thumbnailDon.prepend(itemThumbnail[positionLastItem]);
        carouselDon.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDon.classList.remove('next');
        carouselDon.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        nextDon.click();
    }, timeAutoNext);
}