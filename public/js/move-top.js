/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){
  $.fn.UItoTop=function(options){
    var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1000,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
  var dato = ("/"+location.href).split("/");
  var pagina = ((dato[dato.length-1]+"?").split("?")[0]+"#").split("#")[0];
if(sd>settings.min){
  $(containerIDhash).fadeIn(settings.inDelay);
  if(pagina =='accueil'){
    $('#header').attr('style', 'position: fixed;display:block;width:100%');
    $('#img_logo').attr('style', 'width: 57%');
    $('#sub_logo').attr('style','');
    $('#logo').attr('class','logo2');
  }

}else{
  $(containerIDhash).fadeOut(settings.Outdelay);
  if(pagina =='accueil'){
    $('#header').attr('style', '');
    $('#img_logo').attr('style', '');
    $('#sub_logo').attr('style','width: 35%; margin-left: auto; margin-right: auto;');
    $('#logo').attr('class','logo1');
  }else {
    $('#header').attr('style', 'position: fixed;display:block;width:100%');
    $('#img_logo').attr('style', 'width: 57%');
    $('#sub_logo').attr('style','');
    $('#logo').attr('class','logo2');
  }

}
});};})(jQuery);
