# Azttec + React + TypeScript + Vite

Uses polyfill package for vite.config.ts configuration.

Wrap your app with the following code
```js
<WalletProvider pxeUrl={PXE_URL}>
  <App />
</WalletProvider>
```

Retrieve the local wallets using the hook
```js
const { wallet, address, isLoading } = useWallet();
```

# aztec-vite-local-starter
