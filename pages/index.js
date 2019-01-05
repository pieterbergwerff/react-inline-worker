import React, { Component } from 'react';
import InlineWorker from '../src';
import { Row, Col, Card, Icon, Spin, Divider, Button, Alert } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import '../style/main.css';
import 'antd/dist/antd.css';

const fn = () => {
	self.onmessage = ({ data }) => {
		var to = setTimeout(() => {
			postMessage('Hello world!');
		}, 1000);
	};
};

export default () => (
	<div>
		<Row>
			<Col span={1}>&nbsp;</Col>
			<Col span={22}>
				<Card
					title={
						<>
							<Icon type="info-circle" theme="twoTone" />
							&nbsp;&nbsp;react-inline-worker
						</>
					}
				>
					<Card bordered={false}>
						<Divider>Install</Divider>
						<SyntaxHighlighter language="bash" style={docco}>
							{[
								`npm install react-inline-worker`,
								`// or`,
								`yarn add react-inline-worker`,
							].join('\n')}
						</SyntaxHighlighter>
					</Card>
					<HelloWorldExample />
					<FetchApiExample />
				</Card>
			</Col>
			<Col span={1}>&nbsp;</Col>
		</Row>
		<Row>
			<Col>
				<Card className="center">
					This demo is build with{' '}
					<a href="//nextjs.org" target="_blank">
						nextjs
					</a>
					,{' '}
					<a href="//ant.design" target="_blank">
						ant.design
					</a>{' '}
					and{' '}
					<a
						href="https://www.npmjs.com/package/react-syntax-highlighter"
						target="_blank"
					>
						react-syntax-highlighter
					</a>
					.
				</Card>
			</Col>
		</Row>
	</div>
);

function HelloWorldExample() {
	return (
		<Example
			title="Get a 'Hello world!'"
			description={
				<>
					Use the worker to receive a simple <i>Hello world</i>.
				</>
			}
			code={[
				`import React from 'react';`,
				`import InlineWorker from 'react-inline-worker';`,
				``,
				`function fn(){`,
				`  postMessage('Hello world!');`,
				`}`,
				``,
				`function HelloWorldExample(){`,
				`  return <InlineWorker fn={fn}>{({ loading, error, data }) => {`,
				`    if (loading) return 'loading...';`,
				`    if (error) return 'Errors!';`,
				`    console.log(data); // Hello world!`,
				`    return <div>Message from worker: {data}</div>;`,
				`  }}</InlineWorker>;`,
				`}`,
				``,
				`export default HelloWorldExample;`,
			]}
			RunComponent={({ onReady }) => {
				function fn() {
					postMessage('Hello world!');
				}
				return (
					<InlineWorker fn={fn}>
						{({ loading, error, data }) => {
							if (loading) return <Spin />;
							if (error) return 'Errors!';
							onReady();
							return data;
						}}
					</InlineWorker>
				);
			}}
		/>
	);
}

function FetchApiExample() {
	return (
		<Example
			title="Fetch json API"
			description={
				<>
					This example fetches your IP address from{' '}
					<i>
						<a href="//ipify.org" target="_blank">
							ipify.org
						</a>
					</i>
					.
				</>
			}
			code={[
				`import React from 'react';`,
				`import InlineWorker from 'react-inline-worker';`,
				``,
				`function fn(){`,
				`  onmessage = function({ data }) {`,
				`    fetch(data.url)`,
				`      .then(result => result.json())`,
				`      .then(data => {`,
				`        postMessage(data);`,
				`      })`,
				`      .catch(err => {`,
				`        postMessage(err);`,
				`      });`,
				`  }`,
				`}`,
				``,
				`function FetchMyIpAddress(){`,
				`  return <InlineWorker fn={fn} data={{ url: 'https://api.ipify.org?format=json' }}>`,
				`    {({ loading, error, data }) => {`,
				`      if (loading) return 'loading...';`,
				`      if (error) return 'Errors!';`,
				`      console.log(data); // object`,
				`      return <div>My IP address from worker: {data.ip}</div>;`,
				`    }}`,
				`  </InlineWorker>;`,
				`}`,
				``,
				`export default FetchMyIpAddress;`,
			]}
			RunComponent={({ onReady }) => {
				function fn() {
					onmessage = function({ data }) {
						fetch(data.url)
							.then(result => result.json())
							.then(data => {
								postMessage(data);
							})
							.catch(err => {
								postMessage(err);
							});
					};
				}
				return (
					<InlineWorker
						fn={fn}
						data={{ url: 'https://api.ipify.org?format=json' }}
					>
						{({ loading, error, data }) => {
							if (loading) return <Spin />;
							if (error) return 'Errors!';
							onReady();
							return JSON.stringify(data, undefined, 2);
						}}
					</InlineWorker>
				);
			}}
		/>
	);
}

class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			running: false,
			loading: false,
			reset: false,
		};
	}
	render() {
		const { title, description, code, RunComponent } = this.props;
		const { running, loading, reset } = this.state;

		return (
			<div className="example">
				<Divider>{title}</Divider>
				<Row gutter={16}>
					<Col span={18}>
						<Card bordered={false}>
							<p>{description}</p>
							<div className="block">
								<SyntaxHighlighter language="javascript" style={docco}>
									{code.join('\n')}
								</SyntaxHighlighter>
							</div>
						</Card>
					</Col>
					<Col span={6}>
						<Card bordered={false}>
							<Button
								type={reset ? 'ghost' : 'primary'}
								disabled={loading ? true : false}
								onClick={() => {
									if (reset) {
										this.setState({
											running: false,
											loading: false,
											reset: false,
										});
									} else {
										this.setState({ running: true });
									}
								}}
							>
								{loading ? <Icon type="loading" /> : reset ? 'Reset' : 'Run'}
							</Button>
							{running ? (
								<div className="block">
									<Alert message={<b>Results</b>} type="success" />
									<Card bordered={false}>
										<RunComponent
											onReady={() => {
												this.setState({ loading: false, reset: true });
											}}
										/>
									</Card>
								</div>
							) : (
								false
							)}
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
