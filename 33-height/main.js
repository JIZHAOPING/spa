/*global hljs:true*/
$(function(){
  //console.log('hello world!');

  var $btnAddCode = $('input[type="button"]');

  $btnAddCode.click(function(){
    var $code = $('<div><pre class="javascript"></pre></div>');
    $code.find('pre').html($('.code').val());
    hljs.highlightBlock($code.find('pre').get(0));
    $('.main').append($code); 
  });
  
});
