// the problem "kayak" => true
// "prblem" => false

// thinking

//

// declarative way ....
function checkPalindrome(str) {
  const splited = str.toLowerCase().split("");
  let countFor = 0;
  let countBack = splited.length - 1;
  const middle = Math.floor(splited.length / 2);
  let tracker = true;
  while (countBack > middle && tracker) {
    if (splited[countBack] === splited[countFor]) {
      countBack--;
      countFor++;
    } else {
      tracker = false;
    }
  }
  if (tracker) {
    console.log("true");
  } else {
    console.log("false");
  }
}

// fucntional way ....
function checkPalindromee(str) {
    console.log(str === str.split("").reverse("").join(""));
}

checkPalindromee("anna");
