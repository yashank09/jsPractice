class UI {
  constructor() {
    //Get all elements to access
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.budget = document.getElementById("budget");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //Methods and Properties

  //Submit Form
  submitBudgetForm() {
    const budgetValue = this.budgetInput.value;

    //Checking Budget Input
    if (budgetValue === "" || budgetValue <= 0) {
      this.budgetFeedback.classList.add("showItem");
      this.budgetFeedback.innerHTML = `<p>Invalid Amount</p>`;

      //Getting `this` for timeout
      const props = this;

      //Removing Feedback error
      setTimeout(function() {
        props.budgetFeedback.classList.remove("showItem");
      }, 3200);
    } else {
      this.budgetAmount.textContent = budgetValue;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }

  //Show Balance
  showBalance() {
    //Calculate total amount after Budget - Expense
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    //Set Balance to Total
    this.balanceAmount.textContent = total;

    //Change UI on Total
    if (total <= 0) {
      this.balance.classList.add("showRed");
      this.budget.classList.remove("color");
      this.budget.classList.add("showRed");
    }
  }

  totalExpense() {
    let total = 400;
    return total;
  }
}

//Adding listeners to forms
function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  //Starting new instance of UI Class
  const ui = new UI();

  //Event listener for Budget Form
  budgetForm.addEventListener("submit", function(e) {
    e.preventDefault();
    ui.submitBudgetForm();
  });

  //Event listener for Expense Form
  expenseForm.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Expense Submitted");
  });

  //Event listener for Expense List
  expenseList.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("List Submitted");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  eventListeners();
});
