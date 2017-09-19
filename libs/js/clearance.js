$(document).ready(function(){
  $('form .section').hide();
  $('form .section#student-details').show();

  $('textarea').on("keyup", function(){
    console.log("Hello", $(this).height());
  });

  $('li#student-details-tab').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#student-details').show();
    return false;
  });

  $('li#clear-library').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#library-clearance').show();
    return false;
  });

  $('li#clear-institute').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#institute-clearance').show();
    return false;
  });

  $('li#clear-games').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#games-clearance').show();
    return false;
  });

  $('li#clear-hostels').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#hostels-clearance').show();
    return false;
  });

  $('li#clear-health').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#health-clearance').show();
    return false;
  });

  $('li#clear-dean').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#dean-clearance').show();
    return false;
  });

  $('li#clear-finance').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#finance-clearance').show();
    return false;
  });

  $('li#clear-director').click(function(){
    $($('.nav .active > a').attr('href')).hide();
    $('.nav .active').removeClass('active');
    $(this).addClass('active');
    $('form .section#director-clearance').show();
    return false;
  });

});
