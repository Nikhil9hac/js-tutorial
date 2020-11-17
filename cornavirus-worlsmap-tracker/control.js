// AIzaSyDH_VEF1Bve9rtoc_Qfg7tWTq0sEwcms3o google map api

function initMap(){
    let option={
        zoom:2,
        center:{lat:42.3601,lng:-71.0589}
    }
    let map=new google.maps.Map(document.getElementById('map'),option)
}
// initmap()