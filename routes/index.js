const express = require('express');
const router = express.Router();
// const Posts = require('../src/models/posts')
const {Tests} = require('../config/database')

// layout principal
router.get('/', (req, res) => {
    res.render('index', {h1: 'mi titulo ', posts: [
        {id: '2', title: 'Nesesito ayuda mi mama me pega', description: encodeURIComponent('Ultimamente mi mama me anda pegando no se que hacer ya que esto se esta volviendo fuera de control, tengo que llamar a la policia?, pero creo que causaria mas problemas de lo que soluciona'), image: 'saasdasdasdasd' },
        {id: '3', title: 'No puedo conectar la base de datos mysql', description: encodeURIComponent('Ultimamente mi mama me anda pegando no se que hacer ya que esto se esta volviendo fuera de control, tengo que llamar a la policia?, pero creo que causaria mas problemas de lo que soluciona'), image: 'saasdasdasdasd' },
        {id: '4', title: 'Estoy por compilar y se me exploto la compu', description: encodeURIComponent('Ultimamente mi mama me anda pegando no se que hacer ya que esto se esta volviendo fuera de control, tengo que llamar a la policia?, pero creo que causaria mas problemas de lo que soluciona'), image: 'saasdasdasdasd' },
        
    ]})
});

// layout detalles de la publicacion
router.get('/detail/:id/:title/:description', (req, res) => {
    res.render('detail', {id: req.params.id, title: req.params.title, description: req.params.description})
});

// layout agregar publicacion
router.get('/add', (req, res) => {
    res.render('formAdd', {id: 'Agregar publicacion'})
});
// Agregar publicacion en mysql
router.post('/add', async (req, res) => {
    try {
    //   const { title, content, image } = req.body;
        Tests ? console.log("si existe el modelo test"):console.log("no existe el modelo test");
      // Crear una nueva instancia de Posts utilizando el método create
      const createTest = await Tests.create({
        title: "sfadsfafa"
      })
    //   const nuevaPublicacion = await Posts.create({
    //     title: "asdfasdf",
    //     content: "asndflansldfk",
    //     image: "adfasdfasd fasaf",
    //   });
  
      // Redireccionar a la página de detalles de la nueva publicación o a donde sea necesario
    //   res.redirect(`/detail/${nuevaPublicacion.id}`);
    } catch (error) {
      console.error('Error al agregar la publicación:', error);
      res.status(500).send('Error al agregar la publicación');
    }
  });

// layout editar publicacion
router.get('/edit/:id', (req, res) => {
    res.render('formEdit', { title: 'Editar', id: req.params.id})
});
router.get('/mascotas', (req, res) => {
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
