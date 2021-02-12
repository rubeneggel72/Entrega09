var express = require('express')
var app = express();
var router = express.Router();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use('/api', require('../rutas/productos'))

app.use('/', router)

app.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${port}`);
});

// JSON productos para agregar
//{"title":"iPhone 11 64 GB Blanco","price":157999,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega09/main/img/img-001.jpg"}
//{"title":"iPhone SE (2nd Generation) 64 GB negro","price":92700,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega09/main/img/img-002.jpg}
//{"title":"iPhone 7 128 GB (product)red","price":80999,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega09/main/img/img-003.jpg"}
//{"title":"iPhone 11 Pro Max 64 GB Gris espacial","price":249999,"thumbnail":"https://raw.githubusercontent.com/rubeneggel72/Entrega09/main/img/img-004.jpg"}
