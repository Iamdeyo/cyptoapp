const ham = document.querySelector('div.ham');
const sidebar = document.querySelector('div.sidebar');
const main = document.querySelector('main');

const siderbarSlider = () => {
  sidebar.classList.toggle('active');
};
const siderbarRemover = () => {
  sidebar.classList.remove('active');
};

ham.addEventListener('click', siderbarSlider);

main.addEventListener('click', siderbarRemover);
