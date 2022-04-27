const createPayment = (ev) => {
    //prevent the page from reloading when the button is pressed
    ev.preventDefault();
}

let person = document.getElementById("who-from").value;
let workCompleted = document.getElementById("what-for").value;

//each created payment needs to have a reference