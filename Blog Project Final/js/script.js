


window.onload = onHtmlLoad

function onHtmlLoad(){
    $.ajax('https://api.ipdata.co?api-key=f190d0fcea644bcdd95b969277ea64971a947e314e82a16eab06dd6a',{
        method:'GET',
        success : function(response){
            var ip = document.getElementById('ip');
            ip.innerHTML = '<p> Your Ip: '+ response.ip +'</p>'+
                            '<p>Your City : '+ response.city + ' </p>'+
                            '<p>Latitude:'+response.latitude +' + Longitude :'+response.longitude+'</p>';

        } 
    });
    Time();
}
function Time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();

    var clock = document.getElementById('clock');
    clock.innerHTML = 'Your time is: '+hour + ' : ' + minute +' : '+seconds;
    setTimeout(Time,1000);

}

