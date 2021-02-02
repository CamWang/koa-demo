import Koa from 'koa';
import * as http from 'http';
import path from 'path';
import { Server as io } from 'socket.io';
import { router } from "./router.js"
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';

export default class Server {
    constructor() {
        this.app = this.createApplication();
        this.httpServer = this.createHttpServer();
        this.socketServer = this.createSocketServer();
        this.setupServer();
    }

    createApplication() {
        return new Koa();
    }

    createHttpServer() {
        return http.createServer(this.app.callback());
    }

    createSocketServer() {
        return new io(this.httpServer);
    }

    setupServer() {
        this.app.use(serve('./static'));
        this.app.use(bodyParser());
        this.app.use(router.routes(), router.allowedMethods());
    }

    listen(port, cb) {
        this.httpServer.listen(port, () => {
            cb(port);
        });
    }
}
