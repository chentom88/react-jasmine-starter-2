import Express from 'express'
    
const app = Express()
const port = 8080

app.use(Express.static('static'))
app.use(Express.static('dist'))

console.log("Starting react server on port", port)
app.listen(port)


