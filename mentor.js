const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
async function loadDirectory() {
  const loading = document.getElementById('directory-loading');
  loading.classList.remove('hidden');

  try {
    const res = await fetch("http://localhost:8000/api/mentors");
    const data = await res.json();

    console.log(data);

  } catch (err) {
    console.error("Error loading directory", err);
  } finally {
    loading.classList.add('hidden')
  }
}
document.querySelector('.btn-primary').addEventListener('click', () => {
  loadDirectory();
});
document.querySelector('.btn-tertiary').addEventListener('click', () => {
  loadDirectory();
});

