const http = require('http')
const port = 3010

const server = http.createServer(function(request,response){
    if(request.url == '/'){
        response.end('response from node server')
    }
    else if(request.url == '/about') {
        response.end('about page')
    }
    else {
        response.end('The page you are looking for does not exist')
    }
})

server.listen(port, function(){
 console.log('listening on port',port)
})