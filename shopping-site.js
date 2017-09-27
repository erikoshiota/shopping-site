$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

$(document).ready(function() {
  $(".menu_icon").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });

    // ここに追加しています。
    $(".list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".products_img img").attr("src", img_src);
  });

});

/*
$(window).load(function(){
  $(".list_img img").click(function(){
    var img_src = $(this).attr("src");
    $(".products_img").attr("src", img_src);
  });
});
*/
