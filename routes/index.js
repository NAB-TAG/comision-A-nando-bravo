const express = require('express');
const router = express.Router();
// const Posts = require('../src/models/posts')
const {Posts} = require('../config/database')
const request = require('request');

// layout principal : mostrar todas las publicaciones
router.get('/', async (req, res) => {
    try {
        // Mostrar todos los posts y lo convierte en un array de objetos
        const posts = await Posts.findAll({});
        const postsData = posts.map(post => post.dataValues);
        // Renderiza el index con los datos
        res.render('index', {h1: "mi titulo", posts: postsData});
    } catch (error) {
      console.error('Error al mostrar la publicación:', error);
      res.status(500).send('Error al mostrar la publicación');
    }
  });

// layout detalles de la publicacion
router.get('/detail/:id/:title/:content/:image/:day/:month/:year', async (req, res) => {
    try {
        const imageUrl = req.params.image;
        
        // convierto la url en una imagen base64
        request({ url: imageUrl, encoding: null }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
              // Convertir la imagen en base64
              const base64Image = Buffer.from(body).toString('base64');
              // Puedes usar la imagen en base64 como desees
              // console.log(base64Image);
            } else {
              console.error('Error al descargar la imagen:', error);
            }
          });
        // manda datos al sidebar
        const posts = await Posts.findAll({});
        const postsData = posts.map(post => post.dataValues);
        // cuenta cuantas publicaciones hay
        const postsCount = await Posts.findAndCountAll();
        // Toma la imagen de la base de datos
        
        res.render('detail', {id: req.params.id, title: req.params.title, image:req.params.image, content: req.params.content, posts: postsData, posts_count: postsCount.count, date: `${req.params.day}/${req.params.month}/${req.params.year}`})
    } catch (error) {
        console.error('Error al mostrar los detalles de la publicación:', error);
        res.status(500).send('Error al mostrar los detalles de la publicación');
    }
});

// layout agregar publicacion
router.get('/add', (req, res) => {
    res.render('formAdd', {id: 'Agregar publicacion'})
});
// Agregar publicacion en mysql
router.post('/add', async (req, res) => {
    try {
        const { title, content, image } = req.body;
        // Crea una nueva instancia de Posts utilizando los datos del formulario
        const nuevaPublicacion = await Posts.create({ title, content, image });
    
        // Redirecciona a la página de detalles de la nueva publicación o a donde sea necesario
        res.redirect(`/`);
    } catch (error) {
      console.error('Error al agregar la publicación:', error);
      res.status(500).send('Error al agregar la publicación');
    }
  });

// layout editar publicacion
router.get('/edit/:id', async (req, res) => {
    try {

        // buscar el post con determinado id 
        const post = await Posts.findByPk(req.params.id);
        res.render('formEdit', { title: 'Editar', id: req.params.id, post: post.dataValues})

    } catch (error) {
        console.error('Error al editar la publicación:', error);
        res.status(500).send('Error al editar la publicación');
    }
});
// Editar publicacion
router.post('/edit/:id', async (req, res) => {
    try {
        const { title, content, image } = req.body;
        const editPost = await Posts.update({ title, content, image }, { where:{ id: req.params.id } })
        // Redirecciona a la pagina principal
        res.redirect(`/`);
    } catch (error) {
      console.error('Error al editar la publicación:', error);
      res.status(500).send('Error al editar la publicación');
    }
  });

// Eliminar publicacion
router.get('/delete/:id', async (req, res) => {
    try {
        let postId = req.params.id;
        const post = await Posts.findByPk(postId);
        if (post) {
        await post.destroy();
            console.log(`Se eliminó el post con ID ${postId}`);
        } else {
            console.log(`No se encontró el post con ID ${postId}`);
        }
        res.redirect('/'); 
    } catch (error) {
      console.error('Error al borrar la publicación:', error);
      res.status(500).send('Error al borrar la publicación');
    }
  });

module.exports = router;
