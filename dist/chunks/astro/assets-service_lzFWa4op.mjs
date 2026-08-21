import { isRemotePath } from '@astrojs/internal-helpers/path';

const URL_PROTOCOL_REGEX = /^(?:(?:http|ftp|https|ws):?\/\/|\/\/)/;
function isCoreRemotePath(path) {
  return URL_PROTOCOL_REGEX.test(path) || isRemotePath(path);
}

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];

export { VALID_INPUT_FORMATS as V, isCoreRemotePath as i };
