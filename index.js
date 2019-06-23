// Write your solution here!

const append = ['Milo', 'Otis', 'Garfield'];
const prepend = ['Milo', 'Otis', 'Garfield'];
const removeLast = ['Milo', 'Otis', 'Garfield'];
const removeFirst = ['Milo', 'Otis', 'Garfield'];

append.splice(3,0,'Odie');
prepend.splice(0,0,'Odie');
removeLast.splice(2,1);
removeFirst.splice(0,1);