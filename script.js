/*-------------------------------------for the 3 lines of the nav bar when it goes to phone-----*/

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }






  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function fadeInOnScroll() {
    const p1 = document.getElementById('p1');
    const p2 = document.getElementById('p2');
    const p3 = document.getElementById('p3');
    const p4 = document.getElementById('p4');
  
    window.addEventListener('scroll', function() {
      if (isInViewport(p1)) {
        p1.classList.add('fade-when-visible');
      }
      if (isInViewport(p2)) {
        p2.classList.add('fade-when-visible');
      }
      if (isInViewport(p3)) {
        p3.classList.add('fade-when-visible');
      }
      if (isInViewport(p4)) {
        p4.classList.add('fade-when-visible');
      }
    });
  }
  
  // Call the function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', function() {
    fadeInOnScroll();
  });
  




















  document.getElementById('booklesson').addEventListener('click', function() {
    // Navigate to the link when the button is clicked
    window.location.href = 'contact.html';
  });