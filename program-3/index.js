function validateIPAddress(ipAddress) {
    const ipArr = ipAddress.split('.');
    if (ipArr.length !== 4) {
        return false;
    }
    for (let i = 0; i < 4; i++) {
        const num = parseInt(ipArr[i]);
        if (isNaN(num) || num < 0 || num > 255 || (num.toString() !== ipArr[i])) {
            return false;
        }
    }
    return true;
}

console.log(validateIPAddress('192.168.0.1')); // true
console.log(validateIPAddress('0.0.0.0')); // true
console.log(validateIPAddress('255.255.255.255')); // true
console.log(validateIPAddress('256.0.0.0')); // false
console.log(validateIPAddress('192.168.0')); // false
console.log(validateIPAddress('192.168.0.1.2')); // false
