// email regular expression
const REG_EMAIL = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+)/g;

// letters and numbers
const REG_LETTER_NUMBER = /[\w]/g;
const REG_NOT_LETTER_NUMBER = /[\`\~\!\@\"\#\№\$\;\:\%^\&\?\*\(\)\-\+\=\{\}\[\]\'\<\>\,\.\/\|\\]/g;

// spaces
const REG_NO_SPACE = /\s/g;

export { REG_EMAIL, REG_LETTER_NUMBER, REG_NOT_LETTER_NUMBER, REG_NO_SPACE };
