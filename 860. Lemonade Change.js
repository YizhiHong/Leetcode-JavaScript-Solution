/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let cashs = {
    "5": 0,
    "10": 0,
    "20": 0
  };

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 10) {
      if (cashs["5"] === 0) {
        return false;
      } else {
        cashs["5"]--;
        cashs["10"]++;
      }
    } else if (bills[i] === 20) {
      if (cashs["10"] > 0 && cashs["5"] > 0) {
        cashs["5"]--;
        cashs["10"]--;
        cashs["20"]++;
      } else if (cashs["5"] > 2) {
        cashs["5"] = cashs["5"] - 3;
        cashs["20"]++;
      } else {
        return false;
      }
    } else {
      cashs["5"]++;
    }
  }

  return true;
};

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0,
    ten = 0;
  for (let pay of bills) {
    if (pay === 10) {
      five--;
      ten++;
    } else if (pay === 5) {
      five++;
    } else if (ten > 0) {
      five--;
      ten--;
    } else {
      five = five - 3;
    }

    if (five < 0) return false;
  }

  return true;
};
