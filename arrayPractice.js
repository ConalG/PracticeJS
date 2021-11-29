let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Prints length of array
console.log(secretMessage.length);

// removes last elemnet of array
secretMessage.pop();

// prints length of array
console.log(secretMessage.length);

// adds elements to back of array
secretMessage.push(`to`,`program`);
console.log(secretMessage.length);

// reassigns index 7 (easily)
secretMessage[7] = `right`;

// removes first element
secretMessage.shift();

// adds to the start
secretMessage.unshift(`programming`);

// removes 5 elemnets after and inculding element 6 and replaces it with `know`
secretMessage.splice(6,5,`know`);

// prints array joined together 
console.log(secretMessage.join(` `));