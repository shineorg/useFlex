$(function() {
  $('#flex').change(function(){
    var flex = $(this).val();
    $('.box').eq(1).find('.item2').eq(0).css('flex', flex);
  });
  $('#flex1').change(function(){
    var flex1 = $(this).val();
    $('.box').eq(1).find('.item2').eq(1).css('flex', flex1);
  });
  $('#flex2').change(function(){
    var flex2 = $(this).val();
    $('.box').eq(1).find('.item2').eq(2).css('flex', flex2);
  });
  $('#direction').change(function() {
    var direction = $(this).val();
    $('.box').eq(1).css('flexDirection', direction);
  });
  $('#wrap').change(function() {
    var wrap = $(this).val();
    $('.box').eq(1).css('flexWrap', wrap);
  });
  $('#justifyContent').change(function() {
    var justifyContent = $(this).val();
    $('.box').eq(1).css('justifyContent', justifyContent);
  });
  $('.single-slider').jRange({
    from: 100.0,
    to: 400.0,
    step: 1,
    scale: [100.0, 200.0, 300.0, 400.0],
    format: '%s px',
    width: 200,
    showLabels: true,
    showScale: true,
    isRange: false,
    snap: true,
    theme: "theme-green",
    onstatechange: function(value) {
      $('.item2').css({
        'width':value + "px",
      });
    }
  });
});