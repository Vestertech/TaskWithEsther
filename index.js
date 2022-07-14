function Area() {
    const Side1 = parseInt(document.getElementById("S1").value);
    const Side2 = parseInt(document.getElementById("S2").value);
    const Side3 = parseInt(document.getElementById("S3").value);

    let s = (Side1+Side2+Side3)/2 ;
    let Area = Math.sqrt(s*((s-Side2)* (s-Side3)* (s-Side1))) ;

    document.getElementById("display").innerHTML = Area;
}



 function Pos_Neg(A, B) {
  
    if((A < 0 && B > 0) || A> 0 && B < 0) {
        return true;
        } else{
        return false;
    };

}
console.log(Pos_Neg(4, 9));
console.log(Pos_Neg(-5, 9))
console.log(Pos_Neg(4, 9))
console.log(Pos_Neg(-9, 9))


function max(X, Y) {
    
    if(X > Y) {
        return X + " is the larger number"  + ".";
    } else {
         return Y + " is the larger number" + ".";
    }
}
let U = max(10, 6)
console.log(U);


function Number() { 
    for(let i = 0; i <= 15; i++) {
        if((i % 2 === 0)|| i === 0) {
            return i+ " is Even" + ".";
        } else {
            return  i + " is Odd" + ".";
        }
    }
}


 