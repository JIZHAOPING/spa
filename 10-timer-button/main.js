$(function(){
  //console.log('hello world!');
  var n = 6;
  var $btnAgree = $('input[type="button"]');
  $btnAgree.attr('disabled','disabled');
  var timer = window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意  ('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('恭喜你获得一亿元的大奖！');
  });
});
