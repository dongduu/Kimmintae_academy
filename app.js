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

function newsFeed () {
    const newsList = [];
    const newsFead = getData(NEWS_URL);

    newsList.push('<ul>');

    for (let i = 0; i < 10; i++) {
        newsList.push(`
            <li>
                <a href = "#${newsFead[i].id}">
                ${newsFead[i].title} (${newsFead[i].comments_count})
                </a>
            </li>
    `);
    newsList.push('</ul>');

    container.innerHTML = newsList.join(''); // 합쳐주는 함수
    }
};

function newsDetail () {
    const id = location.hash.substr(1);

    const newsContent = getData(CONTENTS_URL.replace('@id', id));
    const title = document.createElement('h1');

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        
        <div>
            <a href='#'>'목록으로'</a>
        </div>
    `;
};

function router () {
    const routePath = location.hash; 

    if (routePath === '') { // 해시에 아무런 id가 없는 경우
        newsFeed();
    } else {
        newsDetail();
    }
};

window.addEventListener('hashchange', router);

router();