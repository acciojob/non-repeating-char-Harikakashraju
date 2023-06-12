//your JS code here. If required
	function prompt() {
  const input = prompt("Enter a string:");
  let charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (charCount[char] === 1) {
      alert("The first non-repeated character is: " + char);
      return char;
    }
  }

  alert("There are no non-repeated characters in the input string.");
  return null;
}

prompt();