import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$Functional = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const functionalPosts = allPosts.filter((post) => post.data.category === "Functional").sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
  const allTags = [...new Set(functionalPosts.flatMap((post) => post.data.tags || []))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Functional Articles", "description": "Configuration and setup guides for Oracle Fusion HCM", "data-astro-cid-vykboqui": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-vykboqui> <div class="section-header" data-astro-cid-vykboqui> <h1 data-astro-cid-vykboqui>Functional Articles</h1> <p class="section-description" data-astro-cid-vykboqui>
Configuration guides, setup best practices, and functional expertise across Core HR, Payroll, 
				Time & Labor, Absence Management, Benefits, and Compensation modules.
</p> <!-- 🎯 NEW: Active filter indicator (hidden by default, shown by JS) --> <div id="activeFilterIndicator" class="active-filter" style="display: none;" data-astro-cid-vykboqui> <p data-astro-cid-vykboqui>Showing posts tagged with <strong id="activeTagName" data-astro-cid-vykboqui></strong></p> <a href="/functional" class="clear-filter" data-astro-cid-vykboqui>← Clear filter</a> </div> </div> <div class="content-area" data-astro-cid-vykboqui> <!-- Filter Section --> <aside class="sidebar" data-astro-cid-vykboqui> <div class="filter-box" data-astro-cid-vykboqui> <h3 data-astro-cid-vykboqui>Filter by Topic</h3> <ul class="filter-list" id="filterList" data-astro-cid-vykboqui> <li data-astro-cid-vykboqui> <a href="/functional" class="filter-link active" data-filter="all" data-astro-cid-vykboqui>
All (${functionalPosts.length})
</a> </li> ${allTags.map((tag) => {
    const postsWithTag = functionalPosts.filter(
      (post) => post.data.tags?.includes(tag)
    );
    return renderTemplate`<li data-astro-cid-vykboqui> <a href="#" class="filter-link"${addAttribute(tag, "data-filter")} onClick="return false;" data-astro-cid-vykboqui> ${tag} (${postsWithTag.length})
</a> </li>`;
  })} </ul> </div> </aside> <!-- Posts List --> <main class="posts-main" data-astro-cid-vykboqui> <div class="posts-grid" id="postsGrid" data-astro-cid-vykboqui> ${functionalPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(JSON.stringify(post.data.tags || []), "data-tags")} data-astro-cid-vykboqui> <div class="post-header" data-astro-cid-vykboqui> <span class="category-badge" data-astro-cid-vykboqui>Functional</span> <span class="date" data-astro-cid-vykboqui>${new Date(post.data.pubDate).toLocaleDateString()}</span> </div> <h2 data-astro-cid-vykboqui> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-vykboqui>${post.data.title}</a> </h2> <p class="post-description" data-astro-cid-vykboqui>${post.data.description}</p> <div class="post-tags" data-astro-cid-vykboqui> ${post.data.tags?.map((tag) => renderTemplate`<a href="#" class="tag-link"${addAttribute(tag, "data-tag")} onClick="return false;" data-astro-cid-vykboqui> <span class="tag" data-astro-cid-vykboqui>${tag}</span> </a>`)} </div> <a${addAttribute(`/posts/${post.slug}`, "href")} class="read-more" data-astro-cid-vykboqui>
Read Article →
</a> </article>`)} </div> <div id="emptyState" class="empty-state" style="display: none;" data-astro-cid-vykboqui> <p data-astro-cid-vykboqui>No articles found with tag "<strong id="emptyTag" data-astro-cid-vykboqui></strong>"</p> <a href="/functional" class="empty-state-link" data-astro-cid-vykboqui>View all functional articles</a> </div> </main> </div> </div> ` })} <!-- 🎯 NEW: CLIENT-SIDE FILTERING SCRIPT -->  `;
}, "/workspaces/GCS/src/pages/functional.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/functional.astro";
const $$url = "/functional";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Functional,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
