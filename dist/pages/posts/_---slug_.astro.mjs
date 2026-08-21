import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as addAttribute, d as createAstro, r as renderComponent, F as Fragment, e as renderSlot } from '../../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C-yhFct8.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BsZmYumc.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$TrainingCTA = createComponent(($$result, $$props, $$slots) => {
  const EMAIL = "info.growclouskills@gmail.com";
  const MODULES = [
    "Fast Formula",
    "Absence",
    "Payroll",
    "OTL",
    "BI Publisher",
    "OTBI",
    "SQL",
    "OIC"
  ];
  return renderTemplate`${maybeRenderHead()}<aside class="tcta" aria-labelledby="tcta-heading" data-astro-cid-olh7ysqb> <div class="tcta-inner" data-astro-cid-olh7ysqb> <p class="tcta-flag" data-astro-cid-olh7ysqb>Training &amp; Support</p> <h2 id="tcta-heading" data-astro-cid-olh7ysqb>Stuck on something like this in your own instance?</h2> <p class="tcta-lead" data-astro-cid-olh7ysqb>
I am planning training and one-to-one support on Fast Formula, Absence, Time &amp; Labor,
      HDL, BI Publisher, OTBI, SQL and OIC — plus quarterly Oracle update impact reviews.
      Built from production rollouts, not courseware.
</p> <p class="tcta-sublabel" data-astro-cid-olh7ysqb>Key modules &amp; tools</p> <div class="tcta-row" data-astro-cid-olh7ysqb> <ul class="tcta-chips" data-astro-cid-olh7ysqb> ${MODULES.map((m) => renderTemplate`<li data-astro-cid-olh7ysqb>${m}</li>`)} </ul> <span class="tcta-div" aria-hidden="true" data-astro-cid-olh7ysqb></span> <a class="tcta-prep" href="/trainings#interview" data-astro-cid-olh7ysqb>Interview Prep</a> </div> <div class="tcta-actions" data-astro-cid-olh7ysqb> <a class="tcta-btn" href="/trainings" data-astro-cid-olh7ysqb>See what's covered <span aria-hidden="true" data-astro-cid-olh7ysqb>&#8594;</span></a> <a class="tcta-mail"${addAttribute(`mailto:${EMAIL}`, "href")} data-astro-cid-olh7ysqb> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-astro-cid-olh7ysqb> <rect x="2" y="4" width="20" height="16" rx="2" data-astro-cid-olh7ysqb></rect><path d="m2 7 10 6 10-6" data-astro-cid-olh7ysqb></path> </svg> <span data-astro-cid-olh7ysqb>${EMAIL}</span> </a> </div> </div> </aside> `;
}, "/workspaces/GCS/src/components/TrainingCTA.astro", void 0);

