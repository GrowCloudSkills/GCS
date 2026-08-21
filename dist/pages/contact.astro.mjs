import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact Us - GrowCloudSkills", "description": "Get in touch with GrowCloudSkills - Oracle Fusion HCM expertise", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contact-wrapper" data-astro-cid-uw5kdbxl> <!-- CONTACT HEADER --> <section class="contact-header" data-astro-cid-uw5kdbxl> <h1 data-astro-cid-uw5kdbxl>Get in Touch</h1> <p class="subtitle" data-astro-cid-uw5kdbxl>Have questions about Oracle Fusion HCM? We'd love to hear from you!</p> </section> <!-- CONTACT CONTENT --> <div class="contact-grid" data-astro-cid-uw5kdbxl> <!-- LEFT: FORM --> <section class="contact-form-section" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Send us a Message</h2> <form class="contact-form" id="contactForm" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl>Full Name *</label> <input type="text" id="name" name="name" required placeholder="Your full name" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl>Email Address *</label> <input type="email" id="email" name="email" required placeholder="your@email.com" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="subject" data-astro-cid-uw5kdbxl>Subject *</label> <input type="text" id="subject" name="subject" required placeholder="What is this about?" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="category" data-astro-cid-uw5kdbxl>Category</label> <select id="category" name="category" data-astro-cid-uw5kdbxl> <option value="" data-astro-cid-uw5kdbxl>Select a category</option> <option value="technical" data-astro-cid-uw5kdbxl>Technical Question</option> <option value="functional" data-astro-cid-uw5kdbxl>Functional Guidance</option> <option value="training" data-astro-cid-uw5kdbxl>Training Inquiry</option> <option value="partnership" data-astro-cid-uw5kdbxl>Partnership/Collaboration</option> <option value="feedback" data-astro-cid-uw5kdbxl>Feedback</option> <option value="other" data-astro-cid-uw5kdbxl>Other</option> </select> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="message" data-astro-cid-uw5kdbxl>Message *</label> <textarea id="message" name="message" rows="6" required placeholder="Tell us more about your inquiry..." data-astro-cid-uw5kdbxl></textarea> </div> <button type="submit" class="submit-btn" data-astro-cid-uw5kdbxl>Send Message</button> <p class="form-note" data-astro-cid-uw5kdbxl>We typically respond within 24-48 hours.</p> </form> </section> <!-- RIGHT: CONTACT INFO --> <section class="contact-info-section" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Contact Information</h2> <div class="contact-card" data-astro-cid-uw5kdbxl> <div class="card-icon" data-astro-cid-uw5kdbxl>📧</div> <div class="card-content" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Email</h3> <p data-astro-cid-uw5kdbxl>For general inquiries and questions:</p> <a href="mailto:info.growcloudskills@gmail.com" class="contact-link" data-astro-cid-uw5kdbxl>
info.growcloudskills@gmail.com
</a> </div> </div> <div class="contact-card" data-astro-cid-uw5kdbxl> <div class="card-icon" data-astro-cid-uw5kdbxl>🌐</div> <div class="card-content" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Website</h3> <p data-astro-cid-uw5kdbxl>Visit our knowledge hub:</p> <a href="https://www.growcloudskills.com" class="contact-link" target="_blank" data-astro-cid-uw5kdbxl>
GrowCloudSkills.com
</a> </div> </div> <div class="contact-card" data-astro-cid-uw5kdbxl> <div class="card-icon" data-astro-cid-uw5kdbxl>💼</div> <div class="card-content" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>LinkedIn</h3> <p data-astro-cid-uw5kdbxl>Connect with us on LinkedIn:</p> <a href="https://linkedin.com/company/growcloudskills" class="contact-link" target="_blank" data-astro-cid-uw5kdbxl>
GrowCloudSkills
</a> </div> </div> <div class="contact-card" data-astro-cid-uw5kdbxl> <div class="card-icon" data-astro-cid-uw5kdbxl>⏰</div> <div class="card-content" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Response Time</h3> <p data-astro-cid-uw5kdbxl>We aim to respond to all inquiries within:</p> <p class="highlight" data-astro-cid-uw5kdbxl>24-48 hours</p> </div> </div> <div class="expertise-box" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>Areas of Expertise</h3> <ul class="expertise-list" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl>Oracle Fusion HCM Technical</li> <li data-astro-cid-uw5kdbxl>Fast Formulas & HDL</li> <li data-astro-cid-uw5kdbxl>Configuration & Setup</li> <li data-astro-cid-uw5kdbxl>Integration Patterns</li> <li data-astro-cid-uw5kdbxl>Implementation Strategy</li> <li data-astro-cid-uw5kdbxl>Training & Skill Development</li> </ul> </div> </section> </div> <!-- FAQ SECTION --> <section class="faq-section" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Frequently Asked Questions</h2> <div class="faq-grid" data-astro-cid-uw5kdbxl> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ What is GrowCloudSkills?</h3> <p data-astro-cid-uw5kdbxl>
GrowCloudSkills is an Oracle Fusion HCM expert knowledge hub providing deep technical guides, functional expertise, and real-world implementation insights for professionals.
</p> </div> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ Do you offer consulting services?</h3> <p data-astro-cid-uw5kdbxl>
Currently, we focus on providing knowledge through our blog and guides. For professional consulting services, please reach out and we can discuss possibilities.
</p> </div> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ Can I contribute articles?</h3> <p data-astro-cid-uw5kdbxl>
We're always interested in collaboration and guest contributions from experienced Oracle Fusion HCM professionals. Please contact us to discuss this. mail us at info.growcloudskills@gmail.com
</p> </div> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ Are the resources free?</h3> <p data-astro-cid-uw5kdbxl>
Yes! All our blog posts, guides, and educational resources are provided free to help professionals master Oracle Fusion HCM solutions.
</p> </div> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ How often is content updated?</h3> <p data-astro-cid-uw5kdbxl>
We regularly add new articles and guides based on real-world implementations and community feedback. Check back often for fresh content.
</p> </div> <div class="faq-item" data-astro-cid-uw5kdbxl> <h3 data-astro-cid-uw5kdbxl>❓ Can I share your content?</h3> <p data-astro-cid-uw5kdbxl>
You're welcome to share our content with proper attribution. However, reproduction of large portions requires permission. Contact us for details.
</p> </div> </div> </section> <!-- CTA SECTION --> <section class="contact-cta" data-astro-cid-uw5kdbxl> <h2 data-astro-cid-uw5kdbxl>Ready to Master Oracle Fusion HCM?</h2> <p data-astro-cid-uw5kdbxl>Explore our comprehensive guides and start your learning journey today.</p> <a href="/technical" class="cta-button" data-astro-cid-uw5kdbxl>Browse Articles</a> </section> </div>   ` })}`;
}, "/workspaces/GCS/src/pages/contact.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
