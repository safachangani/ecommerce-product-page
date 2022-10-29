$(document).ready(function(){
 $(".next").on('click',function(){
  var currentImg=$('.active');
  var nextImg=currentImg.next();
  if(nextImg.length){
    currentImg.removeClass('active').css('z-index',-10)
    nextImg.addClass('active').css('z-index',10)
  }
 })

 $(".prev").on('click',function(){
  var currentImg=$('.active');
  var prevImg=currentImg.prev();
  if(prevImg.length){
    currentImg.removeClass('active').css('z-index',-10)
    prevImg.addClass('active').css('z-index',10)
  }
})
$('#plus').click(function() {
  $('#number').html(function(i, val) { return val*1+1 });
});
$('#minus').click(function() {
  $('#number').html(function(i, val) { return val*1-1 });
   
});

$('#minus').click(function(){
  if ($('#number').val() != 0){
    console.log('i')
    ('#number').text('0')
  }

})
$('#minus').click(function(){
var value = $('#number').text()

  if(value < 0){
  $('#number').text('0')
}
})
$('.add_cart').click(function(){
   var item = $('#number').text()
   $('.item').text(item)
   if(item > 0){
   $(".item").css({
    'display':'block'
   })
   }
})

$('.basket').click(function(){
  $('.checkout').toggle()
  
})

$('.add_cart').click(function(){
  var qty = $('#number').text()
  var res = parseFloat(125)*parseFloat(qty) 
  console.log(res)
  $('#quantity').text(qty)
  $('#total').text('$'+res)
})
$('.delete').click(function(){
  $('#cart_item').css({
    'display':'block'
  })
})
$('.add_cart').click(function(){
  var value = $('#number').text()
   if(value > 0){
  $('#cart_item').css({
    'display':'none'
  })
   }
})
$('.menu').click(function(){
  $('.sidebar').css({
    'left':'0'
  })
})
 
$('.menu').click(function(){
  $('.container').css({
   
    'opacity':'75%'
   
  })
})
$('.close').click(function(){
  $('.sidebar').css({
    'left':'-100%'
  })
 

})
$('.close').click(function(){
 
  $('.container').css({
  
    'background-color': 'white',
    'opacity':'100%'
   
  })
  console.log('hi')
})

$(".next").on('click',function(){
  var currentImg=$('.active');
  var nextImg=currentImg.next();
  if(nextImg.length){
    currentImg.removeClass('active').css('z-index',-10)
    nextImg.addClass('active').css('z-index',10)
  }


 })

 $(".prev").on('click',function(){
  var currentImg=$('.active');
  var prevImg=currentImg.prev();
  if(prevImg.length){
    currentImg.removeClass('active').css('z-index',-10)
    prevImg.addClass('active').css('z-index',10)
  }
})
$("#img1").click(function(){
  // Change src attribute of image
  $('#img_show').attr("src", "./images/image-product-1.jpg");
}); 

$("#img2").click(function(){
  // Change src attribute of image
  $('#img_show').attr("src", "./images/image-product-2.jpg");
}); 

$("#img3").click(function(){
  // Change src attribute of image
  $('#img_show').attr("src", "./images/image-product-3.jpg");
}); 
$("#img4").click(function(){
  // Change src attribute of image
  $('#img_show').attr("src", "./images/image-product-4.jpg");
}); 

$(".click_image").click(function(){
  $('#fade').css({
    'display':'block'
  })
})

$(".click_image").click(function(){
  $('.slide').css({
    'display':'block'
  })
})
$("#close").click(function(){
  $('.slide').css({
    'display':'none'
  })
  $('#fade').css({
    'display':'none'
  })
})
/*
$("#img_one").click(function(){
  $('img.image2').css({
    'display':'inline-block'
  })
  $('img.active').css({
    'display':'none'
  })*/

  $("#img_one").click(function(){
    // Change src attribute of image
    $('.active').attr("src", "./images/image-product-1.jpg");
  }); 

  
  $("#img_two").click(function(){
    // Change src attribute of image
    $('.active').attr("src", "./images/image-product-2.jpg");
  }); 
  
  $("#img_three").click(function(){
    // Change src attribute of image
    $('.active').attr("src", "./images/image-product-3.jpg");
  }); 
  
  $("#img_four").click(function(){
    // Change src attribute of image
    $('.active').attr("src", "./images/image-product-4.jpg");
  }); 
})

