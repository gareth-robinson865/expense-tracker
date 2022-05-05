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
             
             //getting all the data for the table items
             //create the title element
             let title = document.getElementById("who-from").value;
             let titleText = document.createTextNode(title);
             
            //create the element for what it is for
             let description = document.getElementById("what-for").value;
             let descriptionText = document.createTextNode(description);
            
             //create the element for the amount paid
            let amount = document.getElementById("how-much").value;
            let amountText = document.createTextNode(amount);

            if(value === "income") {
                let incomeTable = document.getElementById("income-table");
                let row = incomeTable.insertRow(-1);
                let whoCell = row.insertCell(0);
                let whyCell = row.insertCell(1);
                let howMuchCell = row.insertCell(2);

                whoCell.innerHTML = title;
                whyCell.innerHTML = description;
                howMuchCell.innerHTML = amount;

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