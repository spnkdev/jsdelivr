jQuery(document).ready(function ($) {
    $("iframe").each(function() {
        //var src= $(this).attr('height');
        $(this).attr('width', 640);
        $(this).attr('height', 360);
        console.log(src);
  });
});