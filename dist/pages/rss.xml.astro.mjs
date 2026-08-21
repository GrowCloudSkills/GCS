import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_C-yhFct8.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Vaibhav Chavan — Oracle HCM Cloud Notes',
    description:
      'Field notes from a decade in the Oracle HCM Cloud trenches — Fast Formulas, Absence Management, Time and Labor, Redwood, HDL, OTBI.',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? '',
      pubDate: post.data.pubDate,
      link: `/posts/${post.slug}/`,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language>`,
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
