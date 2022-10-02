console.log('WORKING');
let n = 1;
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.text())
    .then(json => console.log(json))

document.getElementById('button').addEventListener('click', () => {
    document.getElementById('mod').style.visibility = "hidden";
    document.getElementById('bdy').style.visibility = "visible";
    let pp = document.getElementById('pp').value;
    fetch('https://jsonplaceholder.typicode.com/todos/' + pp)
    .then((response) => {
        if (!response.ok) {
            alert("No DATA found.");
            throw new Error("No DATA found.");
        }
        return response.json();
    })
    .then((data) => this.displayDATA(data));
});
function displayDATA(data) {
    const { id } = data;
    const { userId } = data;
    const { title } = data;
    const { completed } = data;
    document.getElementById('id').value = id;
    document.getElementById('uid').value = userId;
    document.getElementById('tt').value = completed;
    document.getElementById('com').innerText = title;
}
let c=document.getElementById('x');
c.innerText="Created By Romijul";
c.style.color='red';
    // let x=prompt('Enter Number ');
    
// fetch('https://jsonplaceholder.typicode.com/todos/'+pp)
// .then((response) => {
//     if (!response.ok) {
//         alert("No DATA found.");
//         throw new Error("No DATA found.");
//     }
//     return response.json();
// })
// .then((data)=>this.displayDATA(data));


