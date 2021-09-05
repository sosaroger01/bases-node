

const argv=require('yargs').options({
    'b':{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:"Es la base de la tabla de multiplicar"
    },
    'l':{
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default:false,
        describe:"Muestra la tabla de multiplicar"
    },
    'h':{
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default:10,
        describe:"Determina hasta donde que número se va a multiplicar la base"
    }
})
.check((argv,options)=>{
    if(isNaN(argv.base)){
        throw 'la base debe ser un número';
    }
    if(isNaN(argv.hasta)){
        throw 'El hasta debe ser un número';
    }
    return true;
})
.argv;


module.exports=argv;