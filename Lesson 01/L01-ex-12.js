var superman = {
  'color': "red",
  'strength': 1000,
  'weapon': "powerpunch",
  'character': "david milan",
  getName(){
    return "SuperMan";
  }
}

var batman = {
  "color": "black",
  'strength': 100,
  'weapon': "hiding",
  'character': "mathew",
  getName(){
    return "BatMan";
  }
}


console.log("superman color: " + superman.color);
console.log("batman strength: " + batman.strength);

console.log(superman.getName());
console.log(batman.getName());