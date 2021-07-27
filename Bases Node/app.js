
console.clear();
const tablas=(numero)=>{
    let bandera=1;
    let resultado=0;
    if(numero!=0 ){
        while(bandera<=10){
            let suma=numero*bandera;
            resultado=+suma;
            console.log(`${numero} * ${bandera} = ${resultado}`);
            bandera++;
        }

    }
}

tablas(5);