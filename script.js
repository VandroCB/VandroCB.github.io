document.addEventListener("DOMContentLoaded", (event) => {
    /*
    const els = document.getElementsByClassName("sizeButton");
    Array.from(els).forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            e.currentTarget.classList.add("pressed");
            console.log('Button "sizeSelect" pressed!');
        });
    });
    */
    const els2 = document.getElementById("GitHubRepo");
    els2.addEventListener("click", (e2) => {
        e2.preventDefault();
        //e2.currentTarget.classList.add("pressed");
        console.log('Button "GitHubRepo" pressed!');
        openRepo();
    })
})

function openRepo() {
    window.open("https://github.com/vandrocb");
}