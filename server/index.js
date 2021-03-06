require('dotenv').config();
const express = require('express');
const db = require('./db.js');
const models = require('./models/user.js');
const cors = require('cors');
const router = require('./routes/index.js');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);

db.sync()
	.then(() => {
		console.log('Database connected');
		app.listen(PORT, () => {
			console.log(`Server started on port ${PORT}`);
		});
	})
	.catch(err => console.log('Error ' + err));

