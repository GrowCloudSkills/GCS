import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_C-yhFct8.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_BsZmYumc.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.growcloudskills.com");
async function getStaticPaths() {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  const tagSet = /* @__PURE__ */ new Set();
  for (const post of posts) for (const t of post.data.tags) tagSet.add(t);
  const fuzzyCategories = [
    "Fast Formula",
    "OTL",
    "Benefits",
    "HDL",
    "Recruiting",
    "Null Handling",
    "Absence Management",
    "Time and Labor"
  ];
  const categoryAliases = {
    OTL: [
      "otl",
      "time & labor",
      "time and labor",
      "time entry rule",
      "time calculation rule",
      "timecard",
      "tcr deep dive"
    ]
  };
  for (const c of fuzzyCategories) tagSet.add(c);
  return Array.from(tagSet).map((tag) => {
    const slug = tag.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const needle = tag.toLowerCase();
    const aliases = categoryAliases[tag];
    let matched;
    if (aliases) {
      matched = posts.filter((p) => {
        const haystack = (p.data.tags.join(" ") + " " + p.data.title).toLowerCase();
        return aliases.some((a) => haystack.includes(a));
      });
    } else {
      matched = posts.filter(
        (p) => p.data.tags.some((t) => t.toLowerCase() === needle)
      );
      if (matched.length === 0) {
        matched = posts.filter((p) => {
          const haystack = (p.data.tags.join(" ") + " " + p.data.title).toLowerCase();
          return haystack.includes(needle);
        });
      }
    }
    matched.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
    return { params: { tag: slug }, props: { tag, posts: matched } };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag, posts } = Astro2.props;
  const currentSlug = Astro2.params.tag;
  const formatShort = (d) => d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  const primaryCategory = (tags, title) => {
    const all = (tags.join(" ") + " " + title).toLowerCase();
    if (all.includes("hdl")) return "HDL";
    if (all.includes("benefit")) return "Benefits";
    if (all.includes("recruit")) return "Recruiting";
    if (all.includes("absence")) return "Absence";
    if (all.includes("time and labor") || all.includes("time & labor") || all.includes("time entry rule") || all.includes("time calculation rule") || all.includes("timecard") || /\btcr\b/.test(all) || /\bter\b/.test(all)) return "Time & Labor";
    if (all.includes("null") || all.includes("defaulted")) return "Null Handling";
    if (tags.length > 0) return tags[0];
    return "Fast Formula";
  };
  const readMinutes = (body) => Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 200));
  const depth = (mins) => mins >= 18 ? { label: "Deep", bars: "\u25B0\u25B0\u25B0", cls: "d3" } : mins >= 9 ? { label: "Applied", bars: "\u25B0\u25B0\u25B1", cls: "d2" } : { label: "Foundational", bars: "\u25B0\u25B1\u25B1", cls: "d1" };
  const cards = posts.map((post) => {
    const mins = readMinutes(post.body);
    return {
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      mins,
      tier: depth(mins),
      category: primaryCategory(post.data.tags, post.data.title)
    };
  });
  const featured = cards[0];
  const rest = cards.slice(1);
  const chips = [
    { href: "/", label: "All", slug: null },
    { href: "/tags/otl", label: "OTL", slug: "otl" },
    { href: "/tags/fast-formula", label: "Fast Formula", slug: "fast-formula" },
    { href: "/tags/hdl", label: "HDL", slug: "hdl" },
    { href: "/tags/benefits", label: "Benefits", slug: "benefits" },
    { href: "/tags/recruiting", label: "Recruiting", slug: "recruiting" },
    { href: "/tags/null-handling", label: "Null Handling", slug: "null-handling" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": tag, "description": `Posts about ${tag}`, "data-astro-cid-tge3q7ae": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hp" data-astro-cid-tge3q7ae> <!-- ══════════ CATEGORY BAND ══════════ --> <section class="hp-shell" data-astro-cid-tge3q7ae> <div class="band" data-astro-cid-tge3q7ae> <div class="band-inner" data-astro-cid-tge3q7ae> <div class="hp-eyebrow" data-astro-cid-tge3q7ae>Category</div> <h1 data-astro-cid-tge3q7ae>${tag}</h1> <p class="band-sub" data-astro-cid-tge3q7ae> ${posts.length} ${posts.length === 1 ? "article" : "articles"} in this category.
</p> </div> </div> </section> <!-- ══════════ FILTER ══════════ --> <div class="filter-wrap" data-astro-cid-tge3q7ae> <div class="hp-shell filter-inner" data-astro-cid-tge3q7ae> <span class="filter-label" data-astro-cid-tge3q7ae>Filter</span> <nav class="filter-scroll" aria-label="Categories" data-astro-cid-tge3q7ae> ${chips.map((c) => renderTemplate`<a${addAttribute(c.href, "href")}${addAttribute(currentSlug === c.slug ? "chip is-active" : "chip", "class")}${addAttribute(currentSlug === c.slug ? "page" : void 0, "aria-current")} data-astro-cid-tge3q7ae>${c.label}</a>`)} </nav> </div> </div> <!-- ══════════ FEED ══════════ --> <section class="hp-shell feed" data-astro-cid-tge3q7ae> <div class="feed-head" data-astro-cid-tge3q7ae> <h2 data-astro-cid-tge3q7ae>${tag}</h2> <span class="feed-count" data-astro-cid-tge3q7ae>${posts.length} ${posts.length === 1 ? "article" : "articles"}</span> </div> ${posts.length === 0 ? renderTemplate`<div class="empty" data-astro-cid-tge3q7ae> <p data-astro-cid-tge3q7ae>No posts in this category yet.</p> <p data-astro-cid-tge3q7ae><a class="back" href="/" data-astro-cid-tge3q7ae>← Back to all articles</a></p> </div>` : renderTemplate`<div class="bento" data-astro-cid-tge3q7ae> ${featured && renderTemplate`<a${addAttribute(`/posts/${featured.slug}`, "href")} class="card card--feature" data-astro-cid-tge3q7ae> <div class="card-eyebrow" data-astro-cid-tge3q7ae><span class="arrow" data-astro-cid-tge3q7ae>&gt;&gt;&gt;</span> ${featured.category} · Latest</div> <h3 data-astro-cid-tge3q7ae>${featured.title}</h3> ${featured.description && renderTemplate`<p data-astro-cid-tge3q7ae>${featured.description}</p>`} <span class="read-cta" data-astro-cid-tge3q7ae>Start reading <span aria-hidden="true" data-astro-cid-tge3q7ae>→</span></span> <div class="card-foot" data-astro-cid-tge3q7ae> <span class="pill" data-astro-cid-tge3q7ae>${featured.mins} min</span> <span${addAttribute(`pill tier ${featured.tier.cls}`, "class")} data-astro-cid-tge3q7ae><span class="bars" data-astro-cid-tge3q7ae>${featured.tier.bars}</span> ${featured.tier.label}</span> <span class="pill" data-astro-cid-tge3q7ae>${formatShort(featured.pubDate)}</span> </div> </a>`} ${rest.map((c) => renderTemplate`<a${addAttribute(`/posts/${c.slug}`, "href")} class="card" data-astro-cid-tge3q7ae> <div class="card-eyebrow" data-astro-cid-tge3q7ae><span class="arrow" data-astro-cid-tge3q7ae>&gt;&gt;&gt;</span> ${c.category}</div> <h3 data-astro-cid-tge3q7ae>${c.title}</h3> ${c.description && renderTemplate`<p data-astro-cid-tge3q7ae>${c.description}</p>`} <div class="card-foot" data-astro-cid-tge3q7ae> <span class="pill" data-astro-cid-tge3q7ae>${c.mins} min</span> <span${addAttribute(`pill tier ${c.tier.cls}`, "class")} data-astro-cid-tge3q7ae><span class="bars" data-astro-cid-tge3q7ae>${c.tier.bars}</span> ${c.tier.label}</span> </div> </a>`)} </div>`} </section> </div> ` })} `;
}, "/workspaces/GCS/src/pages/tags/[tag].astro", void 0);

const $$file = "/workspaces/GCS/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
