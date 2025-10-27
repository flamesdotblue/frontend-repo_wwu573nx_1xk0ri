import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './data';
import { useCart } from './CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = useMemo(() => products.find((p) => String(p.id) === String(id)), [id]);
  const { addItem } = useCart();
  const [size, setSize] = useState(product?.sizes?.[0] || '');
  const [color, setColor] = useState(product?.colors?.[0] || product?.color || '');
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/" className="mt-4 inline-block text-rose-600 hover:text-rose-500">← Back to shop</Link>
      </div>
    );
  }

  const onAdd = () => {
    addItem(product, qty, { size, color });
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-2xl object-cover shadow" />
        </div>
        <div>
          <nav className="text-sm text-gray-600"><Link to="/" className="hover:text-gray-900">Home</Link> <span className="mx-2">/</span> <span className="text-gray-900">{product.name}</span></nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          <p className="mt-2 text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {product.colors?.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`rounded-full border px-3 py-1 text-sm ${
                      color === c ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-900'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {product.sizes?.length > 0 && (
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <button className="text-sm text-rose-600 hover:text-rose-500">Size guide</button>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`rounded-md border px-3 py-1 text-sm ${
                      size === s ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex items-center gap-3">
            <label htmlFor="qty" className="text-sm text-gray-600">Qty</label>
            <input
              id="qty"
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value)))}
              className="w-20 rounded border border-gray-300 px-2 py-2"
            />
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={onAdd}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Add to bag
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
