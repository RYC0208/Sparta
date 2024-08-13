let blockScopeVariable = "Available only in this block";
if(true) {
    var blockedScope = "Visible inside this block";
    console.log(blockedScope)
}
console.log(blockedScope);
console.log(blockScopeVariable);

for(var i = 0; i < 3; i++){
    console.log(i);
}
console.log(i);