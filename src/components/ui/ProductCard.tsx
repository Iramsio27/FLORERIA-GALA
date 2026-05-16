import { useState } from 'react';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [hover, setHover] = useState(false);
  const minPrice = Math.min(...product.variants.map((v) => v.price));

  return (
    <div
      className="product-card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      aria-label={`Ver ${product.name}`}
    >
      <div className="product-img product-img-wrap">
        <img
          src={product.img}
          alt={product.name}
          style={{
            opacity: hover && product.img2 ? 0 : 1,
            transition: 'opacity 0.5s',
          }}
          loading="lazy"
        />
        {product.img2 && (
          <img
            src={product.img2}
            alt=""
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              opacity: hover ? 1 : 0,
              transition: 'opacity 0.5s',
            }}
            loading="lazy"
          />
        )}
      </div>

      <div className="product-meta">
        <div>
          <div className="product-name">{product.name}</div>
          <div className="eyebrow" style={{ marginTop: 4, fontSize: 10 }}>
            {product.tagline}
          </div>
        </div>
        <div className="product-price">desde ${minPrice.toLocaleString()}</div>
      </div>
    </div>
  );
}
