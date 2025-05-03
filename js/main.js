// Loading animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  const body = document.body;
  
  setTimeout(() => {
    loader.classList.add('fade-out');
    body.classList.add('loaded');
    
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 1000);
});
function clearForm(event) {

  document.getElementById("contactForm").reset(); // Clear the form
  alert("test")
}
// Attach the function to the form's submit event
document.getElementById("contactForm").addEventListener("submit", clearForm);
