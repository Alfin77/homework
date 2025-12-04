function capitalizeName(fullName) {
    var parts = fullName.split(" "); 

    var firstName = parts[0];
    var lastName = parts[1];

    var capFirst =
        firstName.charAt(0).toUpperCase() + firstName.slice(1);

    var capLast =
        lastName.charAt(0).toUpperCase() + lastName.slice(1);

    return capFirst + " " + capLast;
}

module.exports = capitalizeName;