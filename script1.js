let btn2=document.getElementById('button2');
let btn1=document.getElementById('button1');
btn2.addEventListener('click',()=>{
    let text=document.getElementById('com').value;
    let api=`https://api.mymemory.translated.net/get?q=${text}&langpair=la|en`; //to change from to change la(from)|en(to)
    // console.log(api);
    fetch(api).then((response) => {
        if (!response.ok) {
            alert("No DATA found.");
            throw new Error("No DATA found.");
        }
        return response.json();
    })
    .then((data) => displayyDATA(data));
    // .then((data) => console.log(data));
    function displayyDATA(data){
        document.getElementById('com').value=data.responseData.translatedText;
    }
});
btn1.addEventListener('click',()=>{
    window.location='index.html';
});
let x=document.getElementById('com');
x.addEventListener('click',()=>{
    let uutr;
    uutr=new SpeechSynthesisUtterance(x.value);
    uutr.lang='en-US';
    speechSynthesis.speak(uutr);
});
// let text=document.getElementById('com').value;
// let api=`https://api.mymemory.translated.net/get?q=${text}&langpair=la|bn`;
// console.log(api);
// fetch(api).then((response) => {
//     if (!response.ok) {
//         alert("No DATA found.");
//         throw new Error("No DATA found.");
//     }
//     return response.json();
// })
// // .then((data) => displayyDATA(data));
// .then((data) => console.log(data));

// function displayyDATA(data){
//     document.getElementById('com').value=data.responseData.translatedText;
// }
// const dima=document.getElementsByTagName('body')[0];
// const dima=document.getElementById('pol');
// let image='https://aws.random.cat/meow';
// let image='https://nekos.best/api/v2/neko';
// fetch('https://random-d.uk/api').then(res=>res.json()).then((data)=>{dima.innerHTML=`<img src="${data.file}"/>`;console.log(data)});