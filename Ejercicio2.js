// 2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante 
//con su respectivo helado. “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
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
// Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
// El programa también tiene que poder dar los vueltos de su compra con su factura

let cadena  = () => `\nLos precios de helados son los siguientes:`;
let bonais = () => `\nBonais: $400`;
let agua  = () => `\nPalito de helado de agua: $1.000`;
let palito  = () =>`\nPalito de helado de crema: $2.200`;
let are = () =>`\nBombón helado con arequipe: $1.500`;
let cho = () =>`\nBombón helado con chispas de chocolate: $2.500`;
let fre = () =>`\nBombón helado con fresas: $2.800`;
let lit = () =>`\nMedio litro de helado: $ 2.000`;
let opc;
let din, nombre;
let mil, pro;
let vuel = 0;
let h1 = 400;
let h2 = 1000;
let h3 = 2200;
let h4 = 1500;
let h5 = 2500;
let h6 = 2800;
let h7 = 2000;


alert(`-------Bienvenido a nuestra heladeria------`+cadena()+bonais()+agua()+palito()+are()+cho()+fre()+lit());
opc = parseInt(prompt("Desea ingresar otro Cliente \n1. Si \n2. No"));

do {
    
	
	switch(opc){
        case 1: 
        let valor = 0;
        nombre = (prompt("Cual es su nombre:"));
        din = parseInt(prompt("Cuanto dinero tiene:"));
        if(din < 400){
            alert(`Los $${din} ingresados no le alcanzan para ningun producto`);
        }else if(din==400){
            alert(`Los $${din} ingresados puede llevar un `+ bonais());
        }else if(din == 1000){
            mil = parseInt(prompt(`Los $${din} ingresados puede llevar un `+`\n1`+ bonais()+ `\n2`+ agua()));
            switch(mil){
                case 1:
                vuel = 1000-400;    
                alert(`Sus vueltos son: ${vuel}`);
                break;
                case 2:
                    alert(`el dinero entregado esta completo`);
                    break;
                default:
                    alert(`opcion no disponible`);
                    break;
            }
        }else if(din > 1000){
            //pro = parseInt(prompt(`Cuales productos quiere llevar `+`\n1`+ bonais()+ `\n2`+ agua()+ `\n3`+ bonais()+`\n4`+ agua()+ `\n5`+ palito()+`\n6`+ are()+`\n7`+cho()+ `\n8`+fre()+`\n9`+lit()));
            
            pro = parseInt(prompt(cadena()+bonais()+agua()+palito()+are()+cho()+fre()+lit()+`\nCuantos helados desea llevar?`));
            for(let i=1;i<pro;i++){
                valor += parseInt(prompt(cadena()+bonais()+agua()+palito()+are()+cho()+fre()+lit()+`\nIngrese el valor de cada helado`));

            }
            vuel = din - valor;
            if(vuel< 0){
                 alert(`El dinero no es suficiente para la compra`);
                 }
                 else{
                alert(`Sus vueltos son: ${vuel}`);
                 }     
             
            
            
        }

        break;
        case 2:
            alert(`Muchas gracias`); 
            break;
        default:
        alert(`La opcion no existe`);
        break;
    }	
 
}while (opc==1)
