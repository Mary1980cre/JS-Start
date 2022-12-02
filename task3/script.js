let color = ['#000000', '#008000', '#ffff00', '#ff0000'];
let i = 0;
let trafficLight = document.querySelector('#trafficLight');
let fontcolor = document.querySelector('#fontcolor');

trafficLight.addEventListener('click' , function(){
    i = i < color.length ? ++i:0;
    trafficLight.style.background = color [i];
    fontcolor.style.color= color [i];

})


let block = document.getElementsByClassName('block')[0], lights = document.getElementsByClassName('light');
    block.addEventListener('click',(e)=> {
        for(i=0; i<lights.length; i++){ lights[i].style.background = '#B8B8B8'; }
        e.target.id === 'red' ? e.target.style.background = 'red' : '';
        e.target.id === 'yellow' ? e.target.style.background = 'yellow' : '';
        e.target.id === 'green' ? e.target.style.background = 'green' : '';
    },false);



/*в таком варианте не работает, не могу разораться в чем причина, помогите плиз

const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}


function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeBlack() {
    trafficLightEl.style.background = ('black');
    trafficLightEl.removeEventListener('click', makeBlack);
    trafficLightEl.addEventListener('click', makeGreen);
}
*/


/* этот вариант тоже не работает 
trafficLightEl.addEventListener('click', function() {

    if (trafficLightEl.style.background === 'black') {
    trafficLightEl.addEventListener('click', makeBlack);
    }

    else if(trafficLightEl.style.background === 'green'){
        trafficLightEl.addEventListener('click', makeGreen);
    }

    else if(trafficLightEl.style.background === 'yellow'){
        trafficLightEl.addEventListener('click', makeYellow);
    }

    else if(trafficLightEl.style.background === 'red'){
        trafficLightEl.addEventListener('click', makeRed);
    }

})
*/








