import { useState, useCallback } from 'react';
import type { CartItem } from '@/types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((item: CartItem) => {
    setItems((prev) => [...prev, item]);
  }, []);

  const removeItem = useCallback((index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  const subtotal = items.reduce((sum, item) => {
    const extrasTotal = item.extras.reduce(
      (es, e) => es + e.price * e.qty,
      0
    );
    return sum + item.price + extrasTotal;
  }, 0);

  return { items, addItem, removeItem, clearCart, totalQty, subtotal };
}
