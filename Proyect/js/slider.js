(function(){
    
    const sliders = [...document.querySelectorAll('.carousel__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentcarousel = document.querySelector('.carousel__body--show').dataset.id;
        value = Number(currentcarousel);
        value+= add;


        sliders[Number(currentcarousel)-1].classList.remove('carousel__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('carousel__body--show');

    }

})();