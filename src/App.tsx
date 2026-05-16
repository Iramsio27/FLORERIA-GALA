import { useState, useCallback } from 'react';
import type { PageId } from '@/types';
import { useCart } from '@/hooks/useCart';

import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { Petals } from '@/components/ui/Petals';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

import { HomePage } from '@/pages/HomePage';
import { CatalogoPage } from '@/pages/CatalogoPage';
import { ProductoPage } from '@/pages/ProductoPage';
import { PedidoPage } from '@/pages/PedidoPage';
import { GaleriaPage } from '@/pages/GaleriaPage';
import { ProcesoPage } from '@/pages/ProcesoPage';
import { ContactoPage } from '@/pages/ContactoPage';

export function App() {
  const [page, setPageState] = useState<PageId>('home');
  const [productId, setProductId] = useState<string>('aithana');

  const { items, addItem, removeItem, clearCart, totalQty, subtotal } = useCart();

  const navigate = useCallback((p: PageId) => {
    setPageState(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const openProduct = useCallback((id: string) => {
    setProductId(id);
    navigate('producto');
  }, [navigate]);

  return (
    <>
      <Petals count={12} />

      <Nav currentPage={page} onNavigate={navigate} cartCount={totalQty} />

      <main>
        {page === 'home' && (
          <HomePage onNavigate={navigate} onOpenProduct={openProduct} />
        )}
        {page === 'catalogo' && (
          <CatalogoPage onOpenProduct={openProduct} />
        )}
        {page === 'producto' && (
          <ProductoPage
            productId={productId}
            onAddToCart={addItem}
            onNavigate={navigate}
          />
        )}
        {page === 'pedido' && (
          <PedidoPage
            items={items}
            subtotal={subtotal}
            onRemoveItem={removeItem}
            onClearCart={clearCart}
            onNavigate={navigate}
            onOpenProduct={openProduct}
          />
        )}
        {page === 'galeria' && <GaleriaPage />}
        {page === 'proceso' && <ProcesoPage onNavigate={navigate} />}
        {page === 'contacto' && <ContactoPage />}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </>
  );
}

export default App;