const $$Astro$1 = createAstro("https://www.growcloudskills.com");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { post } = Astro2.props;
  const { title, description, pubDate, updatedDate, tags, category } = post.data;
  const allPosts = (await getCollection("posts", ({ data }) => !data.draft)).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const recentPosts = allPosts.slice(0, 5);
  const allTags = [...new Set(allPosts.flatMap((post2) => post2.data.tags || []))];
  const formatDate = (date) => date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const formatShort = (date) => date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const tagColor = (tag) => {
    const t = tag.toLowerCase();
    if (t.includes("fast formula") || t.includes("technical")) return "blue";
    if (t.includes("core hr") || t.includes("configuration")) return "teal";
    if (t.includes("payroll") || t.includes("functional")) return "blue";
    if (t.includes("time") || t.includes("labor") || t.includes("integration")) return "teal";
    if (t.includes("benefit") || t.includes("absence")) return "blue";
    if (t.includes("advanced") || t.includes("intermediate") || t.includes("beginner")) return "teal";
    return t.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % 2 === 0 ? "blue" : "teal";
  };
  const getCategoryColor = (cat) => {
    if (!cat) return "blue";
    const c = cat.toLowerCase();
    if (c === "technical") return "blue";
    if (c === "functional") return "teal";
    if (c === "trainings") return "teal";
    return "blue";
  };
  const author = {
    name: "Vaibhav Chavan",
    bio: "Oracle Fusion HCM Solution Architect with 10+ years of implementation experience",
    image: "/images/authors/vaibhav-chavan.jpg"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description, "ogType": "article", "data-astro-cid-gjtny2mx": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="post-wrapper" data-astro-cid-gjtny2mx> <!-- MAIN CONTENT --> <article class="post" data-astro-cid-gjtny2mx> <!-- ════════ POST HEADER ════════ --> <header class="post-header prose-container" data-astro-cid-gjtny2mx> <div class="header-top" data-astro-cid-gjtny2mx> ${category && renderTemplate`<span${addAttribute(`category-badge category-${getCategoryColor(category)}`, "class")} data-astro-cid-gjtny2mx> ${category} </span>`} <time class="post-date"${addAttribute(pubDate.toISOString(), "datetime")} data-astro-cid-gjtny2mx> ${formatDate(pubDate)} </time> </div> <h1 class="post-title" data-astro-cid-gjtny2mx>${title}</h1> ${description && renderTemplate`<p class="post-lede" data-astro-cid-gjtny2mx>${description}</p>`} ${tags.length > 0 && renderTemplate`<div class="post-tags" data-astro-cid-gjtny2mx> ${tags.slice(0, 5).map((tag) => renderTemplate`<span${addAttribute(`tag tag-${tagColor(tag)}`, "class")} data-astro-cid-gjtny2mx>${tag}</span>`)} </div>`} <div class="post-meta" data-astro-cid-gjtny2mx> <span class="meta-item" data-astro-cid-gjtny2mx>Oracle Fusion HCM</span> ${updatedDate && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-gjtny2mx": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-separator" data-astro-cid-gjtny2mx>·</span> <span class="meta-item" data-astro-cid-gjtny2mx>Updated ${formatDate(updatedDate)}</span> ` })}`} </div> </header> <!-- ════════ POST BODY ════════ --> <div class="post-body prose-container" data-astro-cid-gjtny2mx> ${renderSlot($$result2, $$slots["default"])} </div> <!-- ════════ POST CTA ════════ --> <div class="prose-container" data-astro-cid-gjtny2mx> ${renderComponent($$result2, "TrainingCTA", $$TrainingCTA, { "data-astro-cid-gjtny2mx": true })} </div> <!-- ════════ POST FOOTER ════════ --> <footer class="post-footer prose-container" data-astro-cid-gjtny2mx> <a href="/" class="back-link" data-astro-cid-gjtny2mx>← Back to articles</a> </footer> </article> <!-- SIDEBAR --> <aside class="post-sidebar" data-astro-cid-gjtny2mx> <!-- SEARCH --> <div class="sidebar-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Search</h3> <form class="search-form" data-astro-cid-gjtny2mx> <input type="text" placeholder="Search articles..." name="q" data-astro-cid-gjtny2mx> <button type="submit" data-astro-cid-gjtny2mx>🔍</button> </form> </div> <!-- ARTICLE INFO --> <div class="sidebar-box info-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Article Info</h3> <div class="info-item" data-astro-cid-gjtny2mx> <span class="label" data-astro-cid-gjtny2mx>Category:</span> <span class="value" data-astro-cid-gjtny2mx>${category}</span> </div> <div class="info-item" data-astro-cid-gjtny2mx> <span class="label" data-astro-cid-gjtny2mx>Published:</span> <span class="value" data-astro-cid-gjtny2mx>${formatShort(pubDate)}</span> </div> <div class="info-item" data-astro-cid-gjtny2mx> <span class="label" data-astro-cid-gjtny2mx>Read Time:</span> <span class="value" data-astro-cid-gjtny2mx>${post.data.readTime || 5} min</span> </div> </div> <!-- LATEST POSTS --> <div class="sidebar-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Latest Posts</h3> <div class="recent-posts" data-astro-cid-gjtny2mx> ${recentPosts.map((p) => renderTemplate`<a${addAttribute(`/posts/${p.slug}`, "href")} class="recent-post-item" data-astro-cid-gjtny2mx> <div class="recent-post-title" data-astro-cid-gjtny2mx>${p.data.title}</div> <div class="recent-post-date" data-astro-cid-gjtny2mx>${formatShort(p.data.pubDate)}</div> </a>`)} </div> </div> <!-- AUTHOR --> <div class="sidebar-box author-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Author</h3> <div class="author-avatar-small" data-astro-cid-gjtny2mx> <img${addAttribute(author.image, "src")}${addAttribute(author.name, "alt")} onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%230F3B66%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2250%22 fill=%22white%22%3EVC%3C/text%3E%3C/svg%3E'" data-astro-cid-gjtny2mx> </div> <h4 data-astro-cid-gjtny2mx>${author.name}</h4> <p class="author-bio-short" data-astro-cid-gjtny2mx>${author.bio}</p> <a href="/about" class="author-link" data-astro-cid-gjtny2mx>View Profile →</a> </div> <!-- TAGS --> ${allTags.length > 0 && renderTemplate`<div class="sidebar-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Topics</h3> <div class="tags-cloud" data-astro-cid-gjtny2mx> ${allTags.slice(0, 12).map((tag) => renderTemplate`<span class="tag-small" data-astro-cid-gjtny2mx>${tag}</span>`)} </div> </div>`} <!-- RESOURCES --> <div class="sidebar-box products-box" data-astro-cid-gjtny2mx> <h3 data-astro-cid-gjtny2mx>Resources</h3> <div class="products-list" data-astro-cid-gjtny2mx> <div class="product-item" data-astro-cid-gjtny2mx> <span class="product-icon" data-astro-cid-gjtny2mx>📚</span> <div class="product-name" data-astro-cid-gjtny2mx>Implementation Guide</div> </div> <div class="product-item" data-astro-cid-gjtny2mx> <span class="product-icon" data-astro-cid-gjtny2mx>⚡</span> <div class="product-name" data-astro-cid-gjtny2mx>Fast Formula Mastery</div> </div> <div class="product-item" data-astro-cid-gjtny2mx> <span class="product-icon" data-astro-cid-gjtny2mx>📊</span> <div class="product-name" data-astro-cid-gjtny2mx>Config Checklist</div> </div> </div> </div> </aside> </div>  ` })}`;
}, "/workspaces/GCS/src/layouts/PostLayout.astro", void 0);

const $$Astro = createAstro("https://www.growcloudskills.com");
async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "PostLayout", $$PostLayout, { "post": post }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/workspaces/GCS/src/pages/posts/[...slug].astro", void 0);

const $$file = "/workspaces/GCS/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
