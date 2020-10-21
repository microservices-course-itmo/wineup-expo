import containsLatinOnly from './containsLatinOnly'

/** @function
 * @name isEmail
 * Returns true if string is a correct email
 *
 * An email contains latin letters, numbers, dot, gap, dash symbols.
 * Domain has at least 2 letters. The @ sign is necessary.
 *
 * @param {string} email - string to check
 * */
function isEmail(email: string): boolean {
  const emailRegexp = /([a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,})/

  if (!email) return false

  return email.search(emailRegexp) === 0 && containsLatinOnly(email)
}

export default isEmail
