const ajax = new XMLHttpRequest();
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';

ajax.open('GET', NEWS_URL, false) // true: 비동기 처리 false: 동기 처리
ajax.send();

const newsFead = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for (let i = 0; i < 10; i++) {
    const li = document.createElement('li')
    li.innerHTML = newsFead[i].title;
    ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);