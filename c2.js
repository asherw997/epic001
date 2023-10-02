// Regular function with its own 'this' binding
function regularFunction() {
    console.log(this); // 'this' refers to the calling context
}

// Arrow function inheriting 'this' from its containing scope
const arrowFunction = () => {
    console.log(this); // 'this' refers to the containing scope (e.g., the global context)
};

const obj = {
    method1: regularFunction,
    method2: arrowFunction,
};

obj.method1(); // 'this' refers to 'obj' in this context
obj.method2(); // 'this' refers to the global context because arrow functions do not have their own 'this'
