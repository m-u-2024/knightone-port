const question = (entries) =>{
    const keyframes ={
        opacity:[0,1],
        translate : ['200px',0]
    };
    entries[0].target.animate(keyframes,600);
};

const questionServer = new IntersectionObserver(question);

questionServer.observe(document.querySelector('.question-img'));

const woman = (entries) =>{
    const keyframes ={
        opacity:[0,1],
        translate:['200px',0]
    };
    entries[0].target.animate(keyframes,600);
};

const womanServer = new IntersectionObserver(woman);

womanServer.observe(document.querySelector('.knightone-computer-woman'));