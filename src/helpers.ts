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
 * @name isCode
 *
 * Checks if the confirmation code is a six digit number
 *
 * @param {string} code - string to check
 * */
export function isCode(code: string): boolean {
  if (!code) return true

  return code.length === 6
}

/** @function
 * @name isRightCode
 *
 * Checks if the confirmation code is the same as the right code from back-end
 * Right now the right code is 123456
 *
 * @param {string} code - string to check
 */
export function isRightCode(code: string): boolean {
  if (code.length < 6) return true

  return code === '123456'
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

  if (!email) return true

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

  if (!phone) return true

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

  if (!password) return true

  return password.search(passwordRegexp) === 0
}
