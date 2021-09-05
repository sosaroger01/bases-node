const fs= require('fs');
const colors = require('colors');

const crearArchivoPromise=(base=5)=>{
    return new Promise((resolve,reject)=>{
        try {
            let salida='';

            for (let index = 1; index < 11; index++) {
                
                salida+=`${ base } x ${ index } = ${ base*index }\n`;
            }
        
            console.log(salida);
        
            fs.writeFileSync(`tabla-${base}.txt`,salida);
            resolve(`tabla-${base}.txt`); 
        } catch (error) {
            reject(error)
        }
       
    })

}

const crearArchivo=async({base=5,hasta=10,listar=false})=>{
    try {
        let salida='',consola='';

        for (let index = 1; index <= hasta; index++) {
            
            consola+=`${ base } ${'x'.green} ${ index } ${'='.red} ${ base*index }\n`;
            salida+=`${ base } ${'x'} ${ index } ${'='} ${ base*index }\n`;
        }
    
        if(listar){
            console.log("=========================".green);
            console.log("    Tabla del base".green,colors.blue(base));
            console.log("=========================".green);
            console.log(salida);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return `tabla-${base}.txt`; 
    } catch (err) {
        throw err
    }
}

module.exports={
    crearArchivo,
    crearArchivoPromise
}