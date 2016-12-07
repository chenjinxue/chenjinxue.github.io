$(document).ready(function(){
		var wq=$(window).height();
		$(window).scroll(function(){
		var height=wq-$(window).scrollTop();
		if(height<200){
		$(".zhuanye").addClass("active");
		$(".service").addClass("active");
		}
	  });
	  

	  $(window).scroll(function(){
	  	if($(window).scrollTop()==1300){
	  		$(".one").addClass("avtive2");
	  		$(".four").addClass("avtive2");
	  		$(".two").addClass("active2");
	  		$(".five").addClass("active2");
            $(".three").addClass("avtive3");
	  		$(".six").addClass("avtive3");
	  	}
	  })
	
	
  var sflag=true;
  var louceng=$("#top")
  console.log(louceng)
  var loutz=$(".louceng")
  var lou=$(".loul")
  console.log(lou)
  $(window).scroll(function(){
  	if(sflag){
  	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层

        if(lou.eq(0).offset().top<=obj.scrollTop+200)
        {
            louceng.css("display","block")
        }
        else 
        {
           louceng.css("display","none")

        }
       
  	}
  })
 
 loutz.click(function(){
        	var index=loutz.index($(this))
        	sflag=false;
        	$("body").animate({"scrollTop":lou.eq(index).offset().top-800},function(){sflag=true})
        })

});