const expenseForm = document.getElementById("expense-form");
const expenseInput = document.getElementById("expense-input");
const amountInput = document.getElementById("amount-input");
const expenseList = document.getElementById("expense-list");

let expenses = [];

expenseForm.addEventListener("submit", addExpense);

function addExpense(event) {
  event.preventDefault();

  const description = expenseInput.value;
  const amount = parseFloat(amountInput.value);

  if (description && amount) {
    const expense = {
      id: Date.now(),
      description,
      amount
    };

    expenses.push(expense);

    renderExpenses();
    expenseInput.value = "";
    amountInput.value = "";
  }
}

function renderExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${expense.description}</span>
      <span>$${expense.amount}</span>
      <button onclick="deleteExpense(${expense.id})">Delete</button>
    `;

    expenseList.appendChild(listItem);
  });
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  renderExpenses();
}