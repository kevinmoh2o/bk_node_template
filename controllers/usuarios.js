const {response} = require('express');

const usuariosGet = (req, res=response) => {
    const body = req.body;

    res.status(403).json(body);
}

const usuariosPost = (req, res) => {
    res.json('POST World')
};

const usuariosPut = (req, res) => {
    res.json('UPDATE World')
};

const usuariosPatch = (req, res) => {
    res.json('PATCH World')
};

const usuariosDelete = (req, res) => {
    res.json('DELETE World')
};

module.exports= {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}