const images = document.querySelectorAll('.image');
const preBtn = document.querySelector('.pre')
const nextbtn = document.querySelector('.next');

preBtn.addEventListener('click', preClk);
nextbtn.addEventListener('click', nextClk);

function preClk(){
  for(let i=0; i<images.length; i++){
    if(images[i].classList.contains('show')){
      images[i].classList.remove('show');
      if(i==0) i=images.length;
      images[i-1].classList.add('show');
      changeCircle(i-1);
      return;
    }
  }
}
function nextClk(){
  for(let i=0; i<images.length; i++){
    if(images[i].classList.contains('show')){
      images[i].classList.remove('show');
      if(i==images.length-1) i=-1;
      images[i+1].classList.add('show');
      changeCircle(i+1);
      return;
    }
  }
}
function changeCircle(i){
  const circles = document.querySelectorAll('.circle');
  const circle = document.querySelector(`.circle[data-index='${i}']`);
  circles.forEach((e)=>{
    e.src='img/circle.png'
  });
  circle.src='img/circle-pink.png'
}
setInterval(nextClk, 3000)