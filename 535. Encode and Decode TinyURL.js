/**
 * TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
 */

 // method 1: easy hash map
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const map = new Map()
var encode = function(longUrl) {
    map.set(map.size,longUrl)
    return "http://tinyurl.com/" + (map.size -1)
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return map.get(parseInt(shortUrl.replace("http://tinyurl.com/","")))
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

 // method 2 random number

const hashMap = new Map()

var encode = function(longUrl) {
    const encodeString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let en = ""
    for (let i = 0; i < 3; i++){
        en += encodeString.charAt(Math.floor(Math.random() * encodeString.length))
    }
    hashMap.set(en, longUrl)
    return "http://www.example.html/" + en
};

var decode = function(shortUrl) {
    return hashMap.get(shortUrl.replace("http://www.example.html/",""))
};