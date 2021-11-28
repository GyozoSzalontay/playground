console.log("hello")
const my_sentence = "Hello bello, szuper egy nap"

function spin_words(sentence){
  let words = sentence.split(" ");
  let newCamelArrey = [];
    words.map((i) => {
      let newWord;
      if (i.length >= 5){
        newWord = i.split("").reverse().join("")}
      else {
        newWord = i
      }
      newCamelArrey.push(newWord);
    });
    console.log(newCamelArrey.join(" "));
    return newCamelArrey.join(" ");
  }

    spin_words(my_sentence);
