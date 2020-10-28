const mongoose = require('mongoose');
const testDB = mongoose.createConnection(
  'mongodb+srv://test:test@cluster0.sf1s3.mongodb.net/test',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
);

testDB.then(console.log(`DB: connected`));
