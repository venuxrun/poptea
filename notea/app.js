// package.json文件是项目配置文件。；
// 但后面还会有一个叫Config的文件夹进行更多的配置。暂时未知以上文件涵意。
// 快捷键提示：单行注释Ctrl+/          多行注释Shift+Ctrl+/
/*
* config配置文件夹
* controller控制器文件
* dao数据持久-数据库
* routers路由文件夹
* src静态资源文件夹
* */

/*
*数据流程
*   app =>  routers =>  controller  =>  dao
*/
// const es6的语法 代表常量
 const myhttp = require("http")//导入HTTP模块
 const indexfs = require("fs")//通过NODE文件读取模块FS，进行INDEX.HTML取出，并交解访问端口。

 const myserver = myhttp.createServer (function (request, response) {  // req请求对象,res响应对象
     console.log(request.url)
     console.log('得闲来饮茶')
     if (request.url === "/index.html") {
         indexfs.readFile("src/index.html", "utf-8", function (err, data) {
             console.log(data)
             response.writeHead(200,{"contenet-type":"text/html;charset=utf-8"})
             response.write(data)
             response.end()
         })
     }
     else if (request.url === "css/notea.css") {
         indexfs.readFile("src/css/notea.css", "utf-8", function (err, data) {
             console.log(data)
             response.writeHead(200,{"contenet-type":"text/css;charset=utf-8"})
             response.write(data)
             response.end()
         })
     }
     else if (request.url === "javascript/notea.js") {
         indexfs.readFile("src/javascript/notea.js", "utf-8", function (err, data) {
             console.log(data)
             response.writeHead(200,{"contenet-type":"text/javascript;charset=utf-8"})
             response.write(data)
             response.end()
         })
     }
 })
    myserver.listen(7894,function () {
    console.log("Notea服务器启动，端口号：7894")
    })