function ShowSideba() {
    const sidebar = document.getElementsByClassName('menu-button');
    if (sidebar.style.left === '-250px') {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-250px';
    }
  }
  

  function ShowSidebar() {
    const sidebar = document.querySelector('.sidebar');
    // const content = document.querySelector('.content');

    if (sidebar.style.marginLeft === '-250px') {
        sidebar.style.marginLeft = '0';
        content.style.marginLeft = '250px';
    } else {
        sidebar.style.marginLeft = '-250px';
        content.style.marginLeft = '0';
    }
}
