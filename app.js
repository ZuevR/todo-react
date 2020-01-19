const express = require('express');
const path = require('path');
const klawSync = require('klaw-sync');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


useControllers();

function useControllers() {
  const paths = klawSync(path.resolve(__dirname, 'controllers'), { nodir: true });
  let controllersCount = 0;
  paths.forEach((file) => {
    if (path.basename(file.path)[0] === '_' || path.basename(file.path)[0] === '.') return;
    app.use('/api/v1', require(file.path));
    controllersCount++;
  });

  console.info(`Total controllers: ${controllersCount}`);
}

module.exports = app;
