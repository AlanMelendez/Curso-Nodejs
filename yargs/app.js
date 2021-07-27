//Yargs 
const yargs = require('yargs')
            .option('b',{
                alias: 'base ',
                type: 'number'
            })
            .argv;

console.log(yargs);
