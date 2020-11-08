// eslint-disable-next-line import/prefer-default-export
export function deeplyApplyKeyTransform(
  obj: any,
  transform: (key: string) => string
) {
  const ret: Record<string, any> = Array.isArray(obj) ? [] : {}

  Object.keys(obj).forEach((key) => {
    if (obj[key] != null && typeof obj[key] === 'object') {
      ret[transform(key)] = deeplyApplyKeyTransform(obj[key], transform)
    } else {
      ret[transform(key)] = obj[key]
    }
  })

  return ret
}
