  var messageBox = document.querySelector('.js-pay');
  var wx = document.querySelector('.js-weixin');
  var btn = document.querySelector('.js-pay-btn');
  var card = document.querySelector('.js-homepage');
  var img = document.getElementById('img');
  var closeBtn = document.querySelectorAll('.js-pay-close');

function playPause(){

  document.getElementById("audio").volume = 0.2;

  if(audio.paused)
    {
      audio.play();
      $(".logo img").css("padding","35px");
      $(".logo img").css("background","#222");
      $(".logo img").addClass("rainbow");
      $(".canvas").addClass("blur");
    }
    else
    {
      audio.pause();
      $(".logo img").css("padding","0");
      $(".logo img").removeClass("rainbow");
      $(".canvas").removeClass("blur");
    }   
}

function switchBtn() {
  if(img.src.match('wechat')){
    img.src = 'files/alipay.jpg';
    $(".switchBtn").text("支付宝");
    $(".switchBtn").css("background","#1da1f2");
  }
  else{
    img.src = 'files/wechat.jpg';
    $(".switchBtn").text("微信支付");
    $(".switchBtn").css("background","#62b900");
  }
}

  wx.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.add('active');
    img.src = 'files/weixin.jpg';
    $(".switchBtn").css("display","none");
    $(".canvas").addClass("blur");
    $(".logo").addClass("blur");
    $(".homepage__cnt").addClass("blur");
  });

  btn.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.add('active');
    img.src = 'files/wechat.jpg';
    $(".switchBtn").css("display","inline");
    $(".canvas").addClass("blur");
    $(".logo").addClass("blur");
    $(".homepage__cnt").addClass("blur");
  });

  closeBtn.forEach(function (element, index) {
    console.log(element);
    element.addEventListener('click',function (e) {
    e.preventDefault();
    card.classList.remove('active');

    if($(".logo img").hasClass('rainbow')){
      $(".logo").removeClass("blur");
      $(".homepage__cnt").removeClass("blur");
    } 
    else{
      $(".canvas").removeClass("blur");
      $(".logo").removeClass("blur");
      $(".homepage__cnt").removeClass("blur");
    }

    });
  });