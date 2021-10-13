const container = document.getElementById('root');
const ajax = new XMLHttpRequest();
const contents = document.createElement('div');
const NEWS_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENTS_URL = 'http://api.hnpwa.com/v0/item/@id.json';
const store = {
    currentPage: 1,
};

function getData(url) {
    ajax.open('GET', url, false) // true: 비동기 처리 false: 동기 처리
    ajax.send();

    return JSON.parse(ajax.response);
}

function newsFeed () {
    const newsList = [];
    const newsFeed = getData(NEWS_URL);

    newsList.push('<ul>');

    for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
        newsList.push(`
            <li>
                <a href = "#/show/${newsFeed[i].id}">
                ${newsFeed[i].title} (${newsFeed[i].comments_count})
                </a>
            </li>
    `);
    }    
    newsList.push('</ul>');
    newsList.push(`
        <div>
            <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
            <a href="#/page/${store.currentPage + 1}">다음 페이지</a>
        </div>
    `)

    container.innerHTML = newsList.join(''); // 합쳐주는 함수
};

function newsDetail () {
    const id = location.hash.substr(7);
    const newsContent = getData(CONTENTS_URL.replace('@id', id));

    container.innerHTML = `
        <h1>${newsContent.title}</h1>
        
        <div>
            <a href='#/page/${store.currentPage}'>'목록으로'</a>
        </div>
    `;
};

function router () {
    const routePath = location.hash; 

    if (routePath === '') { // 해시에 아무런 id가 없는 경우
        newsFeed();
    } else if (routePath.indexOf('#/page/') >= 0) { // indexOf: 있으면 0 이상의 위치 값을 리턴, 없으면 -1을 리턴
        store.currentPage = Number(substr(7));
        newsFeed();
    } else {
        newsDetail();
    }
};

window.addEventListener('hashchange', router);

router();