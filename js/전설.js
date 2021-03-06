window.addEventListener('DOMContentLoaded', (e) => {
    const requestURL = "data/전설.json";
    const xhr = new XMLHttpRequest();
    e.stopImmediatePropagation();

    xhr.open('GET', requestURL, 'true');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = (e) => {
        e.stopPropagation();
        const jsonObj = xhr.response;
        const outputContentEle = document.getElementById('outputContent');
        outputContentEle.innerHTML = getContent(jsonObj);
    }
});
const setRow = (obj) => {
    // 객체 구조분해 할당
    const {
        no,
        title,
        place,
        lat,
        long
    } = obj;
    const rowtext = `<tr><td>${no}</td><td><a onclick='click_event("전설","${title}","${place}","${lat}","${long}")'>${title}</a></td>`;
    return rowtext;
};