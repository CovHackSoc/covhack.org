/* MLH badge colour changing stuff & nav title show and hide on scroll */
$(document).ready(function(){
  $('#mlh-trust-badge-1').show();

  $(document).scroll(function(){
    if($(document).scrollTop() > ($( window ).height()-100)) {
      //$('#mlh-trust-badge-2').fadeIn(100, function(){
      //  $('#mlh-trust-badge-1').hide()
      //})
      $('nav').addClass('nav-visible');
    } else {
      //$('#mlh-trust-badge-1').show(0, function(){
      //  $('#mlh-trust-badge-2').fadeOut(100)
      //})
      $('nav').removeClass('nav-visible');
    }
  });
});

/* Mapbox stuff */
mapboxgl.accessToken = 'pk.eyJ1IjoibTE1ODc0MDkiLCJhIjoiY2pvc3l1cTZqMHNvZjNwcGh5azRvYmRycSJ9.xtQSLto9hgN4J9LAzLQcbw';
  var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [-1.500075, 52.405634],
  zoom: 16.1
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-1.500086, 52.405313]
    },
    properties: {
      title: 'Mapbox',
      description: '1 Gulson Rd,<br/> Coventry<br/>CV1 2JH'
    }
  }]
};

map.on("load", function () {
  geojson.features.forEach(function(marker) {
    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'pin2';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 })
    .setHTML('<h3>'+marker.properties.title+'</h3><p><em>Address:</em><br/>'+marker.properties.description+'</p>'))
    .addTo(map);
  })

  map.scrollZoom.disable();
});

/* Scrolling */

// Checks for any a tags with the 'data-scroll-to-id' attribute set

$(document).ready(() => {
  $('a[data-scroll-to-id]').click(e => {
    return false;
  })

  $('a[data-scroll-to-id]').each(function(){
    const dataScrollToID = $(this).data("scroll-to-id")
    if(typeof dataScrollToID != 'undefined') {
      const target = $('#'+dataScrollToID);

      //Check if the target exists in the DOM
      if (target.length === 1) {
        $(this).click(function(){
          //TODO: Only use outer height of nav when not in mobile mode
          $('html, body').stop().animate({ scrollTop: ( target.offset().top - 0/*$('nav').outerHeight()*/ ) }, 1000);
        })
      } else {
        console.warn('Scroll to ID: The ID \'' + dataScrollToID + '\' was not found in DOM or apperas multiple times');
      }
    }
  });

  console.log('done')
});

/* Mobile nav button */
$(document).ready(() => {
  $('#mobile-nav-btn').click(() => {
    $('#mobile-nav-btn').toggleClass('mobile-nav-btn-clicked');
    $('body').toggleClass('body-noscroll');

    if($('nav').css('visibility') === 'hidden') {
      $('nav').css('visibility', 'visible');
    } else {
      $('nav').css('visibility', 'hidden');
    }
  });
});
