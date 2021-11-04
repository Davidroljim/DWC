
//a
var tripleAndFilter = (arr)=>{
    return arr.map((value)=> value * 3).filter((value)=>value % 5 === 0);
}
var array = [5, 4, 15]
document.write(tripleAndFilter(array));


//b
var doubleOddNumbers = (arr) => arr.filter((val)=>val % 2 !== 0).map((val)=>val *2);
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