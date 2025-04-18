function addToCart(productName) {
    alert(`${productName} added to cart!`);
  }
  
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.error('SW registration failed', err));
  }
  