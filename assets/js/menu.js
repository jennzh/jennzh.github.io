document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector("#sidebar");
    const mainContent = document.querySelector("#main");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        mainContent.classList.toggle("shifted");

        if (sidebar.classList.contains("active")) {
            menuToggle.style.position = "absolute";
            menuToggle.style.right = "20px"; 
            menuToggle.style.left = "auto";
        } else {
            menuToggle.style.position = "fixed";
            menuToggle.style.left = "20px"; 
            menuToggle.style.right = "auto";
        }
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
            mainContent.classList.remove("shifted");

            menuToggle.style.position = "fixed";
            menuToggle.style.left = "20px";
            menuToggle.style.right = "auto";
        }
    });
});
