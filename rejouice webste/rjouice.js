let page1Container = document.querySelector('.page1-container');
let crusor = document.querySelector('.mouse-move');

// This a normal Animation ⬇️
// page1Container.addEventListener('mousemove',function(dets){
//   crusor.style.left = dets.x+'px'
//   crusor.style.top = dets.y+'px'
//   // example ---'⬇️'
//   // console.log(dets.x, 'dets x')
//   // console.log(dets.y, 'dets y')
// })

// This is a GSAP Animation


function Animation() {
page1Container.addEventListener('mousemove', function(dets){
  gsap.to(crusor,{
    x: dets.x,
    y: dets.y,
  })
})

page1Container.addEventListener('mouseenter', function(dets){
  gsap.to(crusor,{
    scale: 1,
    obacity:1,
  })
})

page1Container.addEventListener('mouseleave', function(dets){
  gsap.to(crusor,{
    scale: 0,
    obacity:0
  })
})
}

Animation();

let toggleMenu = document.querySelector('.menu-toggle');
let toggleMenuClose = document.querySelector('.menu-close')
let page1Menu = document.querySelector('.page1-menu');


function menuSelection(){
toggleMenu.addEventListener('click', function(){
  gsap.to(page1Menu,{
    top:0,
    opacity: 1,
    display: 'block',

  })
})

toggleMenuClose.addEventListener('click', function(){
  gsap.to(page1Menu,{
    top: -100,
    opacity:0,
    display: 'none',

  })
})
}

menuSelection();
