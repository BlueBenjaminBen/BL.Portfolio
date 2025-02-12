async function loadComponent(id, file){
    try{
        const response = await fetch(file);
        const content = await response.text();
        document.getElementById(id).innerHTML = content;
    }
    catch(error){
        console.error("Error loading ${file}: ", error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar", "../../components/navbar.html");
    loadComponent("footer", "../../components/footer.html");
});