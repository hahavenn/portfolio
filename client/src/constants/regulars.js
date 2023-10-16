// email regular expression
const REG_email = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+)/g;

// letters and numbers
const REG_letter_number = /[\w]/g;
const REG_not_letter_number = /[\`\~\!\@\"\#\№\$\;\:\%^\&\?\*\(\)\-\+\=\{\}\[\]\'\<\>\,\.\/\|\\]/g;

export { REG_email, REG_letter_number, REG_not_letter_number };
