function eredmenySzamito() {
    const pontok = {
        "Ezio": 0,
        "Arno": 0,
        "Connor": 0,
        "Bayek": 0,
        "Kassandra": 0
    };

    for (let i = 1; i <= 5; i++) {
        const valasztas = document.querySelector(`input[name="q${i}"]:checked`);
        if (!valasztas) {
            document.getElementById("eredmeny").innerHTML = "Kérlek, válaszolj minden kérdésre!";
            document.getElementById("eredmeny").style.color = "red";
            return;
        }
        pontok[valasztas.value]++;
    }

    let maxPont = 0;
    let karakter = "";
    for (const k in pontok) {
        if (pontok[k] > maxPont) {
            maxPont = pontok[k];
            karakter = k;
        }
    }

    let szoveg = "";
    switch(karakter) {
        case "Ezio":
            szoveg = "Te Ezio Auditore vagy!";
            break;
        case "Arno":
            szoveg = "Te Arno Dorian!";
            break;
        case "Connor":
            szoveg = "Te Connor Kenway vagy!";
            break;
        case "Bayek":
            szoveg = "Te Bayek vagy";
            break;
        case "Kassandra":
            szoveg = "Te Kassandra vagy!";
            break;
    }

    document.getElementById("eredmeny").innerHTML = szoveg;
    document.getElementById("eredmeny").style.color = "white";
}