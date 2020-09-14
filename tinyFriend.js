const friends = ["james", "ali", "hassan", "rasel", "juwel", "kamal", "kobir"];
var min = friends [0];
for(var i=0; i < friends.length; i++){
    var element = friends[i];
    if (element > min){
        min = element;
    }
}
console.log("The smallest name is", min);