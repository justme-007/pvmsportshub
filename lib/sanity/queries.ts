export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    title,
    price,
    image
  }
`;