$(function(){
  var $width = $('#width'),
      $height = $('#length'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $widthValidation = $('#width-validation'),
      $heightValidation = $('#height-validation'),

      $area = $('#area');

$width.focusout(function(){
  var w = $width.val();
  if(w===''){
    $widthValidation.html('宽度不能为空哦！');
    $width.select();//将光标回到本输入框
    //return;
  }else{
    $widthValidation.html('');
  }
  if(Number(w)<0){
    $widthValidation.html('宽度不能为负哦！');
    $width.select();//将光标回到本输入框
    //return; 
  }else{
        $widthValidation.html('');
          
  };
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($width.val())) {
    $widthValidation.html( '必须是数值');
    $width.select();
    return false;                         
  }

});
$height.focusout(function(){
  var h = $height.val();
  if(h===''){
    $heightValidation.html('高度不能为空哦！');
    $height.select();
  }else{
    $heightValidation.html('');
  }
  if(Number(h)<0){
    $heightValidation.html('高度不能为负哦！');
    $height.select();             
  }else{
    $heightValidation.html('');         
  };
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($height.val())) {
    $heightValidation.html('必须是数值');
    $width.select();
    return false;                          
  }

});

$btnCal.click(function(){
    var w = $width.val(),
        h = $height.val();
    var r = new Rectangle(w,h);
    
    if(w===''){
      $widthValidation.html('宽度不能为空哦！');
      //$width.select();//将光标回到本输入框
      return;      
    }

    if(h===''){
      $heightValidation.html('高度不能为空哦！');
      //$height.select();
      return;
    }
    if(Number(w)<0){
      $widthValidation.html('宽度不能为负哦！');
      //$width.select();//将光标回到本输入框
      return;                
    }
    if(Number(h)<0){
      $heightValidation.html('高度不能为负哦！');
      //$height.select();
      return;          
    }

    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
}); 
