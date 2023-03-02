/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");
  
  /*===== ACTIVE AND REMOVE MENU =====*/
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  
  window.addEventListener("scroll", () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 390) {
        current = section.getAttribute('id');
      }
    })
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.classList.contains(current)) {
        link.classList.add('active');
      }
    })
  })
  
  const navMenu = document.getElementById("nav-menu");
 
  navLinks.forEach((n) => n.addEventListener("click", () => { navMenu.classList.remove("show") }));
  
  /*===== COPY Email =====*/
  const copy = document.getElementById("copy");
  copy.addEventListener("click", () => {
    navigator.clipboard.writeText("saurabhpatel0894@gmail.com");
    copy.innerHTML = "copied";
    setTimeout(() => {
      copy.innerHTML = null;
    }, 1000);
  });
  
    GitHubCalendar(".calendar", "Saurabhpatel0894");
    // or enable responsive functionality                
    GitHubCalendar(".calendar", "Saurabhpatel0894", { responsive: true });