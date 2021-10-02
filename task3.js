var sentence1 = "we don't need no education we"
var sentence2 = "don't need no thought control no"
var sentence3 = "dark sarcasm in the classroom teachers"
var sentence4 = "leave them kids alone all in"
var sentence5 = "all it's just another brick in the wall"

console.log("")

function cleanse(sentence, words) {
  var wordsOfSentence = sentence.split(" ")
  var result = ""

  for (var word of wordsOfSentence) {
    var isCleanWord = true
    for (var curse of words) {
      if (word == curse) {
        isCleanWord = false
      }
    }
    if (isCleanWord) {
      result = result + " " + word
    } else {
      result = result + " " + "****"
    }
  }

  return result
}

var result1 = cleanse(sentence1, [ "education", "teachers", "control" ])
var result2 = cleanse(sentence1, [ "education", "teachers", "control" ])
var result3 = cleanse(sentence1, [ "education", "teachers", "control" ])
var result4 = cleanse(sentence1, [ "education", "teachers", "control" ])
var result5 = cleanse(sentence1, [ "education", "teachers", "control" ])
