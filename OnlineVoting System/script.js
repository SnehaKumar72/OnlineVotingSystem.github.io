document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const votingSection = document.getElementById("voting-section");
    const confirmation = document.getElementById("confirmation");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showVotingSection();
    });

    const votingForm = document.getElementById("voting-form");
    votingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        showConfirmation();
    });

    function showVotingSection() {
        loginForm.style.display = "none";
        votingSection.style.display = "block";
    }

    function showConfirmation() {
        votingSection.style.display = "none";
        confirmation.style.display = "block";
    }
});
