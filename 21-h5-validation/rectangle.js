$(function() {
  var $width  = $('#width'),
      $height = $('#height'),
      $form   = $('#calculate');
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);      
  }

  $calculate.submit(function(e) {
    e.preventDefault();// 阻止表单提交
    var width  = Number($width.val()),
        height = Number($height.val()),
        p      = roundFractional(width * 2 + height * 2, 2),
        a      = roundFractional(width * height, 2);
    $('#perimeter').val(p);
    $('#area').val(a);          
  });
});
