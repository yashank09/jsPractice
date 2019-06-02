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
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseTitle = document.getElementById("expense-input");
    this.expenseValue = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //Methods and Properties

  //Show Balance
  showBalance() {
    //Calculate total amount after Budget - Expense
    const expense = this.totalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    //Set Balance to Total
    this.balanceAmount.textContent = total;

    //Change UI on Total
    if (total < 0) {
      this.balance.classList.remove("showGreen", "showBlack");
      this.balance.classList.add("showRed");
    } else if (total > 0) {
      this.balance.classList.remove("showRed", "showBlack");
      this.balance.classList.add("showGreen");
    } else if (total === 0) {
      this.balance.classList.remove("showGreen", "showRed");
      this.balance.classList.add("showBlack");
    }
  }

  totalExpense() {
    let total = 400;
    return total;
  }

  //Submit Budget Form
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

  //Submit Expense Form
  submitExpenseForm() {
    const expenseTitle = this.expenseTitle.value;
    const expenseValue = this.expenseValue.value;
    if (expenseValue === "" || expenseTitle === "" || expenseValue <= 0) {
      this.expenseFeedback.classList.add("showItem");
      this.expenseFeedback.innerHTML = `<p>Invalid Expense Item or Value.</p>`;

      const props = this;
      setTimeout(function() {
        props.expenseFeedback.classList.remove("showItem");
      }, 3200);
    } else {
      let amount = parseInt(expenseValue);
      this.expenseTitle.value = "";
      this.expenseValue.value = "";

      //Add the Expense to List
      let expense = {
        id: this.itemID,
        title: expenseTitle,
        amount
      };

      //Increment ID and add to Expenses
      this.itemID++;
      this.itemList.push(expense);
    }

    console.log(this.itemList);
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
    ui.submitExpenseForm();
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
