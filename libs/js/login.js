$(document).ready(function(){
$('small#bypass').click(function(){
  $.ajax({
      url: 'controller/bypass.php',
      dataType: "json",
      data: {'bypass': "jason"},
      method: "POST",
      encode: true
    }).done(function(data){
      var redirect = data.href;
      if (redirect.match(".php$")){
        $(location).attr('href',redirect);
      }else{
        bootbox.alert("<div><span>Message &rarr;"+data.message+"</span></br>"+
        "<span>Process Status &rarr; "+data.status+"</span></br><a href='"+redirect+"'>click here if not redirected</a>");
      }
    }).fail(function(data){
      bootbox.alert("Data sending failed.");
      console.log("failed", data);
    });
  return false;
});

});
