import React, { Component, ErrorInfo, PropsWithChildren } from 'react';

type ErrorBoundaryState = { hasError: boolean; error: string | null };

class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError = (error: Error) => {
		return { hasError: true, error: error.message };
	};

	componentDidCatch(error: Error, info: ErrorInfo): void {
		this.setState({ hasError: true, error: error.message });
	}

	render() {
		const { children } = this.props;
		const { hasError, error } = this.state;
		if (hasError) {
			return (
				<div className="ErrorMessage">
					<h4>
						ERROR:
						{error}
					</h4>
				</div>
			);
		}

		return children;
	}
}

export default ErrorBoundary;
