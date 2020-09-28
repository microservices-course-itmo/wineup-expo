/** @function
 * @name containsLatinOnly
 * Returns true if string doesn't contain cyrillic chars
 *
 * @param {string} string - string to check
 */
function containsLatinOnly(string: string): boolean {
  const cyrillic = /.*[а-яА-ЯёЁ]/g

  return string.search(cyrillic) === -1
}

/** @function
 * @name isEmail
 * Returns true if string is a correct email
 *
 * An email contains latin letters, numbers, dot, gap, dash symbols.
 * Domain has at least 2 letters. The @ sign is necessary.
 *
 * @param {string} email - string to check
 * */
export function isEmail(email: string): boolean {
  const emailRegexp = /([a-zA-Z0-9\._-]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,})/

  return email.search(emailRegexp) === 0 && containsLatinOnly(email)
}

/** @function
 * @name isAllowedPassword
 * Returns true if string is a password which passes all the tests.
 *
 * An allowed password must contain at least 8 symbols, at least one uppercase letter or at least 1 numeric
 *
 * @param {string} password - string to check
 * */
export function isAllowedPassword(password: string): boolean {
  const passwordRegexp = /(?:.*[^А-Яа-яЁё]*)(?=^.{8,}$)(?=.*[a-z])((?=.*[0-9])|(?=.*[A-Z]))/

  return password.search(passwordRegexp) === 0
}
