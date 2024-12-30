function showSection(sectionId) {
  // Remove 'active' class from all links
  const allLinks = document.querySelectorAll('nav ul li a');
  allLinks.forEach(link => link.classList.remove('active'));

  // Add 'active' class to the clicked link
  const currentLink = Array.from(allLinks).find(link => 
    link.getAttribute('onclick').includes(sectionId)
  );
  if (currentLink) {
    currentLink.classList.add('active');
  }

  // Show the corresponding section (assuming sections are toggled by ID)
  const allSections = document.querySelectorAll('section');
  allSections.forEach(section => section.style.display = 'none');

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}
