function open_pdf(type, url) {
    url = './web/viewer.html?file=/docs/' + type + '/' + url + '.pdf';
    $('#my_frame').attr('src', url);
}
function open_image(type, url) {
    var p = document.getElementById('image');
    p.innerHTML = "<img src='images/" + type + "/" + url + ".jpg 'width='100%'>";
}
function open_map(place, lat, long) {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
            mapTypeId: kakao.maps.MapTypeId.ROADMAP // 지도종류
        };

    // 지도를 생성한다
    var map = new kakao.maps.Map(mapContainer, mapOption);
    var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(lat, long), // 마커의 좌표
        map: map // 마커를 표시할 지도 객체
    });
    // 마커 위에 표시할 인포윈도우를 생성한다
    var infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">' + place + '</div>' // 인포윈도우에 표시할 내용
    });
    // 인포윈도우를 지도에 표시한다
    infowindow.open(map, marker);

}

function click_event(type, url, place, lat, long) {
    open_pdf(type, url);
    open_image(type, url);
    open_map(place, lat, long);
}

const getContent = (data) => {
    const content = data.contents;
    let tbodyStr = "<td><b>번호</b></td>" + "<td><b>제목</b></td>" + "<tbody>";
    for (let i = 0; i < content.length; i++) {

        var tableRow = {
            no: i + 1,
            title: content[i].title,
            place: content[i].place,
            lat: content[i].lat,
            long: content[i].long
        };

        tbodyStr += setRow(tableRow);
    }
    tbodyStr += "</tbody>";
    return (tbodyStr);
}