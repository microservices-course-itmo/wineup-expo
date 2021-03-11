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
 * Returns true if name has length of 2 to 15 chars and contains only cirillic and latin letters
 * Returns underfined if name string is empty
 *
 * @param {string} name - name to check
 */
export function isName(name: string): boolean {
  const nameRegexp = /^([a-zA-Zа-яА-ЯёЁ]{2,15})$/

  if (name.length === 0) return false

  return name.search(nameRegexp) === 0
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

/** @function
 * @name isRightCode
 *
 * Checks if the confirmation code is the same as the right code from back-end
 * Right now the right code is 123456
 *
 * @param {string} code - string to check
 */
export function isRightCode(code: string): boolean {
  return code === '123456'
}

export type User = {
  accessToken: string
  refreshToken: string
  user: {
    birthdate: string
    cityId: number
    id: string
    name: string
    phoneNumber: string
    role: string
  }
}

/** Phone number validation
 *
 * @param userPhone User phone number
 *
 * @returns boolean
 *
 */
export function isPhoneValid(userPhone: string) {
  return userPhone.length === 12 && userPhone[0] === '+' && userPhone[1] === '7'
}

/** Prettify date to the correct end-point string format
 *
 * @param birthday birthday Date
 *
 * @returns dd.MM.yyyy string
 *
 */
export function toBirthdayString(birthday: Date): string {
  return `${`0${birthday.getDate()}`.slice(-2)}.${`0${
    birthday.getMonth() + 1
  }`.slice(-2)}.${birthday.getFullYear()}`
}
