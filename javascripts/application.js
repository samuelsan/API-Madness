$( document ).ready(function() {

  var Instagram = {}

  function appear(photos){
    $.each(photos.data, function(index, photo) {
      photoArray = "<center><a href='" + photo.link + "'TARGET='_blank'><img src="+ photo.images.low_resolution.url + " /></a><p><h3>Caption:</h3> " + photo.caption.text + "<br><h4>Comments:</h4>" + photo.comments.count + "<br><h4>Likes:</h4>" + photo.likes.count +"</p></center>" ;
      $('div#photos-wrap').append(photoArray);
    });
  }

  function search(tag){
    var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=2bd9ae9146134d3f889e87a060937d52&count=9"
    $.getJSON(url, appear);
  }

  Instagram.search = search;

  Instagram.search("lighthouse");

});

