import uid from "uid";

export const addValidationFields = function (
  inputFields: [],
  paramsAdvised: any,
  params: any
) {
  const transformedData: any = Array.isArray(inputFields)
    ? inputFields
    : Object.values(inputFields);

  return transformedData?.reduce(
    (acc: {}, curr: { type: string; fieldName: string; value: any }) => {
      let value;

      if (params && params[curr.fieldName]) {
        value = params[curr.fieldName];
      } else {
        const type = curr.type.toLocaleLowerCase();
        switch (type) {
          case "rating":
          case "slider":
            value = 0;
            break;
          case "mc-multi":
            value = [];
            break;
          case "checkbox":
            value = false;
            break;
          default:
            value = paramsAdvised ? paramsAdvised[curr.fieldName] : "";
        }
      }
      const id = uid(15);
      const fieldValues = { ...curr, value, isRecommParamSavingLoading: false };
      return { ...acc, [id]: fieldValues };
    },
    {}
  );
};
