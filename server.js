import Express from 'express'
    
const app = Express()
const port = process.env['PORT'] || '8080'

app.use(Express.static('static'))
app.use(Express.static('dist'))

console.log("Starting application on port", port)
app.listen(port)


