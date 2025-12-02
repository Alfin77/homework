let fullName = "  David Beckham  ";
let welcomeMsg = "   Welcome to the new platform! Hope you enjoy your experience here.   ";

let userData = {
    name: fullName,
    message: welcomeMsg,

    displayDetails: function () {

        console.log(" STRING OPERATIONS OUTPUT ");

        console.log("First character of name:", this.name.trim().charAt(0));

        console.log("Total characters in welcome message:", this.message.length);

        console.log("First 15 chars (slice):", this.message.slice(0, 15));

        console.log("First 15 chars (substring):", this.message.substring(0, 15));

        console.log("Full name in UPPERCASE:", this.name.toUpperCase());

        console.log("Message in lowercase:", this.message.toLowerCase());

        console.log("Trimmed message:", this.message.trim());

        let nameArray = this.name.trim().split(" ");
        console.log("Name split into array:", nameArray);

        let lowerMsg = this.message.toLowerCase();
        let position = lowerMsg.indexOf("welcome");
        console.log("Position of 'welcome':", position);

        let combined = `${this.name.trim()} - ${this.message.trim()}`;
        console.log("Combined string:", combined);
    }
};

userData.displayDetails();