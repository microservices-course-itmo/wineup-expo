/** function latinCheck*/
// no cyrillic letters allowed
function latinCheck(string: string): boolean {
    const cyrillic = /.*[а-яА-ЯёЁ]/g;

    return string.search(cyrillic) === -1;
  }

  /** function emailCheck*/
  // email must contain latin letters, numbers, dot, gap and dash. domain has at least 2 letters.
  // parts of email are separated with @ sign
  export function emailCheck(email: string): boolean {
    const emailRegexp = /([a-zA-Z0-9\._-]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,})/;

    return email.search(emailRegexp) === 0 && latinCheck(email);
  }

/** function passwordCheck*/
  // password must contain at least 8 symbols, at least 1 upper case letter or at least 1 numeric.
  export function passwordCheck(password: string): boolean {
    const passwordRegexp = /(?:.*[^А-Яа-яЁё]*)(?=^.{8,}$)(?=.*[a-z])((?=.*[0-9])|(?=.*[A-Z]))/;

    return password.search(passwordRegexp) === 0;
  }
  