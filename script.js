document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();

    // Navigation
    const nav = { 'h': 'home', 'a': 'about', 'w': 'works', 'c': 'connect' };
    if (nav[key]) document.getElementById(nav[key]).scrollIntoView({ behavior: 'smooth' });

    // Actions
    switch(key) {
        case 'v': document.getElementById('resumeLink').click(); break;
        case 'p': window.open(document.getElementById('proj1').href, '_blank'); break;
        case 'o': window.open(document.getElementById('proj2').href, '_blank'); break;
        case 'e': document.getElementById('emailLink').click(); break;
        case 'i': window.open(document.getElementById('instaLink').href, '_blank'); break;
        case 'f': window.open(document.getElementById('fbLink').href, '_blank'); break;
    }
});
window.addEventListener('keydown', function(e) {
  // Check if the key pressed is 'Enter'
  if (e.key === 'Enter') {
    // Optional: prevent the default "new line" if typing in a form
    // e.preventDefault(); 

    window.scrollBy({
      top: window.innerHeight, // Scrolls down by one full screen height
      left: 0,
      behavior: 'smooth'      // Makes the movement fluid
    });
  }
});