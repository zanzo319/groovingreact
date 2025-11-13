import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sanity } from '../lib/sanity';
import { productsQuery } from '../lib/queries';
import '../merch.css';

type Product = {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  category: string;
  featured: boolean;
  description: string;
  imageUrl: string;
};

export function Merch() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    sanity.fetch(productsQuery).then(setProducts);
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );

  return (
    <section className="merch-page">
      <div className="merch-hero">
        <h1>Indossa il ritmo</h1>
        <p>Scopri il nostro merch ufficiale: stile, qualità e vibrazioni Grooving.</p>
      </div>

      <div className="merch-controls">
        <input
          type="text"
          placeholder="Cerca prodotto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          aria-label="Ordina per prezzo"
          title="Ordina per prezzo"
        >
          <option value="asc">Prezzo crescente</option>
          <option value="desc">Prezzo decrescente</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Link to={`/merch/${product.slug.current}`} key={product._id}>
            <div className="product-card">
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>€{product.price.toFixed(2)}</p>
              <button>Scopri</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}