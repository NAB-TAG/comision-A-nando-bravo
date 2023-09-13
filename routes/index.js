const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Renderiza la vista 'index' dentro de la plantilla base 'layout'
    res.render('index', {h1: 'mi titulo dinamico'})
});

router.get('/mascotas', (req, res) => {
    // Renderiza la vista 'index' dentro de la plantilla base 'layout'
    res.render('mascotas', {
        arrayMascotas: [
            {id: '1', nombre: 'duke', descripcion: 'aiasdnfansdlfnasdkfjnaskdjfn'},
            {id: '2', nombre: 'osito', descripcion: 'asdofjasidlfjmlakds fmlakdsn lajdsnjlasd fn'},
        ]
    })
});

router.get('/componente1', (req, res) => {
    // Renderiza la vista 'componente1' dentro de la plantilla base 'layout'
    res.render('componente1', { pageTitle: 'Componente 1' });
});

module.exports = router;
