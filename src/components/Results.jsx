import React from "react";
import { useEffect } from "react";

const Results = ({ instructionType, instructionOp, instructionOpDesc }) => {
	return (
		<div
			className="col-12 col-lg-6 p-4"
			style={{
				padding: "1rem",
				display: "flex",
				flexDirection: "column",
				alignItems: "start",
			}}
			id="results"
		>
			<h3>Results:</h3>
			<h5>Instruction type:</h5>
			<p id="instructionType">{instructionType}</p>
			<h5>Symbol:</h5>
			<p id="instructionOp">{instructionOp}</p>
			<h5>Operation Description:</h5>
			<p id="instructionOpDesc">{instructionOpDesc}</p>
		</div>
	);
};

export default Results;
