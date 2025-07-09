const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('BeeMine Shopify App läuft ✅');
});

app.get('/auth', (req, res) => {
  const shop = req.query.shop;
  res.send(`Authentifizierung erfolgreich für ${shop}`);
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));