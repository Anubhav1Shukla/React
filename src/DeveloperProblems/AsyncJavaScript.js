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


// const parchi=new Promise(function(resolve,reject){
//     fetch(`https://randomuser.me/api/`)
//     .then(raw => raw.json())
//     .then(result => {
//         if(result.results[0].gender === "female") resolve();
//         else reject();
//     });
// })

// parchi
// .then(function(){
//     console.log("hara button daba");
// })
// .catch(function(){
//     console.log("Laal button daba");
// })

// Callbacks
// callback kuch bhi ahi  ek function ho jise pass kiya gya ho kisi aur function me aur jab vo function chale
// to app us pass kiye gaye callback function ko chala paayenge  

// function abcd(a,b){
       
//         b();
//         console.log(a);

// }
// abcd(1,function(){
//     console.log("Anubhav bhai CallBack chal gya hai console me check kar. ok");
// })

// callback pahli cheej to ek function hai ,app is function wo sab likhdo jo aapko chaalana ho jab answer aajaye ,aur ise tab chalao jab aapka async code chal chuka ho
// task:--> users ka data magao and jab data aajaye to us data ke name, gender and email ko print karo

// function getData(url, callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result => {
//         callback(result);
//     })
// }


// getData(`https://randomuser.me/api/`,function(result){
//         console.log(result.results[0].gender,result.results[0].email,result.results[0].name);
// })

// function doSomeAsyncTask(url,callback){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result =>{ jab result aa jaye tab ye calback ko chaal dega anytha nahi chalayega
//             callback();
//     })
// }

// doSomeAsyncTask("Some URL",function(){

// })




// Async/Await-->

// async function abcd(){
//     let a = await fetch(`https://randomuser.me/api/`);
//     a=await a.json();
//     console.log(a);
// }


// abcd();
// Event Loop

// https://cdn.hashnode.com/res/hashnode/image/upload/v1679465144646/0ebd5972-fa46-4e32-986c-e44d11f7d750.png
// Callbacks vs Promises vs Async/Await
//ek url se data lekar aao aur use console me show karo
// Error Handling in Asynchronous Code

// Genrators

//aap program ke flow(excution) ko pause kar skate ho aur bol sakte ho ab agla step karo 
//banta kaise hai genrator koi bhi normal function jiske aage tum *  laga doge vo genrator function ban jata hai

// function* gen(){
//     console.log("Started")
//     yield 1;
//     console.log("Pahla chal chuka");
//     yield 2;
//     console.log("Dusra chal chuka");
//     yield 3;
    
// }


// const ans=gen();
// console.log(ans.next());
// console.log(ans.next());
// console.log(ans.next());

// task---> 1-10 print

function* allNums(){
    for(var i=1; i<11; i++){
        yield i;
    }
}
const gen =allNums();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Web Workers
// usally hamara code single threaded par chalta hai par kai baar kuch bade calculation perform
//karne padte hai jiski wajah se aapka main thresd busy ho jaata hai yaa fir wo kaafi jaada loaded ho jaata hai aur aapke baaki tasks ki performance kam ho jati hai
// is situaton ko aache se handle karne ke liye we use web workers,kaise aise aap chaho to apna koi task web worker ko bhej sakte ho jo ki doosre thread mein usko perform karega and aapka main thread efficiently bbakki cheejo ko handle karega 
// aap apni js file se data send kr sakte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data waapas main file bhejoge and main file mein waapas aacept karoge

var nums =Array.from({length:10000000},(_,b)=>b+1)
const worker=new Worker("worker.js");
worker.postMessage(nums);
worker.onmessage=function(data){
    console.log(data.data);
}


// AJAX --> through fetch and Axios
