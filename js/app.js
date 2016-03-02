$(document).ready(function() {
  
 var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


    $.getJSON(flickerAPI, {
        tags: fixie bikes,
        format: "json"
      },
    function(data){
      var photoHTML = '';
      if (data.items.length > 0) {
        $.each(data.items,function(i,photo) {
          photoHTML += '<li class="grid-25 tablet-grid-50">';
          photoHTML += '<a href="' + photo.link + '" class="image">';
          photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      } // end getJSON

  }); // end click

}); // end ready