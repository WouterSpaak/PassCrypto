/**
 * TODO: Error handling!
 * */

document.addEventListener("DOMContentLoaded", function(event) { 

    var PassCrypto = function () {

        // Hasher instantiate
        this.hasher = new Hashes.SHA512();

        // Properties
        this.button = document.querySelectorAll('#generate');
        this.passphrase = document.querySelector('#password');
        this.salt = document.querySelector('#salt');
        this.resultField = document.querySelector('#result-field');

        var _this = this;

        // private methods
        var passErrorMessage  = function (error) {
            _this.resultField.textContent = error;
        };
        
        var hashedSalt = function (salt) {
            return _this.hasher.hex(salt);
        };
        
        var generatePassword = function (passphrase, salt) {
            var passLength = passphrase.length + 1;
            var generatedHash = _this.hasher.hex_hmac(passphrase, salt);
            return generatedHash.substring(0, passLength);
        };
        
        // init function
        this.init = function () {
            _this.button[0].addEventListener('click', function (event) {
                event.preventDefault();
                _this.resultField.textContent = generatePassword(_this.passphrase.value, hashedSalt(_this.salt.value));
            });
        };
    };
    
    var p = new PassCrypto();
    p.init();
});