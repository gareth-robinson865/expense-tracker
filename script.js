const createPayment = (ev) => {
    //prevent the page from reloading when the button is pressed
    ev.preventDefault();

    //variable for the radio buttons
    let incomeOrExpenditure = document.forms[0];

    //for loop to check which radio button is selected
    for(i=0; i < incomeOrExpenditure.length; i++) {
        if(incomeOrExpenditure[i].checked) {
            let value = incomeOrExpenditure[i].value;
            if(value === "income") {
                //variable to hold the income list where the new item will be appended to
                let incomeArea = document.getElementById("incoming");

                //create a new list item to go into the unordered list
                let newListItem = document.createElement("li");


                //create the title element
                let titleArea = document.createElement("h3")
                //set the attribute for the element
                titleArea.setAttribute("id", "title");
                //get the value of the input
                let title = document.getElementById("what-for").value;

                
                console.log(title);










                console.log("red");
            } else {
                console.log("blue");
            }
        }
    }
    //need to create control flow here for which radio button is highlighted
    
}

let person = document.getElementById("who-from").value;


//each created payment needs to have a reference

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', createPayment);
})