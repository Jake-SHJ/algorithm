// Lemonade Change

// At a lemonade stand, each lemonade costs $5.
// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.
// You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example:
// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// 주어진 금액들을 통해 잔고가 0인 상황에서 모든 잔돈을 거슬러 줄 수 있는지에 대한 여부를 반환하는 문제

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = (bills) => {
  let five = 0,
    ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
      continue;
    }
    if (bills[i] === 10) {
      five--;
      ten++;
    }
    if (bills[i] === 20) {
      ten ? (ten--, five--) : (five -= 3);
    }
    if (five < 0) return false;
  }
  return true;
};

// 처음에는 5와 10을 따로 구분 안해도 되는줄 알고 시작했으나 10이 주어진다는 것을 생각해보니 다른 화폐인것을 알아챔
// map이나 set을 써야하나 고민을 했으나 discuss를 보니 심플하게 해결이 가능..
// 잔고를 하나로 관리하려 했던 것, 그리고 화폐의 갯수가 아닌 화페 단위의 총합으로 생각했던 것이 문제에 접근하기 어렵게 만들었음
