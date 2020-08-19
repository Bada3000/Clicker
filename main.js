
$('.button').on('click',function(){
  $('.menu').toggleClass('menu_active');
  $('.menu_btn').toggleClass('btn_active');
});
$('.button_x').on('click',function(){
  $('.wind').fadeOut()
})
$('.btn_info').on('click',function(){
  $('.upgr').toggleClass('upgr_active');
})
var coll=1
var result=0
var oreo=0
var sol=0
var lvl=1

function playAudio(){
     var myAudio = new Audio;
     myAudio.src = "Sound.mp3";
     myAudio.play();
};
function playAudio2(){
     var myAudio2 = new Audio;
     myAudio2.src = "Sound2.mp3";
     myAudio2.play();
};
$('.button_click').on('click',function(){
  if (lvl==2){
    coll=2
  }else if (lvl==3){
    coll=3
  }
  playAudio();
  result=result+coll
  oreo=oreo+1
   
  if (oreo==3){
    sol=sol+1
  }
  if (result==100){
    playAudio2();
    $('.wind').fadeIn(500)
  }
  if (oreo>2){
    oreo=0
  }
  if (oreo==0){
    $('.content img.img').attr('src',('Oreo1.png'))
  }else if (oreo==1){
    $('.content img.img').attr('src','Oreo2.png')
  }else if (oreo==2){
    $('.content img.img').attr('src','Oreo3.png')
  }
  if (sol>=50){
    lvl=2
    playAudio2();
  }
  if (sol>=100){
    playAudio2
    lvl=3
  }
  $('.lvl').html(lvl)
  $('.store_oreo').html(sol)
  $('.monet').html(result)
  $('.result').html('Количество кликов: '+result);
  if (result>10){
    $('p.result').css('color','#353535');
  }
  
});
