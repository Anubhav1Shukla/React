// ASYNC JS

// Aisa koi bhi code jise kuch time lagta hai JS me use bydefault in most cases async code maan kar side stack me daal diya jata hai

// settimeout:-->Settimeout ka code kuchh der baad chalta hai
// console.log("hey1");
// console.log("hey2");
// setTimeout(function(){
//     console.log("Hey3!");
// },1000)
// console.log("Hey4!");

// var count=1;
// const humarainterval=setInterval(function(){
//     count++;
//     console.log(count);
//     if(count===3) clearInterval(humarainterval);
// }, 1000)

// setinterval:-->Setinterval ka code kuchh der baad chalta baar baar ek particular interval time mein
// setInterval(() => {
//     console.log("Anubhav");
// },2000);

// Fetch API:-->Ye kisi aur url (API) par jaa kar kuchh der data laayega ya data humaare pass se us url(API) par lekar jaayega
//kyuki ye internet par jayega aur fir data ko lekkar aayega to isme time lagta hai to by default hi js mein fetch ko async banaya gaya hai kyuki fetch ka kaam hai data laana wo bhi kisi url se an aisa ho sakta hai us url ki website slow ho aur agar fetch sync hota uske baad ka code tab tak nahi chalata jab uska data nahi jayega jiske karad problem hota
// fetch(`https://randomuser.me/api/`).then(raw => raw.json())
// .then(readable => console.log(readable));
// console.log("Anubhav");


// Axios (or other HTTP Libraries):-->Ye thoda jayde developer friendly hai ye bhi fetch API ka kaam karega.


// axios.get(`https://randomuser.me/api/`).then(result =>console.log(result.data.results[0]));

// promise:-->Ye jaanab ke andar jo code likhoge  wo apna kaam karega aur ye khud side stack me chale jayenge us code ko lekkar aur jab andar se code ke resolve kiya jayega tab ye chalenge

//kuchh code socho man mein, jo ki async code ho, matlab ki ye
// side stack mein jaayega aur baad mei chalega main stack ke, ab
// ye socho ki aapne is code ko likha hai to iska answer kabhi
// aayega aur aisa bhi ho sakta hai kis answer naa aaye, promises
// kya hai aisa samjho ki aap promise ke andar koi bhi async code
// likhdo jo man mein aaye aur promise aapko ek parchi dedeta hai
// and wo parchi par by default likha hota hai waiting, parchi par
// do events hote hai mainly ek event ka naam hai then aur ek event
// ka naam hai catch, agar aapka data aagaya to parchi pe completed
// likhjaayega waiting ki jagah and then chalega aur agar data mein 
//dikkat aayi to catch chalega and waiting ki jagah rejected likh jayega


const parchi=new Promise(function(resolve,reject){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        if(result.results[0].gender === "female") resolve();
        else reject();
    });
})

parchi
.then(function(){
    console.log("hara button daba");
})
.catch(function(){
    console.log("Laal button daba");
})

// Callbacks
// Promises
// Async/Await
// Event Loop
// Callbacks vs Promises vs Async/Await
// Genrators
// Error Handling in Asynchronous Code
// Web Workers
// AJAX
