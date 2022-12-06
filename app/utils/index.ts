import jsonToFormData from "json-form-data";

export { default as debounce } from "./debounce";
export { default as capsFirst } from "./capsFirst";
export { default as percentage } from "./percentage";

var options = {
  showLeafArrayIndexes: true,
  includeNullValues: false,
};
type ValidJSONValue =
  | string
  | number
  | boolean
  | File
  | Blob
  | Date
  | null
  | undefined;

interface ValidJSON {
  [key: string]:
    | ValidJSON
    | ValidJSON[]
    | ValidJSONValue
    | ValidJSONValue[]
    | FileList;
}
export const formateToFormData = (data: ValidJSON) => {
  return jsonToFormData(data, {
    ...options,
    initialFormData: new FormData(),
  });
};

// Captures 0x + 4 characters, then the last 4 characters.
const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

/**
 * Truncates an ethereum address to the format 0x0000…0000
 * @param address Full address to truncate
 * @returns Truncated address
 */
const truncateEthAddress = (address: string) => {
  const match = address.match(truncateRegex);
  if (!match) return address;
  return `${match[1]}…${match[2]}`;
};

export default truncateEthAddress;

export function makeGatewayURL(cid: string, path: string) {
  return `https://${cid}.ipfs.w3s.link/${encodeURIComponent(path)}`;
}
