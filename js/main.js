const hotspotcomputer = document.querySelector("#hotspotcomputer");

if (hotspotcomputer) {
  document.querySelector("#hotspotcomputer").addEventListener("click", updateInfoboxmac);

  function updateInfoboxmac() {
    console.log("updateInfoboxcmac");
    document.querySelector("#efficiency").textContent = "Ingen computer? Ingen panik – sådan overlever du skole og arbejde analogt:";
    document.querySelector("#requirement").textContent =
      "Når computeren giver op, bliver du bare en moderne tids stenalderhelt. Find en blyant, et stykke papir – og bum, du er klar til at arbejde som en menneskelig printer. På jobbet kan du “sende mails” ved at uddele håndskrevne sedler. Ingen ved, hvor de skal gemme dem, så halvdelen af deres problemer forsvinder helt af sig selv. I skolen afleverer du bare opgaverne fysisk – læreren bliver overrasket, men hey, det virker! Til møder laver du grafer på karton og vender dem dramatisk som en tv-vært fra 90’erne. Folk elsker det.";
  }

  document.querySelector("#hotspottelefon").addEventListener("click", updateInfoboxtelefon);

  function updateInfoboxtelefon() {
    console.log("updateInfoboxcmac");
    document.querySelector("#efficiency").textContent = "Lange udsigter til at få en ny telefon? Frygt ej – sådan træner du din brevdue:";
    document.querySelector("#requirement").textContent =
      "Det eneste du skal bruge er en due, lidt tålmodighed og en håndfuld solsikkekerner (gerne premium, så den ved, du mener det alvorligt). Start med at forklare duen, at den nu er din personlige kundeservice-hotline. Den forstår måske ikke ordene, men den kan mærke engagementet. Skriv dine beskeder på små papirlapper, rul dem sammen, og giv duen et kærligt “flyv-nu-for-pokker”-blik. Hvis duen returnerer hurtigt, er det en succes. Hvis den bliver væk i tre dage, har du sandsynligvis sendt den til den forkerte adresse eller til en god festival et sted i provinsen. Men hey – uanset hvad, har du nu en kommunikationsløsning, der aldrig løber tør for strøm og kun kræver en smule korn.";
  }

  document.querySelector("#hotspotcomputer-2").addEventListener("click", updateInfoboxfjernsyn);

  function updateInfoboxfjernsyn() {
    console.log("updateInfoboxcmac");
    document.querySelector("#efficiency").textContent = "Lange udsigter til at få et fjernsyn? Det er nu tid til at genopdage den ædle biograf-survival-strategi! ";
    document.querySelector("#requirement").textContent =
      "📅 Her er et udvalg fra Biografklub Danmarks sæsonprogram for 2025/26 – perfekte kandider til at erstatte dine tabte tv-aftener: biografklubdanmark.dk, Rejseholdet – Det Første Mord	4. september 2025, A Big Bold Beautiful Journey	2. oktober 2025, Det Nye År	6. november 2025, I’m Still Here	4. december 2025, Begyndelser	15. januar 2026, Marty Supreme	19. februar 2026, De Forbandede År – Fredens Pris	19. marts 2026, Affektionsværdi	23. april 2026, Eleanors Sandhed	21. maj 2026, Vores Løfte	18. juni 2026 ";
  }
}

/*darkmode*/
const root = document.querySelector("html");
const btn = document.querySelector("#toggle");

function toggleDarkMode() {
  console.log("toogleDarkMode");
  root.classList.toggle("dark");
}

btn.addEventListener("click", toggleDarkMode);
