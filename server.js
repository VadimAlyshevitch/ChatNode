const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT; // env - переменная окружения

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));