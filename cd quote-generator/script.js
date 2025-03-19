// 初始化名言数组
let quotes = [];

// 加载本地JSON数据
fetch('quotes.json')
    .then(response => response.json())
    .then(data => {
        quotes = data;
        generateQuote(); // 页面加载后立即显示一条
    })
    .catch(error => console.error('数据加载失败:', error));

function generateQuote() {
    if (quotes.length === 0) {
        document.getElementById('quoteText').textContent = "数据加载中，请稍候...";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    // 更新DOM
    const quoteElement = document.getElementById('quoteText');
    const authorElement = document.getElementById('quoteAuthor');
    
    quoteElement.textContent = `“${selectedQuote.text}”`;
    authorElement.textContent = `—— ${selectedQuote.author}`;
    
    // 添加动画效果
    quoteElement.style.animation = 'fadeIn 0.5s';
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);
function shareToWeibo() {
    const text = encodeURIComponent(document.getElementById('quoteText').textContent);
    window.open(`https://service.weibo.com/share/share.php?url=&title=${text}`);
}