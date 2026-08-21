import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Trainings = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("posts");
  const trainingPosts = allPosts.filter((post) => post.data.category === "Trainings").sort((a, b) => new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf());
  const allTags = [...new Set(trainingPosts.flatMap((post) => post.data.tags || []))];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Training Guides", "description": "Step-by-step learning guides for Oracle Fusion HCM", "data-astro-cid-kotdkxqg": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-kotdkxqg> <div class="section-header" data-astro-cid-kotdkxqg> <h1 data-astro-cid-kotdkxqg>Training Guides</h1> <p class="section-description" data-astro-cid-kotdkxqg>
Step-by-step tutorials and guided learning paths to build practical Oracle Fusion HCM skills. 
				Perfect for beginners and professionals transitioning into Oracle Cloud roles.
</p> <!-- 🎯 NEW: Active filter indicator (hidden by default, shown by JS) --> <div id="activeFilterIndicator" class="active-filter" style="display: none;" data-astro-cid-kotdkxqg> <p data-astro-cid-kotdkxqg>Showing posts tagged with <strong id="activeTagName" data-astro-cid-kotdkxqg></strong></p> <a href="/trainings" class="clear-filter" data-astro-cid-kotdkxqg>← Clear filter</a> </div> </div> <div class="content-area" data-astro-cid-kotdkxqg> <!-- Filter Section --> <aside class="sidebar" data-astro-cid-kotdkxqg> <div class="filter-box" data-astro-cid-kotdkxqg> <h3 data-astro-cid-kotdkxqg>Filter by Topic</h3> <ul class="filter-list" id="filterList" data-astro-cid-kotdkxqg> <li data-astro-cid-kotdkxqg> <a href="/trainings" class="filter-link active" data-filter="all" data-astro-cid-kotdkxqg>
All (${trainingPosts.length})
</a> </li> ${allTags.map((tag) => {
    const postsWithTag = trainingPosts.filter(
      (post) => post.data.tags?.includes(tag)
    );
    return renderTemplate`<li data-astro-cid-kotdkxqg> <a href="#" class="filter-link"${addAttribute(tag, "data-filter")} onClick="return false;" data-astro-cid-kotdkxqg> ${tag} (${postsWithTag.length})
</a> </li>`;
  })} </ul> </div> </aside> <!-- Posts List --> <main class="posts-main" data-astro-cid-kotdkxqg> <div class="posts-grid" id="postsGrid" data-astro-cid-kotdkxqg> ${trainingPosts.map((post) => renderTemplate`<article class="post-card"${addAttribute(JSON.stringify(post.data.tags || []), "data-tags")} data-astro-cid-kotdkxqg> <div class="post-header" data-astro-cid-kotdkxqg> <span class="category-badge" data-astro-cid-kotdkxqg>Training</span> <span class="date" data-astro-cid-kotdkxqg>${new Date(post.data.pubDate).toLocaleDateString()}</span> </div> <h2 data-astro-cid-kotdkxqg> <a${addAttribute(`/posts/${post.slug}`, "href")} data-astro-cid-kotdkxqg>${post.data.title}</a> </h2> <p class="post-description" data-astro-cid-kotdkxqg>${post.data.description}</p> <div class="post-tags" data-astro-cid-kotdkxqg> ${post.data.tags?.map((tag) => renderTemplate`<a href="#" class="tag-link"${addAttribute(tag, "data-tag")} onClick="return false;" data-astro-cid-kotdkxqg> <span class="tag" data-astro-cid-kotdkxqg>${tag}</span> </a>`)} </div> <a${addAttribute(`/posts/${post.slug}`, "href")} class="read-more" data-astro-cid-kotdkxqg>
Read Article →
</a> </article>`)} </div> <div id="emptyState" class="empty-state" style="display: none;" data-astro-cid-kotdkxqg> <p data-astro-cid-kotdkxqg>No training guides found with tag "<strong id="emptyTag" data-astro-cid-kotdkxqg></strong>"</p> <a href="/trainings" class="empty-state-link" data-astro-cid-kotdkxqg>View all training guides</a> </div> </main> </div> </div> ` })} <!-- 🎯 NEW: CLIENT-SIDE FILTERING SCRIPT -->  `;
}, "/workspaces/GCS/src/pages/trainings.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/trainings.astro";
const $$url = "/trainings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Trainings,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
