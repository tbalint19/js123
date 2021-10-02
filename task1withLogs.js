console.log("script (task1withLogs.js) will run now...")

var account1 = {
  id: 1,
  name: "Kovács Béla",
  balance: 100,
  transactions: [
    { amount: 100, isSuccessful: true, type: "deposit", date: "2020.01.12." },
    { amount: 10, isSuccessful: true, type: "withdraw", date: "2020.01.13." },
    { amount: 80, isSuccessful: true, type: "deposit", date: "2020.01.14." },
    { amount: 300, isSuccessful: true, type: "deposit", date: "2020.01.15." },
    { amount: 300000, isSuccessful: false, type: "deposit", date: "2020.01.16." },
    { amount: 500, isSuccessful: true, type: "deposit", date: "2020.01.11." },
  ]
}

/*
var account2 = {
  id: 2,
  name: "Varga Lajos",
  balance: 200,
  transactions: [
    { amount: 100, isSuccessful: true, type: "deposit", date: "2020.01.12." },
    { amount: 20, isSuccessful: true, type: "withdraw", date: "2020.01.13." },
    { amount: 400, isSuccessful: false, type: "deposit", date: "2020.01.14." },
  ]
}

var account3 = {
  id: 3,
  name: "Nagy Kázmér",
  balance: 300,
  transactions: [
    { amount: 100, isSuccessful: true, type: "deposit", date: "2020.01.12." },
    { amount: 10, isSuccessful: true, type: "withdraw", date: "2020.01.13." },
    { amount: 300, isSuccessful: false, type: "deposit", date: "2020.01.14." },
  ]
}
*/

console.log("variables created")

console.log("will declare the function now...")

function getDateOfHighestDeposit(account) {
  console.log("getDateOfHighestDeposit will run now...")
  console.log("this time getDateOfHighestDeposit is was called with ", account)
  var dateOfHighest = null
  var amountOfHighest = 0
  console.log("value of dateOfHighest is null now - ", dateOfHighest)
  console.log("value of amountOfHighest is 0 now - ", amountOfHighest)

  console.log("will perform the same task for every transaction for the given account's transactions - ", account.transactions)
  for (var transaction of account.transactions) {
    console.log("--- block will run now ---");
    console.log("in this loop, it works with this transaction - ", transaction)
    console.log("right now, the highest amount that we know of is ", amountOfHighest)
    var isRelevant = transaction.type == "deposit" && transaction.isSuccessful
    console.log("is this transaction relevant (is it a successful deposit)?", isRelevant)
    if (isRelevant && transaction.amount > amountOfHighest) {
      console.log("the current transaction is relevant AND its value is higher than highest amount that we have seen so far")
      amountOfHighest = transaction.amount
      dateOfHighest = transaction.date
      console.log("amount of highest is updated - ", amountOfHighest)
      console.log("...and also the date of the highest - ", dateOfHighest)
      console.log("(in the next round, we will compare to these updated values)")
    } else {
      console.log("in the else branch - the transaction was not relevant OR its amount was not higher than the highest we have seen")
      console.log("in this branch nothing happens - we only log some stuff, completely unnecessary for the function to work")
      console.log("no update has happened in this branch!")
      console.log("amountOfHighest is still ", amountOfHighest)
      console.log("dateOfHighest is still ", dateOfHighest)
      console.log("(in the next round, we will compare to these values again)")
    }
    console.log("--- end of block (next iteration will come, if there are more items in the array) ---");
  }
  console.log("value of dateOfHighest in the end is ", dateOfHighest)
  return dateOfHighest
}

console.log("function (getDateOfHighestDeposit) is declared, but has not been called yet")

var result1 = getDateOfHighestDeposit(account1)
console.log("The result of dateOfHighest was returned by the function, and it was saved to a variable, i can be used here and now")
console.log(result1)
//var result2 = getDateOfHighestDeposit(account2)
//var result3 = getDateOfHighestDeposit(account3)

console.log("...script (task1withLogs.js) has run")
