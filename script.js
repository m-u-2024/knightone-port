//「qurstion-img」クラスのアニメーション
const question = (entries) =>{
    const keyframes ={
        opacity:[0,1],
        translate : ['200px',0]
    };
    entries[0].target.animate(keyframes,600);
};

const questionServer = new IntersectionObserver(question);

questionServer.observe(document.querySelector('.question-img'));

//「woman」クラスのアニメーション
const woman = (entries) =>{
    const keyframes ={
        opacity:[0,1],
        translate:['200px',0]
    };
    entries[0].target.animate(keyframes,600);
};

const womanServer = new IntersectionObserver(woman);

womanServer.observe(document.querySelector('.knightone-computer-woman'));

//「service-card」クラスのアニメーション
const items = document.querySelectorAll('.service-card');

for (let i = 0; i < items.length; i++) {
  const keyframes = {
    filter: ['blur(30px)', 'blur(0)'],
    /*translateY:['5rem',0],*/
    translate:['0 5rem',0]
  };
  const options = {
    duration: 2000,
    delay: i * 400,
    fill: 'forwards',
  };
  items[i].animate(keyframes, options);
}