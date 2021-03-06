import React, { Component } from 'react';
import { Text, View } from 'react-native';

class FlexDimensionsBasics extends Component {
	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch'
				}}>
				<View
					style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
				/>
				<View style={{ height: 50, backgroundColor: 'skyblue' }} />
				<View style={{ height: 100, backgroundColor: 'steelblue' }} />
			</View>
		);
	}
}
const App = () => <FlexDimensionsBasics />;
export default App;
