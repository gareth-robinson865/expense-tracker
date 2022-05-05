let startingBalance = 0;
let currentBalance = document.getElementById("current-balance");
let numberOfReciepts = 0;

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
             newListItem.setAttribute("id", "payment"+numberOfReciepts);
             numberOfReciepts++


             //create the title element
             let titleArea = document.createElement("h3")
             titleArea.setAttribute("id", "title");
             let title = document.getElementById("who-from").value;
             let titleText = document.createTextNode(title);
             titleArea.appendChild(titleText);
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
            let amountArea = document.createElement("h5");
            amountArea.setAttribute("id", "amount");
            let amount = document.getElementById("how-much").value;
            let amountText = document.createTextNode(amount);
            amountArea.appendChild(amountText);
            newListItem.appendChild(amountArea);
            console.log(amount);

            if(value === "income") {
                newListItem.setAttribute("class", "income-display display-card");
                let incomeArea = document.getElementById("incoming");
                incomeArea.appendChild(newListItem);
                console.log("red");

                //update the current balance
                let addingAmount = parseInt(amount);
                let additionBalance = startingBalance += addingAmount;
                currentBalance.innerText = additionBalance;
            } else {
                newListItem.setAttribute("class", "outgoing-display display-card");
                let expenditureArea = document.getElementById("outgoing");
                expenditureArea.appendChild(newListItem);
                console.log("blue");

                //update the current balance
                let minusAmount = parseInt(amount);
                let minusBalance = startingBalance -= minusAmount;
                currentBalance.innerText = minusBalance;

            }
        }
    }
}
//each created payment needs to have a reference **done
//maybe use a table instead of an unordered list, need to read up on using a table

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit-btn').addEventListener('click', createPayment);
})