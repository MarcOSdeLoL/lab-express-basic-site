const express = require('express')
const { join } = require('path')

const app = express()

app.set('view engine', 'hbs')
app.set('views', join(__dirname, 'views'))

require('./db')

const Product = require('./models/product.model')



app.get('/', (req, res) => {
    res.render('home');

})
app.get('/tienda', (req, res) => {
    Product
        .find()
        .select({ title: 1, description: 1, price: 1 }) // projection
        .sort({ price: -1 })                              // sorting
        
        .catch(err => console.log(err))

        // .select()

        .then(products => {
            res.render('tienda', { products })
        })

        .catch(err => console.log(err))


})

app.listen(3000, () => console.log("Server listening on port 3000"))