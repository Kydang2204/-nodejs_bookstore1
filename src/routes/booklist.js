const express = require('express');
const router = express.Router();
const booklistcont = require('../app/controllers/BookListController');

router.use('/:isbn',booklistcont.book);
router.use('/',booklistcont.booklist);



module.exports = router;

