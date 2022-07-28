const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(secure);

app.get('/', (req, res) => {
	console.log('token');
});

function secure(req, res, next) {
	if (req.query.token) {
		res.send('the token has value');
	} else {
		res.status(403).send('the token hasn’t any value or doesn’t exist');
	}
	next();
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
