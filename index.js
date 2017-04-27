const express=require('express')
const hbs=require('express-handlebars')
const app=express()

app.engine('.hbs',hbs({
    defaultLayout:'default',
    extname:'.hbs'
})) 
app.set('view engine','.hbs')
app.get('/',function(req,res){
    res.render('principal')
})
app.get('/caracteristicas',function(req,res){
    res.render('caracteristicas')
})
app.get('/contacto',function(req,res){
    res.render('contacto')
})
app.use(function(req, res, next) {
  res.status(404).send('pagina no encontrada!');
});
app.listen(3000,function(){
    console.log('Corriendo en el puerto 3000...')
});