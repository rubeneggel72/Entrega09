const express = require('express')
const router = express.Router();
let matrizProductos = []

router.get('/productos', (req, res) => {
    if (matrizProductos.length > 0) {
        res.send(matrizProductos);
    }
    else {
        res.send({ error: 'No hay productos cargados' });
    }
})

router.get('/productos/:id', (req, res) => {
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

router.post('/productos', (req, res) => {
    var id = 1
    if (matrizProductos.length > 0) {
        id = matrizProductos[matrizProductos.length - 1].id + 1
    }
    req.body.id = id
    matrizProductos.push(req.body)
    res.send(req.body);
})

router.put('/productos/actualizar/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let idx = getIndice(id)
    let producto = matrizProductos[idx]
    if (producto != undefined) {
        req.body.id = id
        matrizProductos[idx] = req.body
        res.send(req.body);
    }
    else {
        res.send({ error: 'Producto no encontrado' });
    }
})

router.delete('/productos/delete/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let idx = getIndice(id)
    let producto = matrizProductos[idx]
    matrizProductos.splice(getIndice(idx + 1), 1);
    if (producto != undefined) {
        res.send(producto);
        return
    }
    else {
        res.send({ error: 'Producto no encontrado' });
    }
})

function getIndice(id) {
    var Indice = -1;
    matrizProductos.filter(function (producto, i) {
        if (producto.id === id) {
            Indice = i;
        }
    });
    return Indice;
}

module.exports = router