const express = require('express')
const router = express.Router();
let matrizProductos = []

router.get('/', (req, res) => {
    if (matrizProductos.length > 0) {
        res.send(matrizProductos);
    }
    else {
        res.send({ error: 'No hay productos cargados' });
    }
})

router.get('/:id', (req, res) => {
    let producto = matrizProductos[parseInt(req.params.id) - 1]
    if (producto != undefined) {
        res.send(producto);
        return
    }
    else {
        res.send({ error: 'Producto no encontrado' });
    }
    res.send(JSON.stringify(producto));
})

router.post('/', (req, res) => {
    let id = matrizProductos.length + 1
    req.body.id = id
    matrizProductos.push(req.body)
    res.send(req.body);
})

module.exports = router