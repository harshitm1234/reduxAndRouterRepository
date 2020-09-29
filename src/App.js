import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./header";
import Page from "./pages/Page";

import historyConstants from "./constants/historyConstants";
import payloadConstants from "./constants/payloadConstants";

function App(props) {

	/**
	 * Get Api's data by making fetch calls
	 */
	async function getData() {
		try {
			const historyData = await fetch("https://api.spacexdata.com/v3/history");
			const payloadData = await fetch("https://api.spacexdata.com/v3/payloads");
			let allResult = Promise.all([historyData, payloadData]);
			allResult = await allResult;

			/**
			 * Check if object is response type
			 */
			if (allResult[0] instanceof Response) {
				const historyJsonData = await allResult[0].json();
				props.onSetHistoryData(historyJsonData);
			} else {
				props.onSetHistoryData(allResult[0]);
			}

			/**
			 * Check if object is response type
			 */
			if (allResult[1] instanceof Response) {
				const payloadJsonData = await allResult[1].json();
				props.onSetpayLoadData(payloadJsonData);
			} else {
				console.log(allResult[0]);
			}

			props.onSetLoading(false);
		} catch (err) {

			// Can be used to log User errors

			props.onSetLoading(false);
		}
	}

	/**
	 * Fetch data on component mounts
	 */
	useEffect(() => {
		getData();
	}, []);

	return (
		<Router>
			<Header />
			<div className="App">
				{!props.isLoading ? (
					<Switch>
						<Route exact path="/">
							{props.historyData?.length ? (
								<Page
									key="History"
									title="History Data"
									data={props.historyData}
									constants={historyConstants}
								/>
							) : (
									<h1> No Data</h1>
								)}
						</Route>
						<Route path="/payload">
							{props.payloadData?.length ? (
								<Page
									key="Payload"
									title="Payload Data"
									data={props.payloadData}
									constants={payloadConstants}
								/>
							) : (
									<h1> No Data</h1>
								)}
						</Route>
						<Route path="*">
							<h1>You are lost!!</h1>
						</Route>
					</Switch>
				) : (
						<center>
							<h1>Loading.....</h1>
						</center>
					)}
			</div>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		historyData: state.historyData,
		payloadData: state.payloadData,
		isLoading: state.isLoading,
	};
};

const mapDispatchtoProps = (dispatch) => {
	return {
		onSetpayLoadData: (data) =>
			dispatch({ type: "SET_PayLoadData", payload: { payloadData: data } }),
		onSetHistoryData: (data) =>
			dispatch({ type: "SET_HistoryData", payload: { historyData: data } }),
		onSetLoading: (data) => dispatch({ type: "SET_Loading", payload: { setLoading: data } }),
	};
};

export default connect(mapStateToProps, mapDispatchtoProps)(App);
