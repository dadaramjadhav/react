import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error, info)
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.hasError &&
      prevProps.resetKeys &&
      this.props.resetKeys &&
      this.props.resetKeys.some((key, index) => key !== prevProps.resetKeys[index])
    ) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again.</h2>
    }

    return this.props.children
  }
}

export default ErrorBoundary
