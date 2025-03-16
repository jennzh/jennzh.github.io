document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".experience-toggle i");

    toggles.forEach((toggle) => {
        toggle.addEventListener("click", function () {
            const content = this.closest(".experience-entry").querySelector(".experience-content");

            if (content) {
                content.classList.toggle("hidden");
                this.classList.toggle("fa-chevron-down");
                this.classList.toggle("fa-chevron-right");
            }
        });
    });
});
