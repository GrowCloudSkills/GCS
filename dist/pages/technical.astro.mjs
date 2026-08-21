import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Technical = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const technicalPosts = allPosts.filter((post) => post.data.category === "Technical").sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
  const allTags = [...new Set(technicalPosts.flatMap((post) => post.data.tags || []))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Technical Articles", "description": "In-depth technical guides for Oracle Fusion HCM", "data-astro-cid-sjas5mjz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-sjas5mjz> <div class="section-header" data-astro-cid-sjas5mjz> <h1 data-astro-cid-sjas5mjz>Technical Articles</h1> <p class="section-description" data-astro-cid-sjas5mjz>
Deep-dive technical guides, architecture patterns, BIP and OTBI, SQL queries, and implementation details 
				for Oracle Fusion HCM professionals.
</p> <!-- 🎯 NEW: Active filter indicator (hidden by default, shown by JS) --> <div id="activeFilterIndicator" class="active-filter" style="display: none;" data-astro-cid-sjas5mjz> <p data-astro-cid-sjas5mjz>Showing posts tagged with <strong id="activeTagName" data-astro-cid-sjas5mjz></strong></p> <a href="/technical" class="clear-filter" data-astro-cid-sjas5mjz>← Clear filter</a> </div> </div> <div class="content-area" data-astro-cid-sjas5mjz> <!-- Filter Section --> <aside class="sidebar" data-astro-cid-sjas5mjz> <div class="filter-box" data-astro-cid-sjas5mjz> <h3 data-astro-cid-sjas5mjz>Filter by Topic</h3> <ul class="filter-list" id="filterList" data-astro-cid-sjas5mjz> <li data-astro-cid-sjas5mjz> <a href="/technical" class="filter-link active" data-filter="all" data-astro-cid-sjas5mjz>
All (${technicalPosts.length})
</a> </li> ${allTags.map((tag) => {
    const postsWithTag = technicalPosts.filter(
      (post) => post.data.tags?.includes(tag)
    );
    return renderTemplate`<li data-astro-cid-sjas5mjz> <a href="#" class="filter-link"${addAttribute(tag, "data-filter")} onClick="return false;" data-astro-cid-sjas5mjz> ${tag} (${postsWithTag.length})
</a> </li>`;
  })} </ul> </div> </aside> <!-- Posts List --> <main class="posts-main" data-astro-cid-sjas5mjz> <div class="posts-grid" id="postsGrid" data-astro-cid-sjas5mjz> ${technicalPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(JSON.stringify(post.data.tags || []), "data-tags")} data-astro-cid-sjas5mjz> <div class="post-header" data-astro-cid-sjas5mjz> <span class="category-badge" data-astro-cid-sjas5mjz>Technical</span> <span class="date" data-astro-cid-sjas5mjz>${new Date(post.data.pubDate).toLocaleDateString()}</span> </div> <h2 data-astro-cid-sjas5mjz> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-sjas5mjz>${post.data.title}</a> </h2> <p class="post-description" data-astro-cid-sjas5mjz>${post.data.description}</p> <div class="post-tags" data-astro-cid-sjas5mjz> ${post.data.tags?.map((tag) => renderTemplate`<a href="#" class="tag-link"${addAttribute(tag, "data-tag")} onClick="return false;" data-astro-cid-sjas5mjz> <span class="tag" data-astro-cid-sjas5mjz>${tag}</span> </a>`)} </div> <a${addAttribute(`/posts/${post.slug}`, "href")} class="read-more" data-astro-cid-sjas5mjz>
Read Article →
</a> </article>`)} </div> <div id="emptyState" class="empty-state" style="display: none;" data-astro-cid-sjas5mjz> <p data-astro-cid-sjas5mjz>No articles found with tag "<strong id="emptyTag" data-astro-cid-sjas5mjz></strong>"</p> <a href="/technical" class="empty-state-link" data-astro-cid-sjas5mjz>View all technical articles</a> </div> </main> </div> </div> ` })} <!-- 🎯 NEW: CLIENT-SIDE FILTERING SCRIPT -->  `;
}, "/workspaces/GCS/src/pages/technical.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/technical.astro";
const $$url = "/technical";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Technical,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
