let accountHolder = "Sakshi Chavan";
let balance = 10000;

function checkBalance() {
    console.log("Current Balance: ₹" + balance);
}

function deposit(amount) {
    balance += amount;
    console.log("₹" + amount + " deposited successfully.");
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("₹" + amount + " withdrawn successfully.");
    } else {
        console.log("Insufficient Balance.");
    }
}

console.log("===== ATM SIMULATOR =====");
console.log("Account Holder: " + accountHolder);

console.log("\nChecking Balance:");
checkBalance();

console.log("\nDepositing Money:");
deposit(5000);

console.log("\nChecking Balance:");
checkBalance();

console.log("\nWithdrawing Money:");
withdraw(3000);

console.log("\nFinal Balance:");
checkBalance();