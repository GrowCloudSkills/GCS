import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent, b as addAttribute } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pagefind-container" data-astro-cid-otpdt6jm> <div class="search-box" data-astro-cid-otpdt6jm> <input type="text" id="search-input" placeholder="🔍 Search posts..." class="search-input" aria-label="Search posts" data-astro-cid-otpdt6jm> </div> <div id="search-results" class="search-results hidden" data-astro-cid-otpdt6jm></div> </div>  `;
}, "/workspaces/GCS/src/components/Search.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = (await getCollection("posts", ({ data }) => !data.draft)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()).slice(0, 5);
  const formatShort = (date) => date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const readMinutes = (body) => Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 200));
  const depth = (mins) => mins >= 18 ? { label: "Deep", bars: "\u25B0\u25B0\u25B0", cls: "d3" } : mins >= 9 ? { label: "Applied", bars: "\u25B0\u25B0\u25B1", cls: "d2" } : { label: "Foundational", bars: "\u25B0\u25B1\u25B1", cls: "d1" };
  const recentPosts = allPosts.slice(0, 5);
  const cardData = (post) => {
    const mins = readMinutes(post.body);
    return { mins, tier: depth(mins) };
  };
  const allTags = [...new Set(allPosts.flatMap((post) => post.data.tags || []))];
  const modules = [
    { name: "Core HR", icon: "\u{1F465}", color: "blue" },
    { name: "Payroll", icon: "\u{1F4B0}", color: "teal" },
    { name: "Time & Labor", icon: "\u23F1\uFE0F", color: "blue" },
    { name: "Absence Mgmt", icon: "\u{1F4C5}", color: "teal" },
    { name: "Benefits", icon: "\u{1F3E5}", color: "blue" },
    { name: "Recruiting", icon: "\u{1F4CB}", color: "teal" }
  ];
  const paths = [
    {
      title: "Technical",
      icon: "\u{1F4BB}",
      description: "Fast Formulas, SQL, BIP, HDL, integration patterns",
      href: "/technical",
      color: "primary"
    },
    {
      title: "Functional",
      icon: "\u2699\uFE0F",
      description: "Configuration, setup, best practices across modules",
      href: "/functional",
      color: "accent"
    },
    {
      title: "Trainings",
      icon: "\u{1F4DA}",
      description: "Step-by-step guides, tutorials, skill development",
      href: "/trainings",
      color: "accent"
    }
  ];
  const author = {
    name: "Vaibhav Chavan",
    bio: "Oracle Fusion HCM Specialist and Solutions Consultant",
    image: "/images/authors/vaibhav-chavan.jpg"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "GrowCloudSkills - Oracle Fusion HCM Knowledge Hub", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hp" data-astro-cid-j7pv25f6> <!-- ══════════ HERO BAND ══════════ --> <section class="hp-shell" data-astro-cid-j7pv25f6> <div class="hero-band" data-astro-cid-j7pv25f6> <div class="hero-grid" data-astro-cid-j7pv25f6> <div class="hero-content" data-astro-cid-j7pv25f6> <div class="hero-eyebrow" data-astro-cid-j7pv25f6>Oracle Fusion HCM Cloud</div> <h1 data-astro-cid-j7pv25f6>Master Enterprise <span class="accent" data-astro-cid-j7pv25f6>HCM Implementation</span></h1> <p class="hero-lead" data-astro-cid-j7pv25f6>
Deep technical expertise and functional guidance for Oracle Fusion HCM. From Fast Formulas to multi-country architectures, learn production-ready solutions from real implementations.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a href="#learning-paths" class="btn btn--primary" data-astro-cid-j7pv25f6>Explore Learning Paths</a> <a href="/technical" class="btn btn--secondary" data-astro-cid-j7pv25f6>Browse Articles</a> </div> </div> <div class="hero-visual" data-astro-cid-j7pv25f6> <div class="ecosystem" data-astro-cid-j7pv25f6> <div class="core" data-astro-cid-j7pv25f6> <div class="core-circle" data-astro-cid-j7pv25f6>HCM Cloud</div> <div class="module module-1" data-astro-cid-j7pv25f6>Core HR</div> <div class="module module-2" data-astro-cid-j7pv25f6>Payroll</div> <div class="module module-3" data-astro-cid-j7pv25f6>Time & Labor</div> <div class="module module-6" data-astro-cid-j7pv25f6>Absence</div> <div class="module module-5" data-astro-cid-j7pv25f6>Recruiting</div> <div class="module module-4" data-astro-cid-j7pv25f6>Benefits</div> </div> </div> </div> </div> </div> </section> <!-- ══════════ MAIN WRAPPER (Content + Sidebar) ══════════ --> <section class="hp-shell main-wrapper" data-astro-cid-j7pv25f6> <!-- LEFT: Main Content --> <main class="main-content" data-astro-cid-j7pv25f6> <!-- ══════════ WHAT IS ORACLE FUSION HCM ══════════ --> <section class="section-compact section-what" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="section-kicker" data-astro-cid-j7pv25f6>Overview</div> <h2 data-astro-cid-j7pv25f6>What is Oracle Fusion HCM Cloud?</h2> <p class="section-lead" data-astro-cid-j7pv25f6>
Enterprise human capital management system powering global organizations.
</p> </div> <div class="capabilities-compact" data-astro-cid-j7pv25f6> <div class="capability-compact" data-astro-cid-j7pv25f6> <span class="cap-icon" data-astro-cid-j7pv25f6>🌍</span> <h3 data-astro-cid-j7pv25f6>Global Scalability</h3> <p data-astro-cid-j7pv25f6>Multi-country, multi-currency implementations with localized compliance</p> </div> <div class="capability-compact" data-astro-cid-j7pv25f6> <span class="cap-icon" data-astro-cid-j7pv25f6>🔧</span> <h3 data-astro-cid-j7pv25f6>Deep Configuration</h3> <p data-astro-cid-j7pv25f6>Flexible architecture with Fast Formulas, HDL, and business rules engine</p> </div> <div class="capability-compact" data-astro-cid-j7pv25f6> <span class="cap-icon" data-astro-cid-j7pv25f6>📊</span> <h3 data-astro-cid-j7pv25f6>Real-time Analytics</h3> <p data-astro-cid-j7pv25f6>OTBI reporting, Redwood UI dashboards, and integrated BI</p> </div> <div class="capability-compact" data-astro-cid-j7pv25f6> <span class="cap-icon" data-astro-cid-j7pv25f6>🔗</span> <h3 data-astro-cid-j7pv25f6>Enterprise Integration</h3> <p data-astro-cid-j7pv25f6>REST APIs, HCM Data Loader, and integration frameworks</p> </div> </div> <div class="modules-grid" data-astro-cid-j7pv25f6> ${modules.map((mod) => renderTemplate`<div${addAttribute(`module-card module-card--${mod.color}`, "class")} data-astro-cid-j7pv25f6> <span class="mod-icon" data-astro-cid-j7pv25f6>${mod.icon}</span> <h4 data-astro-cid-j7pv25f6>${mod.name}</h4> </div>`)} </div> </section> <!-- ══════════ LEARNING PATHS ══════════ --> <section class="section-compact section-paths" id="learning-paths" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="section-kicker" data-astro-cid-j7pv25f6>Three Ways to Learn</div> <h2 data-astro-cid-j7pv25f6>Choose Your Learning Path</h2> </div> <div class="paths-grid-compact" data-astro-cid-j7pv25f6> ${paths.map((path) => renderTemplate`<a${addAttribute(path.href, "href")}${addAttribute(`path-card-compact path-card--${path.color}`, "class")} data-astro-cid-j7pv25f6> <div class="path-icon" data-astro-cid-j7pv25f6>${path.icon}</div> <h3 data-astro-cid-j7pv25f6>${path.title}</h3> <p data-astro-cid-j7pv25f6>${path.description}</p> <span class="path-arrow" data-astro-cid-j7pv25f6>Explore →</span> </a>`)} </div> </section> <!-- ══════════ LATEST ARTICLES ══════════ --> <section class="section-compact section-articles" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <div class="section-kicker" data-astro-cid-j7pv25f6>Knowledge Base</div> <h2 data-astro-cid-j7pv25f6>Latest Articles</h2> <p class="section-lead" data-astro-cid-j7pv25f6>${allPosts.length} in-depth guides available</p> </div> ${allPosts.length === 0 ? renderTemplate`<p class="empty" data-astro-cid-j7pv25f6>No articles published yet. Check back soon!</p>` : renderTemplate`<div class="articles-list-compact" data-astro-cid-j7pv25f6> ${allPosts.slice(0, 8).map((post) => {
    const d = cardData(post);
    return renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="article-item-compact" data-astro-cid-j7pv25f6> <div class="article-item-header" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${post.data.title}</h3> </div> <div class="article-item-meta" data-astro-cid-j7pv25f6> <span class="meta-item" data-astro-cid-j7pv25f6>${d.mins} min</span> <span${addAttribute(`meta-item tier ${d.tier.cls}`, "class")} data-astro-cid-j7pv25f6>${d.tier.label}</span> <span class="meta-item" data-astro-cid-j7pv25f6>${formatShort(post.data.pubDate)}</span> </div> </a>`;
  })} </div>`} <div class="view-all-compact" data-astro-cid-j7pv25f6> <a href="/technical" class="btn btn--primary" data-astro-cid-j7pv25f6>View All Articles</a> </div> </section> </main> <!-- RIGHT: SIDEBAR --> <aside class="sidebar" data-astro-cid-j7pv25f6> <!-- SEARCH --> <div class="sidebar-box" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Search", $$Search, { "data-astro-cid-j7pv25f6": true })} </div> <!-- LATEST POSTS --> <div class="sidebar-box" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Latest Posts</h3> <div class="recent-posts" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="recent-post-item" data-astro-cid-j7pv25f6> <div class="recent-post-title" data-astro-cid-j7pv25f6>${post.data.title}</div> <div class="recent-post-date" data-astro-cid-j7pv25f6>${formatShort(post.data.pubDate)}</div> </a>`)} </div> </div> <!-- AUTHOR BIO --> <div class="sidebar-box author-box" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Author</h3> <div class="author-avatar" data-astro-cid-j7pv25f6> <img${addAttribute(author.image, "src")}${addAttribute(author.name, "alt")} onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%230F3B66%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2250%22 fill=%22white%22%3EVC%3C/text%3E%3C/svg%3E'" data-astro-cid-j7pv25f6> </div> <h4 data-astro-cid-j7pv25f6>${author.name}</h4> <p class="author-bio" data-astro-cid-j7pv25f6>${author.bio}</p> <a href="/about" class="author-link" data-astro-cid-j7pv25f6>View Profile →</a> </div> <!-- TAGS --> ${allTags.length > 0 && renderTemplate`<div class="sidebar-box" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Topics</h3> <div class="tags-cloud" data-astro-cid-j7pv25f6> ${allTags.slice(0, 12).map((tag) => renderTemplate`<span class="tag" data-astro-cid-j7pv25f6>${tag}</span>`)} </div> </div>`} <!-- DIGITAL PRODUCTS --> <div class="sidebar-box products-box" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Resources</h3> <div class="products-list" data-astro-cid-j7pv25f6> <div class="product-item" data-astro-cid-j7pv25f6> <span class="product-icon" data-astro-cid-j7pv25f6>📚</span> <div class="product-name" data-astro-cid-j7pv25f6>Implementation Guide</div> </div> <div class="product-item" data-astro-cid-j7pv25f6> <span class="product-icon" data-astro-cid-j7pv25f6>⚡</span> <div class="product-name" data-astro-cid-j7pv25f6>Fast Formula Mastery</div> </div> <div class="product-item" data-astro-cid-j7pv25f6> <span class="product-icon" data-astro-cid-j7pv25f6>📊</span> <div class="product-name" data-astro-cid-j7pv25f6>Config Checklist</div> </div> </div> </div> </aside> </section> <!-- ══════════ CTA SECTION ══════════ --> <section class="hp-shell section-cta" data-astro-cid-j7pv25f6> <div class="cta-box" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Ready to deepen your Oracle Fusion HCM expertise?</h2> <p data-astro-cid-j7pv25f6>Start with Technical deep-dives, Functional configurations, or guided Trainings.</p> <div class="cta-buttons" data-astro-cid-j7pv25f6> <a href="/technical" class="btn btn--primary" data-astro-cid-j7pv25f6>Technical Articles</a> <a href="/functional" class="btn btn--secondary" data-astro-cid-j7pv25f6>Functional Guides</a> <a href="/trainings" class="btn btn--secondary" data-astro-cid-j7pv25f6>Trainings</a> </div> </div> </section> </div> ` })} `;
}, "/workspaces/GCS/src/pages/index.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
