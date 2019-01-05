import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactInlineWorker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			errors: [],
			data: null,
		};
		this.worker = null;
		this._onMessageHandler = this._onMessageHandler.bind(this);
		this._onErrorHandler = this._onErrorHandler.bind(this);
	}

	static getDerivedStateFromError(error) {
		const { errors } = this.state;
		const newErrors = [...errors];
		newErrors.push(error);
		return { errors: newErrors };
	}

	componentDidCatch(error, info) {
		console.error(error, info);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.loading !== nextState.loading) return true;
		if (this.state.errors.length !== nextState.errors.length) return true;
		if (this.state.data !== nextState.data) return true;
		return false;
	}

	componentDidMount() {
		let { errors } = this.state;
		if (this.available()) {
			const { fn, data } = this.props;
			const blob = new Blob([`(${fn.toString()})()`], {
				type: 'text/javascript',
			});
			this.worker = new Worker(window.URL.createObjectURL(blob));
			this.worker.addEventListener('message', this._onMessageHandler, false);
			this.worker.addEventListener('error', this._onErrorHandler, false);
			this.worker.postMessage(data);
		} else {
			const newErrors = [...errors];
			newErrors.push('Workers not available');
			this.setState({ errors: newErrors });
		}
	}

	componentWillUnmount() {
		this.worker.removeEventListener('message', this._onMessageHandler);
		this.worker.removeEventListener('error', this._onErrorHandler);
		this.worker = null;
	}

	render() {
		const { loading, errors, data } = this.state;
		const { children } = this.props;
		if (!children || typeof children !== 'function') return this.renderError();
		return children({ loading, errors: errors.length ? errors : false, data });
	}

	_onMessageHandler({ data }) {
		this.setState({ data, loading: false }, () => {
			this.worker.terminate();
		});
	}

	_onErrorHandler(err) {
		const { errors } = this.state;
		const errorTxt = `'ERROR: Line ${err.lineno} in ${err.filename}: ${
			err.message
		}`;
		const newErrors = [...errors];
		newErrors.push(errorTxt);
		this.setState({ errors: newErrors, loading: false }, () => {
			this.worker.terminate();
		});
	}

	available() {
		let available = false;
		try {
			if (window && window.Worker) {
				available = true;
			}
		} catch (err) {}
		return available;
	}

	renderError() {
		const { children } = this.props;
		console.error(`Must provide children as a function!`);
		return children || null;
	}
}

ReactInlineWorker.defaultProps = {
	fn: null,
	data: {},
};

ReactInlineWorker.propTypes = {
	fn: PropTypes.func,
	data: PropTypes.object,
};
