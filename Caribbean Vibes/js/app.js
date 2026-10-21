$(document).ready(function () {
    $("#Contact_form").submit(function (event) {
        event.preventDefault();

        $("#confirmation").text(
            "Message sent! We will get back to you as soon as possible."
        );

        this.reset();
    });
});

// Ticket Form
const form = document.getElementById("ticket_form");

if (form) {
    const modal = new bootstrap.Modal(document.getElementById("successModal"));

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("successEmail").textContent =
            document.getElementById("email").value;
        modal.show();

        form.reset();
    });
}

const topButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});