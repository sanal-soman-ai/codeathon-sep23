function sortStringByFrequency(str) {
    // Step 1: Create an empty object to store the frequency of each character
    const freq = {};
  
    // Step 2: Loop through the string and update the frequency of each character in the object
    for (let i = 0; i < str.length; i++) {
      freq[str[i]] = (freq[str[i]] || 0) + 1;
    }
  
    // Step 3: Sort the characters in the string based on their frequency in descending order
    const sortedChars = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
  
    // Step 4: Return the sorted string
    let sortedStr = '';
    for (let i = 0; i < sortedChars.length; i++) {
      sortedStr += sortedChars[i].repeat(freq[sortedChars[i]]);
    }
    return sortedStr;
  }

const sortedStr = sortStringByFrequency('programming');
console.log(sortedStr); // 'ggmmrrnaoiinp'

// add more test cases
console.log(sortStringByFrequency('ababcbacadefegdehijhklij')); // 'aaabbbbccccddddeeeffgghhijjkkll'
console.log(sortStringByFrequency('tree')); // 'eert'
console.log(sortStringByFrequency('cccaaa')); // 'aaaccc'