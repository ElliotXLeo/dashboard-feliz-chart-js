const header = () => {
  const header = document.querySelector('.header');

  const documentScroll = () => {
    header.classList.toggle('header--scroll', window.scrollY > 0);
  };

  const toggleTheme = () => {
    const body = document.querySelector('.body');
    body.classList.toggle('body--light');
    headerNavThemeIconContainer.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  };

  document.addEventListener('scroll', documentScroll);
  if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
    document.querySelector('.body').classList.remove('body--light');
    headerNavThemeIconContainer.classList.remove('header-nav__theme-icon-container--active');
  } else {
    document.querySelector('.body').classList.add('body--light');
    headerNavThemeIconContainer.classList.add('header-nav__theme-icon-container--active');
  }

  headerNavThemeIconContainer.addEventListener('click', toggleTheme);
}

export default header;