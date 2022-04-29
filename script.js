const createPayment = (ev) => {
    //prevent the page from reloading when the button is pressed
    ev.preventDefault();

    //variable for the radio buttons
    let incomeOrExpenditure = document.forms[0];

    //for loop to check which radio button is selected
    for(i=0; i < incomeOrExpenditure.length; i++) {
        if(incomeOrExpenditure[i].checked) {
            let value = incomeOrExpenditure[i].value;
             
             //create a new list item to go into the unordered list
             let newListItem = document.createElement("li");


             //create the title element
             let titleArea = document.createElement("h3")
             //set the attribute for the element
             titleArea.setAttribute("id", "title");
             //get the value of the input
             let title = document.getElementById("who-from").value;
             //create text node to be appended to the h3 element;
             let titleText = document.createTextNode(title);
             //append text to element
             titleArea.appendChild(titleText);
             //append the title to the list item
             newListItem.appendChild(titleArea);
             console.log(title);


             //create the element for what it is for
             let descriptionArea = document.createElement("p");

             descriptionArea.setAttribute("id", "description");

             let description = document.getElementById("what-for").value;

             let descriptionText = document.createTextNode(description);

             descriptionArea.appendChild(descriptionText);

             newListItem.appendChild(descriptionArea);
             console.log(description);

             //create the element for the amount paid
            let amountArea = docuement.createElement("h5");

            amountArea.setAttribute("id", "amount");

             let amount = document.getElementById("how-much");


            if(value === "income") {
               //variable to hold the income list where the new item will be appended to
                let incomeArea = document.getElementById("incoming");
                //append the li element to the unordered list
                incomeArea.appendChild(newListItem);
                console.log("red");
            } else {
                let expenditureArea = document.getElementById("outgoing");
                expenditureArea.appendChild(newListItem);
                console.log("blue");
            }
        }
    }
    //need to create control flow here for which radio button is highlighted
    //everything can happen outside of the control flow in terms of the creation of the element
    
}




//each created payment needs to have a reference

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', createPayment);
})