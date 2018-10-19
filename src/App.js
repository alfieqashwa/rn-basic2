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
					style={{ width: 100, height: 100, backgroundColor: 'powderblue' }}
				/>
				<View style={{ width: 100, height: 50, backgroundColor: 'skyblue' }} />
				<View style={{ height: 100, backgroundColor: 'steelblue' }} />
			</View>
		);
	}
}
const App = () => <FlexDimensionsBasics />;
export default App;
