(function() {
  var flickerAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=0fa4acd8aa1eabb23c59abc297bf8585&tags=fixies&per_page=5&format=json&jsoncallback=?";
  $.getJSON( flickerAPI).done(function( data ) {
      console.log(data);
      data.photos.photo.forEach(function (photo) {
        var $image = $( "<img>" ).attr( "src", "http://farm" 
                            + photo.farm 
                            + ".static.flickr.com/"
                            + photo.server 
                            + "/"
                            + photo.id
                            + "_" + photo.secret+ ".jpg/>");
        $('.images').append($image);
      });
  });
})();
