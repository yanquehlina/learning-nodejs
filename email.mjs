import {program} from 'commander';
import colors from 'colors';
import { mailTransport } from './mailTransport.mjs';


program
.option('-s, --subject')
.option('-t, --to')
.option('-m, --message');

program.parse();

const options = program.opts();
const args = program.args;

// console.log(options);
// console.log(args);

if (options.subject && options.to && options.messages){
    // Send Email
    mailTransport.sendMail({
        from: 'noreply@shopa.life',
        to: args[1],
        subject: args[0],
        text: args[2]
    })
    // delivery message
    // .then(console.log)
    // .catch(console.log);
    console.log('Message sent'.green);
} else {
    console.log('Some options are missing'.rainbow);
}