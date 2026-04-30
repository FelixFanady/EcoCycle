/* ============================================
   COMPONENTS/FOOTER.JS - Footer Component Logic
   ============================================ */

class FooterComponent {
  constructor() {
    this.footer = null;
    this.init();
  }

  async init() {
    await this.loadFooter();
    this.setupEventListeners();
  }

  async loadFooter() {
    const footerRoot = document.getElementById("footer-root");
    if (!footerRoot) return;

    try {
      const response = await fetch("/components/footer.html");
      const html = await response.text();
      footerRoot.innerHTML = html;
      this.footer = footerRoot.querySelector(".site-footer");
    } catch (error) {
      console.error("Failed to load footer:", error);
      footerRoot.innerHTML =
        '<p class="component-error">Failed to load footer.</p>';
    }
  }

  setupEventListeners() {
    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        this.handleNewsletterSubmit(e);
      });
    }

    // Social links
    const socialLinks = this.footer?.querySelectorAll("[data-social]") || [];
    socialLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Social links open in new tab
        e.target.setAttribute("target", "_blank");
        e.target.setAttribute("rel", "noopener noreferrer");
      });
    });
  }

  handleNewsletterSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const emailInput = form.querySelector('input[type="email"]');

    if (!emailInput) return;

    const email = emailInput.value.trim();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Show success message
    const successMsg = document.createElement("p");
    successMsg.className = "text-green font-semibold mt-2";
    successMsg.textContent = "✓ Thank you for subscribing!";
    form.appendChild(successMsg);

    // Reset form and remove message after 3 seconds
    form.reset();
    setTimeout(() => {
      successMsg.remove();
    }, 3000);

    // Here you would send to backend:
    // await fetch('/api/newsletter', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email })
    // });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new FooterComponent();
});
