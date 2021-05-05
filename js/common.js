$(document).ready(function(){
  backToTop()
})

function backToTop(){
  $(".backToTop").click(function(){
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  })
}

const VideoController = function(isHovering, videoElement)
{
  if(isHovering == false)
  {
    videoElement.play();
  }
  else if(isHovering == true)
  {
    videoElement.pause();
  }
}

