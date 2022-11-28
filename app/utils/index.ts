import jsonToFormData from "json-form-data";
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
