document.getElementById("elkuld").addEventListener("click", () => {
    const tipus = document.getElementById("valasz").value;    
    const darab = document.getElementById("darab").value;
    if (tipus === '' || darab === '0'){
        alert("Válasszon ki egy pizzát a listából és írja be a darabszámot!");
    };

    const valasztott = document.querySelectorAll(":checked");
    let ar = 0;
    valasztott.forEach((valaszt) => {
        ar += valaszt.value;
    });

    const szam = Math.floor(Math.random() * 100)  + 1;
    document.getElementById("order").innerText = szam;
    document.getElementById("total").innerText = tipus * darab + ar  + " Ft";
    document.getElementById("alert").style.display = "block";
})