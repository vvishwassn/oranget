document.addEventListener('DOMContentLoaded', () => {
    console.log('Tech Blog website loaded');
});

function searchPosts() {
    const query = document.getElementById('search').value.toLowerCase();
    const articles = document.querySelectorAll('article');
    const leftColumn = document.querySelector('.blog-posts .column:first-child');
    const rightColumn = document.querySelector('.blog-posts .column:last-child');
    const matchingArticles = [];
    const nonMatchingArticles = [];

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            article.classList.add('highlight');
            matchingArticles.push(article);
        } else {
            article.classList.remove('highlight');
            nonMatchingArticles.push(article);
        }
    });

    // Clear the current articles
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    // Append matching articles first
    matchingArticles.forEach((article, index) => {
        if (index % 2 === 0) {
            leftColumn.appendChild(article);
        } else {
            rightColumn.appendChild(article);
        }
    });

    // Append non-matching articles
    nonMatchingArticles.forEach((article, index) => {
        if (index % 2 === 0) {
            leftColumn.appendChild(article);
        } else {
            rightColumn.appendChild(article);
        }
    });
}