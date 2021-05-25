function open_in_frame(url) {
    url = './web/viewer.html?file=/docs/' + url
    $('#my_frame').attr('src', url);
}