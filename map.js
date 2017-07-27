var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, fun){
  var outputArray = []
  for (i = 0; i < arr.length; i++){
    outputArray.push(fun(arr[i]))
  }
  return outputArray
}
var results = map(words, function(word){
  return word.length
})

console.log(results)
