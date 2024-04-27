let totalbill=350;
let numberofpeople=5;
let tip=10;
let tax=10;
let tipamount=(totalbill*tip)/100;
let taxamount=(totalbill*tax)/100;
let totalamount=totalbill+tipamount+taxamount;
let individaulbill=(totalamount)/numberofpeople;             

console.log('individaulbill:'+individaulbill);
console.log('tipamount:'+tipamount);
console.log('taxamount:'+taxamount);
console.log('totalamount:'+totalamount);