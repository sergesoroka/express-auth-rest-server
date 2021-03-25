const express = require('express');
const mongoose = require('mongoose');
const authRouter = require('./authRouter');

const app = express();

const PORT = process.env.PORT || 5000;
const DB_URL =
  'mongodb+srv://serge:NeMushin2519@cluster0.nynao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use('/api', authRouter);

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log('Listening on port: ' + PORT));
  } catch (e) {
    console.log(e);
  }
}
start();
