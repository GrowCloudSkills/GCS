import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BsZmYumc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const tagCounts = {};
  for (const post of posts) {
    for (const tag of post.data.tags) {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    }
  }
  const tags = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Topics", "description": "Browse Oracle HCM Cloud notes by topic.", "data-astro-cid-os4i7owy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="container" data-astro-cid-os4i7owy> <div class="header" data-astro-cid-os4i7owy> <p class="eyebrow" data-astro-cid-os4i7owy>Index</p> <h1 data-astro-cid-os4i7owy>Topics</h1> <p class="lede" data-astro-cid-os4i7owy>Every tag across the archive, weighted by post count.</p> </div> <ul class="tag-cloud" data-astro-cid-os4i7owy> ${tags.map(([tag, count]) => renderTemplate`<li data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="tag" data-astro-cid-os4i7owy> ${tag} <span class="count" data-astro-cid-os4i7owy>${count}</span> </a> </li>`)} </ul> ${tags.length === 0 && renderTemplate`<p class="muted" data-astro-cid-os4i7owy>No tags yet.</p>`} </section> ` })} `;
}, "/workspaces/GCS/src/pages/tags/index.astro", void 0);

const $$file = "/workspaces/GCS/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
