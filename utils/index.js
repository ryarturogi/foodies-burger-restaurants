const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
};

export { removeAccents };
