function open_in_frame(url) {
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/신화/"+url+".jpg 'width='100%'>";
    url = './web/viewer.html?file=/docs/신화/' + url+'.pdf';
    $('#my_frame').attr('src', url);
    
}

function open_in_frame2(url) {
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/전설/"+url+".jpg 'width='100%'>";
    url = './web/viewer.html?file=/docs/전설/' + url+'.pdf';
    $('#my_frame').attr('src', url);
    
}

function open_in_frame3(url) {
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/민담/"+url+".jpg 'width='100%'>";
    url = './web/viewer.html?file=/docs/민담/' + url+'.pdf';
    $('#my_frame').attr('src', url);
    
}