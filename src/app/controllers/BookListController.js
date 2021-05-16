
class BookListController
{
    booklist(req,res){
        res.render('booklist');
    }
    book(req,res){
        res.send("hello");
    }
}

module.exports=new BookListController;