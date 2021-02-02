import Server from './server.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;

const server = new Server();
server.listen(argv.port, port => {
    console.log(`Server lisening http://localhost:${port}`);
});