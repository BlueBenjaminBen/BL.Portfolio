async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Check if the current page is the root or inside the HTML folder
// This will set the basePath based on whether we're at the root or inside a folder
let basePath = "/BL.Portfolio/";
 basePath = window.location.pathname.includes("/HTML/") ? "../HTML" : "build/HTML";

    loadComponent("navbar", basePath + "/components/navbar.html");
    loadComponent("footer", basePath + "/components/footer.html");
});
