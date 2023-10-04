function isPalindrome(word) {
  // Write your algorithm here
  word  = word.toLowerCase();
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  function isPalindrome(word)
    // Convert the word to lowercase
    word = lowercase(word)
    
    // Reverse the word
    reversedWord = reverse(word)

    // Check if the original word is equal to the reversed word
    if word is equal to reversedWord
      return true
    else
      return false

*/

/*
  Add written explanation of your solution here
  Convert the input word to lowercase to ensure case-insensitive comparison.

  Reverse the word using the reverse function.

  Compare the original word with the reversedWord. If they are equal, return true, 
  indicating that it's a palindrome; otherwise, return false.
*/

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
