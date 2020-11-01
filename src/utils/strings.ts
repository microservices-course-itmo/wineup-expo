// eslint-disable-next-line import/prefer-default-export
export function prettifyNumber(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
