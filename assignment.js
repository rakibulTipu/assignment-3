// kilometer to meter convert
function kilometerToMeter(kilometer) {
  if (kilometer < 1) {
    return "Enter a valid number";
  }
  var meter = kilometer * 1000;
  return kilometer + " kilometer = " + meter + " meter";
}

// budget calculator
function budgetCalculator(watch, phone, laptop) {
  var watchPrice = watch * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  var totalPrice = watchPrice + phonePrice + laptopPrice;
  return totalPrice;
}

// hotel cost calculation
function hotelCost(stayingDays) {
  if (stayingDays < 1) {
    return "Invalid number.";
  }
  if (stayingDays <= 10) {
    stayingPrice = stayingDays * 100;
  } else if (stayingDays <= 20) {
    var firstTenDays = 10 * 100;
    var remainingDays = stayingDays - 10;
    var extraDays = remainingDays * 80;
    stayingPrice = firstTenDays + extraDays;
  } else {
    var firstTenDays = 10 * 100;
    var extraDays = 10 * 80;
    var remainingDays = stayingDays - 20;
    var extraOtherDays = remainingDays * 50;
    stayingPrice = firstTenDays + extraDays + extraOtherDays;
  }
  return stayingPrice;
}

// take a input friends list array and return the biggest name

function megaFriend(array) {
  if (typeof array != " ") {
    return "write something valid";
  }
  var bigName = array[0];
  for (var i = 1; i < array.length; i++) {
    var element = array[i];
    if (bigName.length < element.length) {
      bigName = element;
    }
  }
  return bigName;
}
