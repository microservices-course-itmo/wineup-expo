const ROUTES = {
  CONFIRM_AGE: 'ConfirmAge',
  AGE_DENIED: 'AgeDenied',
  SIGN_IN: 'SignIn',
  SIGN_IN_CONFIRM: 'SignInConfirm',
  SIGN_UP: 'SignUp',
  Catalog: 'Catalog',
} as const

export type TRoutes = keyof typeof ROUTES

export default ROUTES
