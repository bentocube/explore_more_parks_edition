

$(document).ready(function () {

    element = document.getElementById('provinceList');
    var cun = element.options[ element.selectedIndex ].text;


    //if selected province code is equal to the province name in the JSON, show for that country
    $('#provinceList').change(function(){

        element = document.getElementById('provinceList');
        var cun = element.options[ element.selectedIndex ].text;

        //var cun = $('#provinceList').val();

        $.getJSON('cdnnationalparks.json', function (data) {
            var result ="<ul>";

            $.each(data.parks.park, function(index, park){

                if (cun == park.province) {
                    result += "<br><br><li>" + "<b>Park name: </b>" + park.name + "<br><br>" + "<b>Province </b>"
                        + park.province + "</li>";

                    /*var mapProp = {
                        center:new google.maps.LatLng(park.lat, park.lon),
                        zoom:5,
                        mapTypeId:google.maps.MapTypeId.ROADMAP
                    };

                    var latlng = new google.maps.LatLng(park.lat, park.lon);

                    var marker = new google.maps.Marker({
                        position: latlng,
                        title: park.name


                         var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
                    });

                    marker.setMap(map);*/
                    var roadmap;
                    var map = new google.maps.Map(document.getElementById('googleMap'), {
                        zoom: 5,
                        center: new google.maps.LatLng(park.lat, park.lon),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });


                    var infowindow = new google.maps.InfoWindow();

                    //var marker, i;

                    //var mylatlng = new google.maps.LatLng(park.lat, park.lon);
                    var mylatlng = {lat: parseFloat(park.lat), lng: parseFloat(park.lon)};


                        marker = new google.maps.Marker({
                            position: mylatlng,
                            title: park.name,
                            map: roadmap
                        });



                       /* google.maps.event.addListener(marker, 'click', (function(marker, i) {
                            return function() {

                                infowindow.setContent(park[i][2]);
                                infowindow.open(map, marker);
                            }
                        })(marker));

*/

                }




            });



            $('#emptyP').html(result);
            console.log(result);




        });





    });

}); //


