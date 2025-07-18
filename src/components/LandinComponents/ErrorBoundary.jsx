import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasErro: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error(
            "Error caught by ErrorBoundary".replace,
            error,
            errorInfo
        );
    }
    render() {
        if (this.state.hasErro) {
            return (
                <div className="text-center py-20">
                    <h1 className="text-3xl font-bold text-red-600">
                        Something Went Wrong
                    </h1>
                    <p className="mt-4 text-gray-600">
                        {this.state.error?.message}
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
