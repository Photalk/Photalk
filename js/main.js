function open_pdf(type,url){
    url = './web/viewer.html?file=/docs/'+type+'/' + url+'.pdf';
    $('#my_frame').attr('src', url);
}
function open_image(type,url){
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/"+type+"/"+url+".jpg 'width='100%'>";
}

function click_event(type,url) {
    open_image(type,url);
    open_pdf(type,url)
}