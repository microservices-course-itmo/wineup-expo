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
 * @name isName
 *
 * Checks if the name exists and is not an empty string
 *
 * @param {string} name - string to check
 * */
export function isName(name: string): boolean {
  return !(!name)
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
  const emailRegexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,})/

  if (!email) return false

  return email.search(emailRegexp) === 0 && containsLatinOnly(email)
}

/** @function
 * @name isPhone
 * Returns true if string is a correct Russian phone number
 *
 * A Russian phone number contains 11 digits, the first is either 7 or 8.
 * If the first digit is 7 it may also contain a '+' sign
 *
 * @param {string} phone - string to check
 * */
export function isPhone(phone: string): boolean {
  const phoneRegexp = /\+?[7-8][0-9]{10}/

  if (!phone) return false

  return phone.search(phoneRegexp) === 0
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

  if (!password) return false

  return password.search(passwordRegexp) === 0
}
