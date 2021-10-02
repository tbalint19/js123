var account1 = {
  id: 1,
  name: "Kovács Béla",
  balance: 100,
  transactions: [
    { amount: 100, isSuccessful: true, type: "deposit", date: "2020.01.12." },
    { amount: 10, isSuccessful: true, type: "withdraw", date: "2020.01.13." },
    { amount: 300, isSuccessful: false, type: "deposit", date: "2020.01.14." },
  ]
}

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

function getDateOfHighestDeposit(account) {
  var dateOfHighest = null
  var amountOfHighest = 0

  for (var transaction of account.transactions) {
    var isRelevant = transaction.type == "deposit" && transaction.isSuccessful
    if (isRelevant && transaction.amount > amountOfHighest) {
      dateOfHighest = transaction.date
      amountOfHighest = transaction.amount
    }
  }

  return dateOfHighest
}

var result1 = getDateOfHighestDeposit(account1)
var result2 = getDateOfHighestDeposit(account2)
var result3 = getDateOfHighestDeposit(account3)
