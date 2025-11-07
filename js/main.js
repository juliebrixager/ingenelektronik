document.querySelector("#hotspotcomputer").addEventListener("click", updateInfoboxmac);

function updateInfoboxmac() {
  console.log("updateInfoboxcmac");
  document.querySelector("#efficiency").textContent = "Her er informationer om computer";
  document.querySelector("#requirement").textContent = "Her er flere informationer om computer";
}

document.querySelector("#hotspottelefon").addEventListener("click", updateInfoboxtelefon);

function updateInfoboxtelefon() {
  console.log("updateInfoboxcmac");
  document.querySelector("#efficiency").textContent = "Her er informationer om telefon";
  document.querySelector("#requirement").textContent = "Her er flere informationer om telefon";
}

document.querySelector("#hotspotcomputer-2").addEventListener("click", updateInfoboxfjernsyn);

function updateInfoboxfjernsyn() {
  console.log("updateInfoboxcmac");
  document.querySelector("#efficiency").textContent = "Her er informationer om fjernsynet";
  document.querySelector("#requirement").textContent = "Her er flere informationer om fjernsynet";
}
