let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Split story into an array
let storyWords = story.split(' ');
//console.log(storyWords);
//console.log(storyWords.length);

// remove unnecessaryWords
let betterWords = storyWords.filter( words => {
  if(words !== unnecessaryWords[0] && words !== unnecessaryWords[1] && words !== unnecessaryWords[2]){
    return words;
  }
})
//console.log(betterWords.length);

//Find number of overused words
let numOfOverusedWords = storyWords.filter( words =>{
  if(words === overusedWords[0] || words === overusedWords[1] || words === overusedWords[2]){
    return words;
  }
})
//console.log(numOfOverusedWords.length);

//Find how many sentences in story
let sentences = 0
storyWords.forEach(word =>{
  if(word[word.length-1] === `.` || word[word.length-1] === `!`){
    sentences += 1;
  }
})

//console.log(sentences);
//Log wordcount, sentence count and overused word count 
const logAll = (numWord, numOverused, numSentences) => {
  console.log(`Word count: `+ numWord);
  console.log(`Number of overused words: ` + numOverused);
  console.log(`Number of sentences: ` + numSentences);
}

logAll(storyWords.length, numOfOverusedWords.length, sentences);

//Log betterWord as single string
console.log(betterWords.join(` `));
