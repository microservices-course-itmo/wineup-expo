// eslint-disable-next-line import/prefer-default-export
export function prettifyNumber(n: number | string) {
  const [int, float] = n.toString().split('.')

  return `${int.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}.${float}`
}
