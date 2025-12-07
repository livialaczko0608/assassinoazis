
const form = document.getElementById("rajongoi-urlap");
const hibaElem = document.getElementById("hiba");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    hibaElem.textContent = ""; 

    const nev = form.querySelector('input[type="text"]').value.trim();
    const eletkor = parseInt(form.querySelector('input[type="number"]').value);
    const nem = form.querySelector('input[name="nem"]:checked');
    const kedvenc = document.getElementById("kedvenc").value;
    const fohos = document.getElementById("fohos").value.trim();
    const platform = document.getElementById("platform").value;

    let hibak = [];

    if (!nev) hibak.push("A neved megadása kötelező.");
    if (isNaN(eletkor) || eletkor < 1 || eletkor > 100) hibak.push("Az életkor 1 és 100 között lehet.");
    if (!nem) hibak.push("Válaszd ki a nemed!");
    if (!kedvenc) hibak.push("Válaszd ki a kedvenc AC játékodat!");
    if (!fohos) hibak.push("Add meg a kedvenc főhősöd nevét!");
    if (!platform) hibak.push("Válaszd ki a platformodat!");

    
    if (hibak.length > 0) {
        hibaElem.innerHTML = hibak.join("<br>");
        return; 
    }

    alert("Sikeres kitöltés! Köszönjük a válaszodat.");
    form.reset(); 
});