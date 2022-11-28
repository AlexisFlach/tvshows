import React, { ErrorInfo, ReactElement } from "react";
interface ErrorBoundaryState {
  hasError: boolean
  message: string
}
interface ErrorboundaryProps {
  children: ReactElement
}
export class ErrorBoundaries extends React.Component<ErrorboundaryProps, ErrorBoundaryState>{
  constructor(props: ErrorboundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      message: ""
    }
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ hasError: true })
    this.setState({ message: error.message })
  }

  handleGoBack = () => {
    window.history.back()
  }
  render(): React.ReactNode {
    if (this.state?.hasError) {
      return (
        <div className="divClass">
          <p><h3>Error</h3></p>
          {this.state.message}
          <button onClick={this.handleGoBack}>Go back</button>
        </div>
      )
    }
    return (this.props.children)
  }
}