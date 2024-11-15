const BASE62_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const urlMap = new Map<string, string>();
const uniqueIds = new Set<string>();

function generateUniqueId(): number {
  return Math.floor(Math.random() * 1000000);
}

function encode(longUrl: string): string {
  let uniqueId = generateUniqueId();
  while (uniqueIds.has(uniqueId.toString())) {
    uniqueId = generateUniqueId();
  }
  uniqueIds.add(uniqueId.toString());
  urlMap.set(uniqueId.toString(), longUrl);

  let encode = "";
  let remainder = uniqueId;
  const base = BASE62_ALPHABET.length;

  while (remainder > 0) {
    const remain = remainder % base;
    encode = BASE62_ALPHABET[remain] + encode;
    remainder = Math.floor(remainder / base);
  }
  return `https://short.com/${encode}`;
}

function decode(shortUrl: string): string {
  const randomString = shortUrl.slice(18);
  const base = BASE62_ALPHABET.length;
  let uniqueId = 0;
  for (let i = 0; i < randomString.length; i++) {
    const char = randomString[i];
    const index = BASE62_ALPHABET.indexOf(char);
    uniqueId = uniqueId * base + index;
  }
  const url = urlMap.get(uniqueId.toString());
  if (!url) {
    return "Get rotated! Thats not a valid tiny URL";
  }

  return url;
}

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

// Input: url = "https://leetcode.com/problems/design-tinyurl"
console.log(encode("https://leetcode.com/problems/design-tinyurl"));
console.log(decode(encode("https://leetcode.com/problems/design-tinyurl")));
// Output: "https://leetcode.com/problems/design-tinyurl"

// Explanation:
// Solution obj = new Solution();
// string tiny = obj.encode(url); // returns the encoded tiny url.
// string ans = obj.decode(tiny); // returns the original url after decoding it.
