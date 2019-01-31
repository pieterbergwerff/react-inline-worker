# react-inline-worker

A inline worker React renderprop component

https://pieterbergwerff.github.io/react-inline-worker/

```js
import React from 'react';
import ReactDOM from 'react-dom';
import InlineWorker from 'react-inline-worker';

function App() {
	const fn = () => {
		self.onmessage = ({ data }) => {
			console.log(data); // { var1: 'var one', var2: 'var two' }
			postMessage('Hello from worker!');
		};
	};

	return (
		<InlineWorker
			fn={fn}
			data={{
				var1: 'var one',
				var2: 'var two',
			}}
		>
			{({ loading, error, data }) => {
				if (loading) {
					return false;
				}
				if (error) {
					return <div>Error: {error}</div>;
				}
				return <div>Worker message: {data}</div>; // data: 'Hello from worker!'
			}}
		</InlineWorker>
	);
}

ReactDOM.render(<App />, document.querySelector('.root'));
```
