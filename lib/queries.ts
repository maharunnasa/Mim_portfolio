export const footerQuery = `
*[_type == "footer"][0]{
  name,
  description,
  phone,
  email,
  location,
  socials,
  copyright
}
`;
export const navigationQuery = `
  *[_type=="navigation" && visible==true] | order(order asc){
    title,
    sectionId
  }
`;
