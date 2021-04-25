function myPow(){
    let name = (prompt("Enter your name"));
     
    alert("привет " + name);
}
function myAge(){
    const tec = 2021;
    
    let age = parseInt(prompt("Enter age"))   ;
    const v = tec-age;
    alert (v)
}
function cub(){
    let storona = parseInt(prompt("Enter Storon"))   ;
    const  per = storona+storona+storona+storona;
    alert(per) 
}
function crug(){
    const PI = Math.PI;
    let rad = parseInt(prompt("Enter radius")) ;
    rez = Math.pow(rad, 2);
     to = rez*PI;

    alert(to)
}
function nav(){
    let T = parseInt(prompt("Enter time ")) ;
    let S = parseInt(prompt("Enter  km")) ;
    const V = S/T;
    alert("время =" + T);
    alert("расстояние =" + S);
    alert("скорость =" + V);
    
}
function val(){
    let dolar  = parseInt(prompt("Enter dolar ")) ;
    const evro = 30;
   let perevod = dolar/evro;
   alert("вишло = " + perevod);
}
function pam(){
    let pam  = parseInt(prompt("Enter  Gb")) ;
    let col;
    const mb = pam*1000;

    col = mb/820 ;
  //  col.toPrecision(2);// не работает заокругление
   // Math.trunc(col)// не работает заокругление
    alert(col);

}
function chocolate (){
    let suma = parseInt(prompt("Enter sum ")) ;
    let price  = parseInt(prompt("Enter price  ")) ;

   let col = suma%price;
   let coll = suma/price;
  call = Math.round(coll);

    alert(parseInt( coll));
    alert(col);
    
}
function сhislo(){
    let number = parseInt(prompt("Enter nam ")) ;
rez = (number%10 )


rez1 = (number%100);

alert(rez,"_", parseInt(rez1));
}
function bank ()
{
    let sum = parseInt(prompt("Enter sun ")) ;
    let  pro = 0.00416*sum*2;
    alert(pro);
}
