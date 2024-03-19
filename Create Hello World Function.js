/**
 @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World"   //  Any arguments could be passed to the function but it should still always return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */