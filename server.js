const debug = require('debug')('angularjs');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const app = express();
const appName = '9781783280339_angularjs-directives';
const port = process.env.PORT || 2112;

debug('Booting... %o', appName);
app.use(logger('dev'));

// Base...
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Assets routed from node_modules...
app.use('/assets/vendor/angular', express.static(path.join(__dirname, 'node_modules', 'angular')));
app.use('/assets/vendor/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
app.use('/assets/vendor/timepicker', express.static(path.join(__dirname, 'node_modules', 'timepicker')));
app.use('/assets/vendor/waypoints', express.static(path.join(__dirname, 'node_modules', 'jquery-waypoints')));

// Routes

// Export
if (require.main === module) {
  app.listen(port, () => {
    console.info(`Express started on port:${port}.`);
  });
} else {
  module.exports = app;
}
