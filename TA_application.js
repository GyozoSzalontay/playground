console.log("hello")
const my_sentence = "Change your life learn to code"

function spin_words(sentence){
  let words = sentence.split(" ");
  let newSentenceArrey = [];
    words.map((word) => {
      let newWord;
      if (word.length >= 5){
        newWord = word.split("").reverse().join("")}
      else {
        newWord = word
      }
      newSentenceArrey.push(newWord);
    });
    console.log(newSentenceArrey.join(" "));
    return newSentenceArrey.join(" ");
  }

    spin_words(my_sentence);
