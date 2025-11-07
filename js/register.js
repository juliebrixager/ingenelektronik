console.log("Register.js loaded");
const form = document.querySelector("#webform");

const fornavnOutput = document.querySelector("#fornavn_output");
const efternavnOutput = document.querySelector("#efternavn_output");
const emailOutput = document.querySelector("#email_output");
const telefonOutput = document.querySelector("#telefon_output");

const kfornavnOutput = document.querySelector("#kfornavn_output");
const kefternavnOutput = document.querySelector("#kefternavn_output");
const kemailOutput = document.querySelector("#kemail_output");
const ktelefonOutput = document.querySelector("#ktelefon_output");

const elektronikOutput = document.querySelector("#elektronik_output");
//const betingelserOutput = document.querySelector("#betingelser_output");

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen

  const Formdata = new FormData(form);

  // 2. Vis værdierne i de rigtige output-felter

  fornavnOutput.textContent = Formdata.get("first_name");
  efternavnOutput.textContent = Formdata.get("last_name");
  emailOutput.textContent = Formdata.get("email");
  telefonOutput.textContent = Formdata.get("telefon");

  kfornavnOutput.textContent = Formdata.get("kfirst_name");
  kefternavnOutput.textContent = Formdata.get("klast_name");
  kemailOutput.textContent = Formdata.get("kemail");
  ktelefonOutput.textContent = Formdata.get("ktelefon");

  elektronikOutput.textContent = Formdata.getAll("elektronik").join(", ");
  //betingelserOutput.textContent = Formdata.get("betingelser_output");

  form.reset();
}

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
