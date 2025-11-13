import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { sanity } from '../lib/sanity';

type Product = {
  title: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
};

export function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    sanity
      .fetch(
        `*[_type == "product" && slug.current == $slug][0]{
          title,
          price,
          category,
          description,
          "imageUrl": image.asset->url
        }`,
        { slug }
      )
      .then(setProduct);
  }, [slug]);

  if (!product) return <p>Caricamento...</p>;

  return (
    <div className="product-detail">
      <img src={product.imageUrl} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="price">€{product.price.toFixed(2)}</p>
        <p className="category">Categoria: {product.category}</p>
        <p className="description">{product.description}</p>
        <button className="cta-button">Aggiungi al carrello</button>
      </div>
    </div>
  );
}