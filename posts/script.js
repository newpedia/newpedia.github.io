document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('header nav ul.menu li a');
    const currentPage = window.location.pathname.split("/").pop();

    menuItems.forEach(item => {
        if(item.getAttribute('href') === currentPage){
            item.classList.add('active');
        }
    });
});
