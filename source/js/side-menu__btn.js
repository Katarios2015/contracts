var createWindow = document.querySelector('.create-window');
var sideMenuBtn = document.querySelector('.side-menu__btn');
var exitBtn = document.querySelector('.create-window__exit-btn');

sideMenuBtn.addEventListener('click', function() {
  if (createWindow.classList.contains('create-window')) {
    createWindow.classList.remove('create-window');
    createWindow.classList.add('create-window--open');
  }
  if (createWindow.classList.contains('create-window--open')) {
    exitBtn.addEventListener('click', function() {
      createWindow.classList.remove('create-window--open');
      createWindow.classList.add('create-window');
    })
  }
});
