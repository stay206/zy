$(function(){  
 
    //鍒ゆ柇娴忚鍣ㄦ槸鍚︽敮鎸乸laceholder灞炴�
    supportPlaceholder='placeholder'in document.createElement('input'),
   
    placeholder=function(input){
   
      var text = input.attr('placeholder'),
      defaultValue = input.defaultValue;
   
      if(!defaultValue){
   
        input.val(text).addClass("phcolor");
      }
   
      input.focus(function(){
   
        if(input.val() == text){
     
          $(this).val("");
        }
      });
   
    
      input.blur(function(){
   
        if(input.val() == ""){
         
          $(this).val(text).addClass("phcolor");
        }
      });
   
      //杈撳叆鐨勫瓧绗︿笉涓虹伆鑹�
      input.keydown(function(){
    
        $(this).removeClass("phcolor");
      });
    };
   
    //褰撴祻瑙堝櫒涓嶆敮鎸乸laceholder灞炴�鏃讹紝璋冪敤placeholder鍑芥暟
    if(!supportPlaceholder){
   
      $('input').each(function(){
   
        text = $(this).attr("placeholder");
   
        if($(this).attr("type") == "text"){
   
          placeholder($(this));
        }
      });
    }
   
  });