/* eslint-disable consistent-return */
/* eslint-disable func-names */
export const phone = function (data: any) {
  const re = /^[0-9]+$/;
  if (re.test(data) === true) {
    return true;
  }
};

export const said = function (data: any) {
  const re = /^[0-9].{0,12}$/;
  if (re.test(data) === true || data === "") {
    return true;
  }
};

export const text = function (data: any) {
  const re = /^[a-zA-Z]/;
  return re.test(data);
};

export const email = function (data: any) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(data);
};

export const int = function (data: any) {
  const re = /^[0-9]+$/;
  if (re.test(data) === true || data === "") {
    return true;
  }
};

export const decimal = function (data: any) {
  const re = /^\d+(?:\.\d{0,2})?$/;
  if (re.test(data) || data === "") {
    return true;
  }
};

export const passwordStrength = function (data: any) {
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
  if (re.test(data)) {
    return true;
  }
  return false;
};

export const isRequiredCheck = function (isOptional: null | boolean) {
  return isOptional === null || isOptional === false;
};
