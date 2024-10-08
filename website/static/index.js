const navbar = document.getElementById('navbarMain');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function mobileNavbar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

function openNav() {
    document.getElementById("mobileMenu").style.width = "100%";
    document.getElementById("mobileMenuContents").style.display = "block";
  }
  
  function closeNav() {
    document.getElementById("mobileMenu").style.width = "0%";
  }

