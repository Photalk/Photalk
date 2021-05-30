function open_in_frame(url) {
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/"+url+".jpg 'width='100%'>";
    url = './web/viewer.html?file=/docs/' + url+'.pdf';
    $('#my_frame').attr('src', url);
    
}