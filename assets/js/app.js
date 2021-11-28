//varibles
const tweetlist= document.getElementById('tweet-list');



//event listeners
eventlistener();

function eventlistener(){
    document.querySelector('#form').addEventListener('submit',newtweet );
    tweetlist.addEventListener('click',removetweet);
    document.addEventListener('DOMContentLoaded',localStorageOnLoad);
}

function newtweet(e){
    e.preventDefault();
    const tweet= document.querySelector('#tweet').value;
    const removebtn= document.createElement('a');
    removebtn.classList='remove-tweet';
    removebtn.textContent='X';

    const li= document.createElement('li');
    li.textContent= tweet;

    li.appendChild(removebtn);
    tweetlist.appendChild(li);

    addtweetlocalstorage(tweet);
    alert('Tweet Added!');
    this.reset();
}

function removetweet(e){
  if(e.target.classList.contains('remove-tweet')){
      e.target.parentElement.remove();
  }
  removeTweetLocalStorage(e.target.parentElement.textContent);
}

function addtweetlocalstorage(tweet){
    let tweets= gettweetfromlocalstorage();
    tweets.push(tweet);
    localStorage.setItem('tweets',JSON.stringify(tweets));
}

function gettweetfromlocalstorage(){
    let tweets;
    const tweetls= localStorage.getItem('tweets');
    if(tweetls==null)
    {
         tweets=[];
    }
    else{
        tweets=JSON.parse(tweetls);
    }
    return tweets;
}
function localStorageOnLoad(){
    let tweets= gettweetfromlocalstorage();
    tweets.forEach(function(tweet){
    const removebtn= document.createElement('a');
    removebtn.classList='remove-tweet';
    removebtn.textContent='X';

    const li= document.createElement('li');
    li.textContent= tweet;

    li.appendChild(removebtn);
    tweetlist.appendChild(li);
    });
}
function removeTweetLocalStorage(tweet){
let tweets= gettweetfromlocalstorage();
const tweetdelete= tweet.substring(0,tweet.length-1);
tweets.forEach(function(tweetls,index){
    if(tweetdelete === tweetls)
    {
        tweets.splice(index,1);
    }
});
localStorage.setItem('tweets',JSON.stringify(tweets));
}