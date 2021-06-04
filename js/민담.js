window.addEventListener('DOMContentLoaded', (e) => {
    const requestURL = "data/민담.json";
    const xhr = new XMLHttpRequest();
    e.stopImmediatePropagation();

    xhr.open('GET', requestURL, 'true');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = (e) => {
        e.stopPropagation();
        const jsonObj = xhr.response;
        const outputContentEle = document.getElementById('outputContent');
        outputContentEle.innerHTML = getContent2(jsonObj);
    }
});

const setRow = (obj) => {
    // 객체 구조분해 할당
    const {
        no,
        title
    } = obj;
    const rowtext = `<tr><td>${no}</td><td><a onclick='click_event2("민담","${title}")'>${title}</a></td>`;
    return rowtext;
};
function click_event2(type, url) {
    open_pdf(type, url);
    open_image(type, url);
}

const getContent2 = (data) => {
    const content = data.contents;
    let tbodyStr = "<td><b>번호</b></td>" + "<td><b>제목</b></td>" + "<tbody>";
    for (let i = 0; i < content.length; i++) {

        var tableRow = {
            no: i + 1,
            title: content[i].title,
        };

        tbodyStr += setRow(tableRow);
    }
    tbodyStr += "</tbody>";
    return (tbodyStr);
}