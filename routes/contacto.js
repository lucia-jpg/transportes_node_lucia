var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function (req, res, next) {
    res.render('contacto', {
        isContacto: true
    });
})

//capturando los datos. De alguna forma necesito
//tener los datos que ingresa el usuario
router.post('/', async function (req, res, next) {
    console.log(req.body)
    var nombre = req.body.nombre;
    var email = req.body.email;
    var tel = req.body.tel;
    var comentarios = req.body.comentarios;

    var obj = {
        to: 'lu.puppo.91@gmail.com',
        subject: 'Contacto desde la pagina web',
        html: nombre + " se contacto a través de la web y quiere saber más información a este correo: " + email + ".<br> Su tel es: " + tel + ". Su comentario es: " + comentarios + "."
    }

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
    }
});

var info = await transport.sendMail(obj);

res.render('contacto',{
    message: 'Mensaje enviado correctamente',
    isContacto: true
})

});

module.exports = router; //finaliza router.com