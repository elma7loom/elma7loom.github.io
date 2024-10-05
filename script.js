// Basic search function
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  const query = document.getElementById('search-bar').value.toLowerCase();
  
  if (query === 'topics') {
    window.location.href = 'topics.html';
  } else if (query === 'articles') {
    window.location.href = 'articles.html';
  } else if (query === 'about') {
    window.location.href = 'about.html';
  } else {
    alert('No results found. Try searching for "topics", "articles", or "about".');
  }
});
