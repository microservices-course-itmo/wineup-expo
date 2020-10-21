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

export default containsLatinOnly
