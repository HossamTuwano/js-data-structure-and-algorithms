function palindrome(word) {
  let letters = [];
  let rword = "";
  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }
  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }
  if (rword === word) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrom`;
  }
}
palindrome("hossam");
palindrome("racecar");
