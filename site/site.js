const express = require("express");
const cookieblob = require("../cookieblob");
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http, {serveClient: true});
app.set('view engine', 'ejs');
app.get("/", (req, res)=>{
    res.render("index.ejs", {guildAmount:cookieblob.client.guilds.size});
});
app.get("/docs", (req, res)=>{
    res.render("docs.ejs", {renderUsage: require("../util").renderUsage, commands: Object.keys(cookieblob.commands).map(cookieblob.getCommand).filter(cm => cm.meta.permissionLevel != "botAdmin").filter(cx => cx.meta.permissionLevel != "botOwner")});
});
app.use(express.static("static"));
app.listen(8085, function() {
    console.log("Listening on port 8085");
});
setInterval(() => {
    io.emit("guild count", cookieblob.client.guilds.size);
});
module.exports = {
    app: app
}
let admin = require("./admin.js");