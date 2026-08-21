import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { i as isCoreRemotePath, V as VALID_INPUT_FORMATS } from './astro/assets-service_lzFWa4op.mjs';
import { A as AstroError, U as UnknownContentCollectionError, c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from './astro/server_DNlr-Cer.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isCoreRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://www.growcloudskills.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/002-hcm-data-loader-best-practices.md": () => import('./002-hcm-data-loader-best-practices_Cq6KGr7i.mjs'),"/src/content/posts/01-fast-formula-fundamentals.md": () => import('./01-fast-formula-fundamentals_DW86_a5z.mjs'),"/src/content/posts/02-hdl-data-exchange.md": () => import('./02-hdl-data-exchange_D7fVz3_F.mjs'),"/src/content/posts/03-payroll-setup-guide.md": () => import('./03-payroll-setup-guide_DIdZjpdj.mjs'),"/src/content/posts/04-core-hr-employee-management.md": () => import('./04-core-hr-employee-management_C2jBGC82.mjs'),"/src/content/posts/05-time-labor-processing.md": () => import('./05-time-labor-processing_WmQFmfr2.mjs'),"/src/content/posts/06-compensation-management.md": () => import('./06-compensation-management_Dw36eiCk.mjs'),"/src/content/posts/07-oracle-fusion-rest-apis.md": () => import('./07-oracle-fusion-rest-apis_Cf7hv6QA.mjs'),"/src/content/posts/08-absence-management-guide.md": () => import('./08-absence-management-guide_DZkuJ1SY.mjs'),"/src/content/posts/09-sql-queries-hcm-reporting.md": () => import('./09-sql-queries-hcm-reporting_CLjDV-mN.mjs'),"/src/content/posts/10-business-rules-automation.md": () => import('./10-business-rules-automation_EhYeIDfZ.mjs'),"/src/content/posts/11-absence-management-guide.md": () => import('./11-absence-management-guide_DMl9qUXC.mjs'),"/src/content/posts/12-sql-queries-hcm-reporting.md": () => import('./12-sql-queries-hcm-reporting_DMgUliUo.mjs'),"/src/content/posts/13-business-rules-automation.md": () => import('./13-business-rules-automation_MxW7pT4F.mjs'),"/src/content/posts/14-workflow-approvals.md": () => import('./14-workflow-approvals_LysyDrsM.mjs'),"/src/content/posts/15-data-loader-integration.md": () => import('./15-data-loader-integration_CvD8x1yh.mjs'),"/src/content/posts/16-performance-tuning-hcm.md": () => import('./16-performance-tuning-hcm_BCFNcNAH.mjs'),"/src/content/posts/17-security-compliance-hcm.md": () => import('./17-security-compliance-hcm_DzUl6qVs.mjs'),"/src/content/posts/18-multi-country-hcm-setup.md": () => import('./18-multi-country-hcm-setup_CXHH1cKT.mjs'),"/src/content/posts/19-mobile-access-hcm.md": () => import('./19-mobile-access-hcm_gUFUn5G9.mjs'),"/src/content/posts/20-hcm-implementation-best-practices.md": () => import('./20-hcm-implementation-best-practices_CPPrM0ug.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"posts":{"type":"content","entries":{"002-hcm-data-loader-best-practices":"/src/content/posts/002-hcm-data-loader-best-practices.md","01-fast-formula-fundamentals":"/src/content/posts/01-fast-formula-fundamentals.md","02-hdl-data-exchange":"/src/content/posts/02-hdl-data-exchange.md","03-payroll-setup-guide":"/src/content/posts/03-payroll-setup-guide.md","04-core-hr-employee-management":"/src/content/posts/04-core-hr-employee-management.md","05-time-labor-processing":"/src/content/posts/05-time-labor-processing.md","06-compensation-management":"/src/content/posts/06-compensation-management.md","07-oracle-fusion-rest-apis":"/src/content/posts/07-oracle-fusion-rest-apis.md","08-absence-management-guide":"/src/content/posts/08-absence-management-guide.md","09-sql-queries-hcm-reporting":"/src/content/posts/09-sql-queries-hcm-reporting.md","10-business-rules-automation":"/src/content/posts/10-business-rules-automation.md","11-absence-management-guide":"/src/content/posts/11-absence-management-guide.md","12-sql-queries-hcm-reporting":"/src/content/posts/12-sql-queries-hcm-reporting.md","15-data-loader-integration":"/src/content/posts/15-data-loader-integration.md","14-workflow-approvals":"/src/content/posts/14-workflow-approvals.md","16-performance-tuning-hcm":"/src/content/posts/16-performance-tuning-hcm.md","18-multi-country-hcm-setup":"/src/content/posts/18-multi-country-hcm-setup.md","13-business-rules-automation":"/src/content/posts/13-business-rules-automation.md","17-security-compliance-hcm":"/src/content/posts/17-security-compliance-hcm.md","19-mobile-access-hcm":"/src/content/posts/19-mobile-access-hcm.md","20-hcm-implementation-best-practices":"/src/content/posts/20-hcm-implementation-best-practices.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/002-hcm-data-loader-best-practices.md": () => import('./002-hcm-data-loader-best-practices_CF84NmQ_.mjs'),"/src/content/posts/01-fast-formula-fundamentals.md": () => import('./01-fast-formula-fundamentals_CiEaECXd.mjs'),"/src/content/posts/02-hdl-data-exchange.md": () => import('./02-hdl-data-exchange_rKyMdMig.mjs'),"/src/content/posts/03-payroll-setup-guide.md": () => import('./03-payroll-setup-guide_Di_kUAb1.mjs'),"/src/content/posts/04-core-hr-employee-management.md": () => import('./04-core-hr-employee-management_COqNqI2z.mjs'),"/src/content/posts/05-time-labor-processing.md": () => import('./05-time-labor-processing_v1gm9o4u.mjs'),"/src/content/posts/06-compensation-management.md": () => import('./06-compensation-management_BrDgXp_-.mjs'),"/src/content/posts/07-oracle-fusion-rest-apis.md": () => import('./07-oracle-fusion-rest-apis_CP35b73l.mjs'),"/src/content/posts/08-absence-management-guide.md": () => import('./08-absence-management-guide_YDbkK5cg.mjs'),"/src/content/posts/09-sql-queries-hcm-reporting.md": () => import('./09-sql-queries-hcm-reporting_h9wy4hrl.mjs'),"/src/content/posts/10-business-rules-automation.md": () => import('./10-business-rules-automation_wWooOWSB.mjs'),"/src/content/posts/11-absence-management-guide.md": () => import('./11-absence-management-guide_BXyFPtf4.mjs'),"/src/content/posts/12-sql-queries-hcm-reporting.md": () => import('./12-sql-queries-hcm-reporting_COWNyoFY.mjs'),"/src/content/posts/13-business-rules-automation.md": () => import('./13-business-rules-automation_hVtiOVYI.mjs'),"/src/content/posts/14-workflow-approvals.md": () => import('./14-workflow-approvals_ZeoYsbl3.mjs'),"/src/content/posts/15-data-loader-integration.md": () => import('./15-data-loader-integration_-WHjpWkj.mjs'),"/src/content/posts/16-performance-tuning-hcm.md": () => import('./16-performance-tuning-hcm_CVP8Od8E.mjs'),"/src/content/posts/17-security-compliance-hcm.md": () => import('./17-security-compliance-hcm_LMI9r2SX.mjs'),"/src/content/posts/18-multi-country-hcm-setup.md": () => import('./18-multi-country-hcm-setup_DPO2c9ss.mjs'),"/src/content/posts/19-mobile-access-hcm.md": () => import('./19-mobile-access-hcm_0OMjH4wk.mjs'),"/src/content/posts/20-hcm-implementation-best-practices.md": () => import('./20-hcm-implementation-best-practices_DMSDu3IO.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
