// console.clear();
var userFeed = new Instafeed({
  target: 'carousel',
  get: 'user',
  userId: '330573068',
  // clientId: 'e52feabf84334ac78c8a62660015032e',
  accessToken: '330573068.1677ed0.4283785f60014358b68e68bdb58728ac',
  resolution: 'standard_resolution',
  template: '<span class="post" sauce="{{link}}" cap="{{caption}}"><img src="{{image}}" /><h2 class="post-cap"><span>{{caption}}</span></h2></span>',
  sortBy: 'most-recent',
  limit: 100
});

userFeed.run();

setTimeout(function(){
  $('.post-child').slick({
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3500,
    prevArrow: '<span class="prev"><i class="fa fa-chevron-left"></i></span>',
    nextArrow: '<span class="next"><i class="fa fa-chevron-right"></i></span>',
    appendArrows: '.slide-controls'
  });
}, 1000);

$('.post-child').on('init', function(slick){
  $('.ancestor').find('.post').on('click', function(){
    var image = $(this).find('img').attr('src');
    var url = $(this).attr('sauce');
    var caption = $(this).attr('cap');
    
    $('.instamodal').addClass('open').find('.inst_link').attr('href',url).find('img').attr('src',image).next().text(caption);
  });
  $('.instamodal').click(function(){
    $(this).removeClass("open");
    // $(this).parent().removeClass('open');
    // $(this).parent().find('.outbound-link').attr('href','#').find('img').attr('src','#');
    // setTimeout(function(){
    //   $(this).parent().find('.outbound-link').find('p').text('');
    // }, 540);
  });

  // var SpecialCharArr = [ 1,2,3,4,5,6,7,8,9,0,"!", "@", "#" ],
  //    testString = $('.post:first-child').find('.post-cap').text(),
  //    result = $.grep(testString, function(element, index) {
  //      return $.inArray(element.Keyword.charAt(0),SpecialCharArr) != -1 ? true : false;
  //    });
  // console.log(testString);
});


 var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

 
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

//An image to overlay
$overlay.append($image);

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#photo-gallery img").click( function(event) {
    // event.preventDefault();
    alert("click"); 
    var imageLocation = $(this).attr("src");


    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });

