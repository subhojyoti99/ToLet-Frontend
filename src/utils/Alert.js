import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
	return <MuiAlert elevation={6}
		variant="filled" {...props} />;
}

export default function App() {
	return (
		<div>
			<h4>How to use Alert Component in ReactJS?</h4>
			<Alert severity="success">Sample Success Message</Alert>
			<Alert severity="error">Sample Error Message</Alert>
		</div>
	);
}
