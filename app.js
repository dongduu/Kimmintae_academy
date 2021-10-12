const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const contents = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENTS_URL = 'http://api.hnpwa.com/v0/item/@id.json';

ajax.open('GET', NEWS_URL, false) // true: 비동기 처리 false: 동기 처리
ajax.send();

const newsFead = JSON.parse(ajax.response);
const ul = document.createElement('ul');

window.addEventListener('hashchange', function () {
    const id = location.hash.substr(1);

    ajax.open('GET', CONTENTS_URL.replace('@id', id), false);
    ajax.send();

    const newsContent = JSON.parse(ajax.response);
    const title = document.createElement('h1');

    title.innerHTML = newsContent.title;

    contents.appendChild(title);
});

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a');

    a.href = `#${newsFead[i].id}`;
    a.innerHTML = `${newsFead[i].title} (${newsFead[i].comments_count})`;
    
    li.appendChild(a);
    ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(contents);