const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const postRouter = require('./router/postRouter');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/posts/', postRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
