window.addEventListener('DOMContentLoaded', (e) => {
    const requestURL = "data/신화.json";
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
        lat,
        long
    } = obj;
    const rowtext = `<tr><td>${no}</td><td><A onclick='click_event("신화","${title}","${lat}","${long}")'>${title}</A></td>`;
    return rowtext;
};