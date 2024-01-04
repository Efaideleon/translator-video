import React, { Component, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode; // Optional fallback UI
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = { hasError: false };

    static getDerivedStateFromError(): { hasError: boolean } {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback || <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
