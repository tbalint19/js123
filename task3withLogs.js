console.log("script (task3withLogs.js) will run now...")

var sentence1 = "we don't need no education we"
var sentence2 = "don't need no thought control no"
var sentence3 = "dark sarcasm in the classroom teachers"
var sentence4 = "leave them kids alone all in"
var sentence5 = "all it's just another brick in the wall"

console.log("variables created")

console.log("will declare the function now...")

function cleanse(sentence, words) {
  console.log("the function (cleanse) is called now")
  console.log("it was called with parameters", sentence)
  console.log("and", words)
  var wordsOfSentence = sentence.split(" ")
  console.log("the string passed as the first parameter is splitted to an array of strings ", wordsOfSentence)
  var result = ""
  console.log("the initial value of result is", result)

  console.log("will check every word of the sentence now...")
  for (var word of wordsOfSentence) {
    console.log("in the first iteration, the value of word variable is", word)
    var isCleanWord = true
    console.log("by default we assume it is a clean word, but we will compare it to all the cursed words now")
    for (var curse of words) {
      console.log("we are comparing it to ", curse)
      if (word == curse) {
        console.log("this block only runs, if the currently observed word is == to the currently observed curse")
        isCleanWord = false
        console.log("in this case, the variable of isCleanWord is changed to ", isCleanWord)
      } else {
        console.log("this block is completely unnecessary for the function to work")
        console.log("in the else branch we only log the fact that the value of isCleanWord remains unchanged");
      }
    }
    console.log("-- the current word has been compared to all the curses")
    console.log("now we now if the word is clean or not")
    if (isCleanWord) {
      console.log("this block runs, because the word is clean -  it is added to the result")
      result = result + " " + word
    } else {
      console.log("this block runs, because the word is NOT clean -  **** are added to the result")
      result = result + " " + "****"
    }
    console.log("for now, the value of result is ", result)
    console.log("--- we can check th next word of the sentence now (if there are more)")
  }

  console.log("at the end, the result is", result)
  return result
}

console.log("function (cleanse) is declared, but has not been called yet")

var result1 = cleanse(sentence1, [ "education", "teachers", "control" ])
console.log(result1)
var result2 = cleanse(sentence2, [ "education", "teachers", "control" ])
console.log(result2)
var result3 = cleanse(sentence3, [ "education", "teachers", "control" ])
console.log(result3)
var result4 = cleanse(sentence4, [ "education", "teachers", "control" ])
console.log(result4)
var result5 = cleanse(sentence5, [ "education", "teachers", "control" ])
console.log(result5)

console.log("...script (task3withLogs.js) has run")
