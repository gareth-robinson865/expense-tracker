const createPayment = (ev) => {
    //prevent the page from reloading when the button is pressed
    ev.preventDefault();

    //variable for the radio buttons
    let incomeOrExpenditure = document.forms[0];

    //for loop to check which radio button is selected
    for(i=0; i < incomeOrExpenditure.length; i++) {
        if(incomeOrExpenditure[i].checked) {
            let value = incomeOrExpenditure[i].value;
            console.log(value);
            console.log(incomeOrExpenditure[i].value);
            if(value === "income") {
                console.log("red");
            } else {
                console.log("blue");
            }
        }
    }
    //need to create control flow here for which radio button is highlighted
    
}

let person = document.getElementById("who-from").value;
let workCompleted = document.getElementById("what-for").value;

//each created payment needs to have a reference

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', createPayment);
})