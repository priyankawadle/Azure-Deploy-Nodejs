const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World! and deploying on azure' });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});