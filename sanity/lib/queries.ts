export const allProductsQuery = `
  *[_type == "product"]{
    _id,
    title,
    price,
    image,
    club->{
      name,
      logo
    }
  }
`;

export const allClubsQuery = `
  *[_type == "club"]{
    _id,
    name,
    logo
  }
`