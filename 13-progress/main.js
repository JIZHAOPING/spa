$(function(){
  var t = $('progress'),
      n = 0,
      c =0;
  $('#start').click(function(){
    0===n&&(n=window.setInterval(function(){
      t.attr('value',c++)
    },100))
  });
  $('#end').click(function(){
    window.clearInterval(n),n=0
  });
  $('#reset').click(function(){
    t.attr('value',c=0)
  })
});
