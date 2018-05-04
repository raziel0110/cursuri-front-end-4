window.onload = loadHtml

function loadHtml(){
    getMyIp();
}

function getMyIp(){
    $.ajax('https://api.ipdata.co',{
        method:'GET',
        success : function(response){
            var post = document.getElementById('ip-post');
            

            post.innerHTML = '<p>'+ response.ip +'</p>'+
                            '<p>Your City : '+ response.city + ' </p>'+
                            '<p>Latitude:'+response.latitude +' and longitude :'+response.longitude+'</p>';

        } 
    });
}