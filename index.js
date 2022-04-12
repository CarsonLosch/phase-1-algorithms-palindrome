function isPalindrome(word) {
  // Write your algorithm here
  let halfString = Math.floor(word.length / 2)
  for(let i = 0; i < halfString; i++)
    if(word[i] !== word[word.length - i - 1])
      return false;
    else
    return true;
}

/* 
  Add your pseudocode here
  function isPalindrome takes in 1 Arg "String"
  compares string to itself somehow to see if is palinodrome
  if it is comparable to the orignal string return true
  otherwise return false
*/

/*
  Add written explanation of your solution here
  By dividing the word in 2 we should be able to compare the front to the end 
  then iterating through up until that halfway point "should be an even number of letters"
  if the word[i] "character" is the same as the character at the end which should be comparable to return true if not return false*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
