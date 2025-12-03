let userName = "Alex";
let initialBalance = 1000;
let amountAdded = 500;
let amountSpent = 700;

function updateWallet(name, balance, added, spent) {
    return (name === "guest")
        ? "Access Denied"
        : (balance + added - spent);
}

let finalBalance = updateWallet(userName, initialBalance, amountAdded, amountSpent);

console.log("Final Balance:", finalBalance);

console.log("Is Balance Greater Than 0?", finalBalance > 0);

console.log("Type of Final Balance:", typeof finalBalance);