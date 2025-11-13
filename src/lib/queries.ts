export const productsQuery = `*[_type == "product"] | order(_createdAt desc){
  _id,
  title,
  price,
  category,
  featured,
  description,
  "imageUrl": image.asset->url
}`;