PassCrypto
=========

Passcrypto is an easy to use tool to generate unique passwords for all your accounts, using one easy to remember phrase and the name of the account you're logging on to.

----------
## Installation ##
It's all just Javascript and HTML. Just download the files and extract them somewhere on your hard drive. There is only one call made to the internet, and that's to fetch some Google fonts.


----------
## How to use ##
Type in your easy to remember phrase in the first field, the website you're accessing in the second field, and press generate.


----------
## How does it work? ##
PassCrypto uses a Javascript implementation of hashing algorithms by [h2non](https://github.com/h2non/jshashes), specifically the SHA521 protocol. By providing the script with a set string and a changing salt, it generates unique passwords for all your accounts, which are fairly uncrackable.


----------
## TODO ##

 - Error handling upon empty fields
 - Fix that godawful CSS full height div bug
 - Locally download and serve font files
 - Find a way to safely use localStorage to cache a set of previously used salts for ease of use