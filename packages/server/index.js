const express = require('express');
const path = require('path');
const compression = require('compression');
const sslMiddleWare = require('./ssl.middleware');

const appPaths = require('@pma/app/config/paths');
const uiPaths = require('@pma/ui/config/paths');

const port = process.env.PORT || 3000;
const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(sslMiddleWare);
}

app.use(compression());

app.use('/ui', express.static(uiPaths.storybook));

app.use(express.static(appPaths.outputPath));
app.get('*', (_, res) => res.sendFile(path.join(appPaths.outputPath, 'index.html')));

app.listen(port, () => console.log(`App is now running on ${port}`));
