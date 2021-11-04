
//a
var tripleAndFilter = (arr)=>{
    return arr.map(function(value){
            return value * 3;
         }).filter(function(value){
           return value % 5 === 0;
      })
}
var array = [5]
document.write(tripleAndFilter(array));


//b
var doubleOddNumbers = (arr)=>{
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}
document.write("<br>");
var array = [5]
document.write(doubleOddNumbers(array));

//c
var bar = ()=>{ 
    let txt = ''; 
    for(let i in arguments){ 
    txt += arguments[i];
    } 
    return txt;
}

