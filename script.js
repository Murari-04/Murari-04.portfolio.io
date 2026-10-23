// Personalize this address before publishing. The contact form uses the visitor's email app (no backend required).
const CONTACT_EMAIL = "lingamurari02@gmail.com";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Reveal sections as they enter the viewport, with a graceful fallback.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Project filters.
const filterButtons = document.querySelectorAll(".filter-chip");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((chip) => chip.classList.toggle("active", chip === button));
    projectCards.forEach((card) => {
      const categories = (card.dataset.category || "").split(" ");
      card.classList.toggle("hidden", filter !== "all" && !categories.includes(filter));
    });
  });
});

// Contact modal and email form.
const contactModal = document.querySelector("#contact-modal");
const openContact = document.querySelector("#open-contact");
const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");
let lastFocusedElement = null;
function showContactModal() {
  lastFocusedElement = document.activeElement;
  contactModal.classList.add("open");
  contactModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  contactModal.querySelector("input")?.focus();
}
function hideContactModal() {
  contactModal.classList.remove("open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  lastFocusedElement?.focus();
}
openContact?.addEventListener("click", showContactModal);
contactModal?.querySelectorAll("[data-close-contact]").forEach((element) => element.addEventListener("click", hideContactModal));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactModal?.classList.contains("open")) hideContactModal();
});
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (CONTACT_EMAIL === "YOUR_EMAIL@example.com") {
    feedback.textContent = "Please configure your contact email in script.js.";
    return;
  }
  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}
Email: ${email}

Message:
${message}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  feedback.textContent = "Your email app should open with the message ready to send.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
