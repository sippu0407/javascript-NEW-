console.log(this);

//left-side concept

function useOne(){
    return this;
}

const left={
    name:"leftside",
    callMethod:useOne
}

console.log(useOne());  
//return global object b/c here function is a part of global object so "this" point to global object
console.log(left.callMethod()); 
// here call-method return this, and since callmethod is
// a part of left object then this point to left object



// this keyword meaning who is calling it
function thisIsDefinedbutNotPointingHere(){

    return `this is defined here but pointing to ${this.name} onject b/c it calls it`
}

const obj1={
    name:"object-1",
    methd:thisIsDefinedbutNotPointingHere
}

const obj2={
    name:"object-2",
    methd:thisIsDefinedbutNotPointingHere
}

console.log(obj1.thisIsDefinedbutNotPointingHere) // undefined
console.log(obj2.methd) // [Function: thisIsDefinedbutNotPointingHere]
console.log(obj1.methd()) // this is defined here but pointing to object-1 onject b/c it calls it
console.log(obj2.methd()) // this is defined here but pointing to object-2 onject b/c it calls it