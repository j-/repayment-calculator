import * as React from 'react';

export function debounce <T = {}>(delay: number, Component: React.ComponentType<T>) {
	interface State {
		props: T;
		nextProps: T;
	}

	return class extends React.Component<T, State> {
		static displayName = `Debounce(${Component.displayName || Component.name || 'Unknown'})`;

		timer: NodeJS.Timeout;

		constructor (props: T) {
			super(props);
			this.state = {
				props: props,
				nextProps: props,
			};
		}

		componentDidMount () {
			// Set timer as soon as component is mounted
			// Props are already set
			this.timer = setTimeout(this.handleTimeout, delay);
		}

		componentWillUnmount () {
			// Stop waiting for more props
			clearTimeout(this.timer);
			// Clear out timer
			delete this.timer;
			// Next render will immediately use these props
			this.setState((state) => ({
				props: state.nextProps,
			}));
		}

		componentWillReceiveProps (nextProps: T) {
			// Props have been updated and there is no timer
			if (this.timer === undefined) {
				// Start the timer
				this.timer = setTimeout(this.handleTimeout, delay);
				// Immediately update the output props
				this.setState({
					props: nextProps,
				});
			// Props have been updated but there is a timer
			} else {
				// Stop the timer
				clearTimeout(this.timer);
				// Start the timer
				this.timer = setTimeout(this.handleTimeout, delay);
				// Save these props for later
				this.setState({
					nextProps,
				});
			}
		}

		render () {
			return <Component {...this.state.props} />;
		}

		private handleTimeout = () => {
			this.setState((state) => {
				// Clear out timer
				delete this.timer;
				// Update the props
				return {
					props: state.nextProps,
				};
			});
		};
	}
}
