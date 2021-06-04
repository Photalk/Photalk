function open_pdf(type,url){
    url = './web/viewer.html?file=/docs/'+type+'/' + url+'.pdf';
    $('#my_frame').attr('src', url);
}
function open_image(type,url){
    var p=document.getElementById('image');
    p.innerHTML="<img src='images/"+type+"/"+url+".jpg 'width='100%'>";
}
function open_map(lat,long){
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
          mapOption = {
              center: new kakao.maps.LatLng(lat, long), // 지도의 중심좌표
              level: 3, // 지도의 확대 레벨
              mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
          };

      // 지도를 생성한다
      var map = new kakao.maps.Map(mapContainer, mapOption);
}

function click_event(type,url,lat,long) {
    open_image(type,url);
    open_map(lat,long)
    open_pdf(type,url)
}

const getContent = (data) => {
    const content = data.contents;
    const theadStr = "<thead><th>번호</th><th>제목</th></thead>";
    let tbodyStr = "<tbody>";
    for (let i = 0; i < content.length; i++) {

        var tableRow = {
            no         : i+1,
            title        : content[i].title,
            lat   : content[i].lat,
            long       : content[i].long
        };

        tbodyStr += setRow(tableRow);
    }
    tbodyStr += "</tbody>";
    return (theadStr + tbodyStr);
}