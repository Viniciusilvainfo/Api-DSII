const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/pessoas/view');

app.use(express.static('public'));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

const PessoaRouter = require('./src/pessoas/routes/pessoa-routes');
app.use('/pessoa', PessoaRouter);

app.listen(3000, () => console.log("Escutando na porta 3000"));