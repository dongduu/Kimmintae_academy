const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const contents = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENTS_URL = 'http://api.hnpwa.com/v0/item/@id.json';

function getData(url) {
    ajax.open('GET', url, false) // true: 비동기 처리 false: 동기 처리
    ajax.send();

    return JSON.parse(ajax.response);
}

const newsFead = getData(NEWS_URL);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
    const id = location.hash.substr(1);

    const newsContent = getData(CONTENTS_URL.replace('@id', id));
    const title = document.createElement('h1');
    
    title.innerHTML = newsContent.title;

    contents.appendChild(title);
});

for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');

    div.innerHTML = `
        <li>
            <a href = "#${newsFead[i].id}">
            ${newsFead[i].title} (${newsFead[i].comments_count})
            </a>
        </li>
    `;

    ul.appendChild(div.firstElementChild);
}

container.appendChild(ul);
container.appendChild(contents);    