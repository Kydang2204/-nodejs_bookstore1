const newrouter = require('./booklist');

function route(app){
    app.use('/',newrouter);
}

module.exports=route;
