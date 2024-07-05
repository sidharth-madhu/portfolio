const navLinks = document.querySelectorAll('nav ul li a');

// Add event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the target element's ID
    const targetId = link.getAttribute('href').replace('#', '');

    // Get the target element
    const targetElement = document.getElementById(targetId);

    // Animate the scrolling
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });
});