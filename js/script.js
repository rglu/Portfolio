const navTitle = document.querySelector(".nav__title");

// TITEL SICHTBAR

document.querySelector(".projects__zeitung").addEventListener("mouseover", ()=>{navTitle.textContent="EIN ALLTÄGLICHER BEGLEITER"})

document.querySelector(".projects__fontdesign").addEventListener("mouseover", ()=>{navTitle.textContent="KONSEQUENT KONSTRUIERT"})

document.querySelector(".projects__3d").addEventListener("mouseover", ()=>{navTitle.textContent="FRAGMENTE EINES BUCHSTABENS"})

document.querySelector(".projects__bwm").addEventListener("mouseover", ()=>{navTitle.textContent="WHERE PRECISION AND PASSION MEET"})

document.querySelector(".projects__illustration").addEventListener("mouseover", ()=>{navTitle.textContent="TECHNISCHE NACHBILDUNG EINER KASSETTE"})

document.querySelector(".projects__london").addEventListener("mouseover", ()=>{navTitle.textContent="SILENT HOURS"})

document.querySelector(".projects__musicposter").addEventListener("mouseover", ()=>{navTitle.textContent="EIN MOMENT, DER BLEIBT"})

document.querySelector(".projects__neuroposter").addEventListener("mouseover", ()=>{navTitle.textContent="NEURODERMITIS KANN MAN NICHT WEGKRATZEN"})

document.querySelector(".projects__neurophoto").addEventListener("mouseover", ()=>{navTitle.textContent="NICHTS, WOFÜR MAN SICH SCHÄMEN MUSS"})

document.querySelector(".projects__paris").addEventListener("mouseover", ()=>{navTitle.textContent="GAGNER EN HAUTEUR"})

document.querySelector(".projects__sketches").addEventListener("mouseover", ()=>{navTitle.textContent="SKIZZEN"})

document.querySelector(".projects__luanarosenberg").addEventListener("mouseover", ()=>{navTitle.textContent="ABOUT ME"})

// QBERT

document.querySelector(".projects__qbert1").addEventListener("mouseover", ()=>{navTitle.textContent="Hallo"})

document.querySelector(".projects__qbert2").addEventListener("mouseover", ()=>{navTitle.textContent="Hey"})

document.querySelector(".projects__qbert3").addEventListener("mouseover", ()=>{navTitle.textContent="Hi"})

// TITEL NICHT SICHTBAR

document.querySelectorAll(".projects").forEach((bild)=>{bild.addEventListener("mouseout", ()=>{navTitle.textContent=" "})})

// TEST

document.body.onload="document.querySelector('#inputfield').setfocus()"