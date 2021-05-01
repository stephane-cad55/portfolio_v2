// $(function () {

//     $('#thumbnail li').click(function () {
//         var thisIndex = $(this).index()

//         if (thisIndex < $('#thumbnail li.active').index()) {
//             prevImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
//         } else if (thisIndex > $('#thumbnail li.active').index()) {
//             nextImage(thisIndex, $(this).parents("#thumbnail").prev("#image-slider"));
//         }

//         $('#thumbnail li.active').removeClass('active');
//         $(this).addClass('active');

//     });
// });

// var width = $('#image-slider').width();

// function nextImage(newIndex, parent) {
//     parent.find('li').eq(newIndex).addClass('next-img').css('left', width).animate({ left: 0 }, 600);
//     parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: -width }, 600);
//     parent.find('li.next-img').attr('class', 'active-img');
// }
// function prevImage(newIndex, parent) {
//     parent.find('li').eq(newIndex).addClass('next-img').css('left', -width).animate({ left: 0 }, 600);
//     parent.find('li.active-img').removeClass('active-img').css('left', '0').animate({ left: width }, 600);
//     parent.find('li.next-img').attr('class', 'active-img');
// }

// /* Thumbails */
// var ThumbailsWidth = ($('#image-slider').width() - 18.5) / 7;
// $('#thumbnail li').find('img').css('width', ThumbailsWidth);

$(document).ready(function() {
    var $item = 0,
      $itemNo = $(".hero figure").length;
    function transitionSlide() {
      $item++;
      if ($item > $itemNo - 1) {
        $item = 0;
      }
      $(".hero figure").removeClass("on");
      $(".hero figure")
        .eq($item)
        .addClass("on");
    }
    var $autoTransition = setInterval(transitionSlide, 2500);
  
    $(".hero figure").click(function() {
      clearInterval($autoTransition);
      $item = $(this).index();
      $(".hero figure").removeClass("on");
      $(".hero figure")
        .eq($item)
        .addClass("on");
      $autoTransition = setInterval(transitionSlide, 2500);
    });
  });
  

