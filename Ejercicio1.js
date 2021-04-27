// 1.	Pregunto si quiere el huevo frito.
// Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// Una vez cocinado le pregunto si quiere sal en el huevo.
// Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.
//1 + null char
// xor

let cadena  = () => `\nOpciones disponibles:\nSI\nNo`;

let rta = prompt("Quiere el huevo frito?"+cadena());
// let r = new Boolean(rta);

if(rta.toUpperCase()=="SI"){
    alert("Lo frio");
} else {
    alert("Lo hago hervido");
    let sal = prompt("Quiere sal?"+cadena());
    if(sal.toUpperCase()=="SI"){
        alert("Huevo hervido con sal en el plato");
    }else{
        alert("Huevo hervido en el plato");
    }
}


// let bandera = true;
// let bandera = 1;
// let bandera = 'a';
// let bandera = 2;
// let bandera = "";

// console.log(new Boolean(typeof(bandera)));