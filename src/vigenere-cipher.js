class VigenereCipheringMachine {
    constructor(inverted = true) {
        this.inverted = inverted;
        this.tabula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.position = 0;
    }

    encrypt(str, key) {
        let result = '';

        if (!str || !key){
            throw new Error();
        }

       let msg = str.toUpperCase();
       key = key.toUpperCase();

        while (key.length < msg.length) {
            key += key;
        }

        for (let i = 0, j = 0; i < msg.length; i++ , j++) {
            if (this.tabula.includes(msg[i])) {
                this.position = this.tabula.indexOf(msg[i]) + this.tabula.indexOf(key[j])
                if (this.position >= this.tabula.length) {
                    this.position -= this.tabula.length;
                }
                result += this.tabula[this.position];
            } else {
                result += msg[i];
                j--;
            }
        }

        return (this.inverted) ? result : result.split('').reverse().join('')
    };

    decrypt(str, key) {
        let result = '';

        if (!str || !key){
            throw new Error();
        }

        let msg = str.toUpperCase();
        key = key.toUpperCase();

        while (key.length < msg.length) {
            key += key;
        }

        for (let i = 0, j = 0; i < msg.length; i++ , j++) {
            if (this.tabula.includes(msg[i])) {
                this.position = this.tabula.indexOf(msg[i]) - this.tabula.indexOf(key[j])
                if (this.position < 0) {
                    this.position += this.tabula.length;
                }
                result += this.tabula[this.position];
            } else {
                result += msg[i];
                j--;
            }
        }

        return (this.inverted) ? result : result.split('').reverse().join('')
    };

}

module.exports = VigenereCipheringMachine;
