var pets = ['cat', 'dog', 'rat'];

pets.forEach(
  function add(x, i){
    pets[i] = x + 's'
  }
)
//
// for (var i=0; i<pets.length; i++){
//   pets[i] = pets[i] + 's';
// }


console.log(pets);
