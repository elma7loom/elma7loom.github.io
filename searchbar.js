// Basic search function
document.getElementById('search-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  const query = document.getElementById('search-bar').value.toLowerCase();
  
  if (query === 'topics') {
    alert('Topics found');
    window.location.href = '#topics';
  } else if (query === 'articles') {
    alert('Newest Articles found');
    window.location.href = '#newest-articles';
  } else if (query === 'about') {
    alert('About Section found');
    window.location.href = '#about';
  } else {
    alert('No results found');
  }
});
