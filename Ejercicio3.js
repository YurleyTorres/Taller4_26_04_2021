// 2.3 usuarios entran a una heladería a comprar un helado, pero hay un problema: 
// los precios no están al lado de cada estante con su respectivo helado. “Ellos quieren comprar 
// el helado más caro que puedan con la plata que tienen.
// Miguel tiene $1.000 	
// Carlos tiene $2.000 
// Manuel tiene $500 
// Los precios de helados son los siguientes:

// Bonais: $400
// Palito de helado de agua: $1.000 
// Palito de helado de crema: $2.200
// Bombón helado con arequipe: $1.500
// Bombón helado con chispas de chocolate: $2.500
// Bombón helado con fresas: $2.800
// Medio litro de helado: $ 2.000

// El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
// Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las 
// opciones disponibles
// El programa también tiene que poder dar los vueltos de su compra con su factura

let usuarios = [];
let opciones = [
    {nombre : "Bonais",valor : 400},
    {nombre : "Palito de helado de agua",valor : 1000},
    {nombre : "Palito de helado de crema",valor : 2200},
    {nombre : "Bombón helado con arequipe",valor : 1500},
    {nombre : "Bombón helado con chispas de chocolate",valor : 2500},
    {nombre : "Bombón helado con fresas",valor : 2800},
    {nombre : "Medio litro de helado",valor : 2000}
];
let cadena = "";
let convertir = ({...objects}) => {
    cadena += objects.nombre+" = "+ objects.valor+"\n";
}
for (let i = 0; i < opciones.length; i++) {
    convertir(opciones[i]);
}

alert("-------Bienvenido a nuestra heladeria------"+"\n"+cadena  );
parar:
do{
    let cliente = {usuario : prompt("Cual es su nombre"), valor:parseInt(prompt("Dinero Disponible"))};
    

    do{
        
        
        let valores = [];
        let lista = [], cont = 0;
    
    for(data of opciones){
        if(data.valor <= cliente.valor){
            lista.push(cont+". "+data.nombre+" Valor = "+data.valor+"\n");
            valores.push(data.valor);
            cont++;
        }
    }
    let pedido = parseInt(prompt("Opciones disponibles: \n "+lista.join(" ")));
    cliente.opcion = lista[pedido];
    cliente.vueltos = cliente.valor - valores[pedido];
    cliente.valor = cliente.vueltos;
    console.log(cliente.vueltos);
    if( cliente.vueltos > 400){
        if(parseInt(prompt("Va a comprar otro producto: \n 0. NO \n 1. SI"))){   
        }else{
            usuarios.push(cliente);
            cliente.vueltos = 0;
            
        }
    }
    } while( cliente.vueltos > 400) 
        if(parseInt(prompt("Otra persona va realizar una compra: \n 0. NO \n 1. SI"))){
            // console.clear();
            continue parar;
        }else{
            // console.clear();
            console.log(usuarios);
            break parar;
        } 
}while(true)