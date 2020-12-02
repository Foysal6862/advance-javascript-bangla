// falsy
/* false
0
'' or ""
undefined
null
NaN
-0
 */

//truthy
/* 'false'
'0'
' ' or " "
{}
[]
function () {} */

let name = 'false';
if (name) {
    console.log("condition is true");
}else {
    console.log("condition is false");
}