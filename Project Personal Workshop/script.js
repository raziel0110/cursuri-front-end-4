const imgs = [1,2,3];


window.onload = ()=>{
    const slider = document.getElementById('slider');
    const img_slider = document.createElement('img');
    const slider_next = document.getElementById('next');
    const slider_prev = document.getElementById('prev');
    let current_slide = 1;

    img_slider.src = "img/slide/" + imgs[0] +".jpg";
    img_slider.classList.add('img-fluid');

    slider.appendChild(img_slider);

    slider_next.addEventListener('click',()=>{
        current_slide++;
        if(current_slide > imgs.length){
            current_slide = imgs[0];
        }
        img_slider.src = "img/slide/" + current_slide +".jpg";
    });

    slider_prev.addEventListener('click',()=>{
        current_slide--;
        if(current_slide < 1){
            current_slide = imgs.length;
        }
        img_slider.src = "img/slide/" + current_slide +".jpg";
    });
}