import React from 'react';
import { X } from 'lucide-react';
import { useCart } from './CartContext';

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQty, totals, clear } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-lg font-semibold">Your bag</h2>
          <button onClick={onClose} className="rounded p-2 hover:bg-gray-100" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-168px)] flex-col">
          <div className="grow overflow-auto px-6 py-4">
            {items.length === 0 ? (
              <p className="text-sm text-gray-600">Your bag is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.key} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="h-20 w-20 rounded object-cover" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.color}{item.size ? ` · ${item.size}` : ''}</p>
                      <div className="mt-2 flex items-center gap-3">
                        <label className="text-xs text-gray-500" htmlFor={`qty-${item.key}`}>Qty</label>
                        <input
                          id={`qty-${item.key}`}
                          type="number"
                          min={1}
                          value={item.qty}
                          onChange={(e) => updateQty(item.key, Number(e.target.value))}
                          className="w-16 rounded border border-gray-300 px-2 py-1 text-sm"
                        />
                        <button
                          onClick={() => removeItem(item.key)}
                          className="ml-auto text-sm text-rose-600 hover:text-rose-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="shrink-0 font-semibold text-gray-900">${(item.price * item.qty).toFixed(2)}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="border-t px-6 py-4">
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Subtotal</span><span className="font-medium">${totals.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Shipping</span><span className="font-medium">${totals.shipping.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Tax</span><span className="font-medium">${totals.tax.toFixed(2)}</span></div>
              <div className="flex justify-between border-t pt-2 font-semibold"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
            </div>
            <button className="mt-4 w-full rounded-md bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800">
              Checkout
            </button>
            {items.length > 0 && (
              <button onClick={clear} className="mt-2 w-full text-sm text-gray-600 hover:text-gray-900">Clear bag</button>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
