const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch } = require('../controllers/usuarios');

//const {Router} = require('express');

const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

router.put('/', usuariosPut);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);

module.exports = router;