export const parseProductBrand = (brand: string): string => {
  // Convert the string to lowercase
  const lowercaseString = brand.toLowerCase();

  // Replace spaces with dashes
  const transformedString = lowercaseString.replace(/\s+/g, "-");

  return transformedString;
};
