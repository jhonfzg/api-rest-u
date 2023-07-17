const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pacientesF');   
})

module.exports = router;

