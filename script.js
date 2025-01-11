// Uiteraard kun je de huidige code van de site hergebruiken
// Bij een mouse-over dient de “Verstuur” knop te veranderen naar de kleur groen [check]
// De box verschijnt op een pagina middels een animatie. Dit zijn de voorwaarden:
// - Als ik als bezoeker 50% naar beneden heb gescrollt, [check]  slide de box subtiel in beeld[check].
// - Daarbij dient de box “sticky” aan de onderzijde te plakken, maar altijd boven de donkerblauwe footer te blijven. [check]
// - Als ik weer boven de 50% scroll op de pagina kom, dient de box weer te verdwijnen [check]
// Na het invoeren van een correct emailadres komt er een bedankmelding “Bedankt voor het aanmelden, je ontvangt binnenkort de eerste nieuwsbrief.”
// Om ruimte te besparen, kunnen de social icoontjes op mobiel achterwege gelaten worden. Op desktop niet, daar moeten ze bij een klik in een nieuw scherm openen.

function detectScrollHalfway() {
  // Voeg een event listener toe voor het scrollen van de pagina
  window.addEventListener("scroll", () => {
    // Verkrijg de huidige scrollpositie (de afstand vanaf de bovenkant van de pagina)
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Verkrijg de hoogte van het viewport (het zichtbare deel van de pagina)
    const windowHeight = window.innerHeight;

    // Verkrijg de totale hoogte van het document (de hele pagina, inclusief de niet-zichtbare delen)
    const documentHeight = document.documentElement.scrollHeight;

    // Bereken het percentage van de pagina dat is gescrold
    const scrolledPercentage =
      (scrollTop / (documentHeight - windowHeight)) * 100;

    // Verkrijg het element met de klasse "news-box-section"
    const newsBoxElement = document.getElementsByClassName("news-box-section");

    // Als de gebruiker meer dan of gelijk aan 50% van de pagina heeft gescrold
    if (scrolledPercentage >= 50) {
      // Voeg de klasse "news-box-article-animating" toe om de animatie te triggeren
      newsBoxElement[0].classList.add("news-box-article-animating");
    } else {
      // Verwijder de animatieklasse als de gebruiker minder dan 50% heeft gescrold
      newsBoxElement[0].classList.remove("news-box-article-animating");
    }
  });
}

function sendNewsLetter() {
  // Verkrijg het e-mailinvoerveld en de notificatiebox
  const emailInput = document.getElementById("news-box-email-inptut-1");
  const messageBox = document.getElementById("news-box-notificaton");

  // Verkrijg de waarde van het invoerveld (wat de gebruiker heeft ingevoerd)
  const emailValue = emailInput.value;

  // Reguliere expressie voor het controleren van een geldig e-mailadres
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  // Als het e-mailadres niet geldig is, toon dan een foutmelding
  if (!emailPattern.test(emailValue)) {
    messageBox.classList.remove("success-mail"); // Verwijder eventuele vorige successtijl
    messageBox.classList.add("error-mail"); // Voeg foutstijl toe
    messageBox.innerText = "Voer een geldig e-mailadres in"; // Foutmelding
  } else {
    messageBox.classList.remove("error-mail"); // Verwijder foutstijl
    messageBox.classList.add("success-mail"); // Voeg successtijl toeF
    // Als het e-mailadres geldig is, toon dan een succesbericht
    messageBox.innerText =
      "Bedankt voor het aanmelden, je ontvangt binnenkort de eerste nieuwsbrief.";
  }

  // Maak de notificatiebox zichtbaar
  messageBox.style.display = "block";

  // Verberg de notificatiebox na 3 seconden
  setTimeout(() => {
    messageBox.innerText = ""; // Verwijder de tekst
    messageBox.style.display = "none"; // Verberg de notificatiebox
  }, 10000);
}

detectScrollHalfway();
