import "es6-shim";
import "reflect-metadata";
import * as express from "express";
import path = require('path');
import {useExpressServer} from "routing-controllers";

var port: number = process.env.PORT || 3000;
let app = express();

app.use('/app', express.static(path.resolve(__dirname, '../dist/app')));
app.use('/assets', express.static(path.resolve(__dirname, '../dist/assets')));

useExpressServer(app, {
  routePrefix: "/api",
  controllerDirs: [path.resolve(__dirname, "controllers/*.js")]
});

app.get('/*', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('This express app is listening on port:' + port);
});
