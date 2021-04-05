import React, { Component, ReactNode } from 'react'
import Error from '../screens/Error'

interface Props {
  children: ReactNode
  fallBack?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  // ебаный eslint
  // public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
  //   console.error('Uncaught error:', error, errorInfo)
  // }

  public render(): ReactNode {
    const { children, fallBack } = this.props
    const { hasError } = this.state
    const ErrorComponent = fallBack || <Error />

    return hasError ? ErrorComponent : children
  }
}

export default ErrorBoundary
