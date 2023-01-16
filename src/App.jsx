import { useState } from "react";
import "./App.css";
import Results from "./components/Results";
import { binToDecimal, binToHex } from "./assets/utils";
import { memRefData, registerRefData, ioRefData } from "./assets/data";
import { useEffect } from "react";
import Example from "./components/Example";
function App() {
	const [memData, setMemData] = useState(memRefData);
	const [registerData, setRegisterData] = useState(registerRefData);
	const [ioData, setIoData] = useState(ioRefData);
	const [iField, setIField] = useState("");
	const [opcodeField, setOpcodeField] = useState("");
	const [addressField, setAddressField] = useState("");
	const [instructionWholeInfo, setInstructionWholeInfo] = useState({
		instructionType: "",
		instructionOp: "",
		instructionOpDesc: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [generateResult, setGenerateResult] = useState(false);
	useEffect(() => {}, [instructionWholeInfo]);
	useEffect(() => {
		let id = setInterval(() => {
			setErrorMessage("");
		}, 2000);

		return () => clearInterval(id);
	}, [errorMessage]);
	function submit(e) {
		e.preventDefault();
		let instructionInfo = undefined;
		let operationInfo = undefined;
		if (iField !== "" && opcodeField !== "" && addressField !== "") {
			if (iField === "0" && opcodeField === "111") {
				//Register Reference Instruction info
				operationInfo = "Register-reference instruction";
				let val = binToHex(iField + opcodeField + addressField);
				switch (val) {
					case "7001":
						instructionInfo = registerData[val];
						break;
					case "7002":
						instructionInfo = registerData[val];
						break;

					case "7004":
						instructionInfo = registerData[val];
						break;
					case "7008":
						instructionInfo = registerData[val];
						break;
					case "7010":
						instructionInfo = registerData[val];
						break;
					case "7020":
						instructionInfo = registerData[val];
						break;
					case "7040":
						instructionInfo = registerData[val];
						break;
					case "7080":
						instructionInfo = registerData[val];
						break;
					case "7100":
						instructionInfo = registerData[val];
						break;
					case "7200":
						instructionInfo = registerData[val];
						break;
					case "7400":
						instructionInfo = registerData[val];
						break;
					case "7800":
						instructionInfo = registerData[val];
						break;
					default:
						setErrorMessage(
							`Instruction type is ${operationInfo} but the operation is not specified`
						);
				}
				if (instructionInfo !== undefined) {
					setInstructionWholeInfo({
						instructionType: operationInfo,
						instructionOp: instructionInfo?.op,
						instructionOpDesc: instructionInfo?.desc,
					});
					setGenerateResult(true);
				}
				instructionInfo = undefined;
				operationInfo = undefined;
				return;
			} else if (iField === "1" && opcodeField === "111") {
				// Input-Output
				operationInfo = "Input-Output instruction";
				let val = binToHex(iField + opcodeField + addressField);
				switch (val) {
					case "F040":
						instructionInfo = ioData[val];
						break;
					case "F080":
						instructionInfo = ioData[val];
						break;
					case "F100":
						instructionInfo = ioData[val];
						break;
					case "F200":
						instructionInfo = ioData[val];
						break;
					case "F400":
						instructionInfo = ioData[val];
						break;
					case "F800":
						instructionInfo = ioData[val];
						break;

					default:
						setErrorMessage(
							`Instruction type is ${operationInfo} but the operation is not specified`
						);
				}
				if (instructionInfo !== undefined) {
					setInstructionWholeInfo({
						instructionType: operationInfo,
						instructionOp: instructionInfo?.op,
						instructionOpDesc: instructionInfo?.desc,
					});
					setGenerateResult(true);
				}
				instructionInfo = undefined;
				operationInfo = undefined;
				return;
			} else if (iField === "0" && binToDecimal(opcodeField) <= 6) {
				// memory 1
				operationInfo = "Memory Reference instruction (direct access mode)";
				let val = binToHex(iField + opcodeField + addressField)[0];
				if (
					val == "0" ||
					val == "1" ||
					val == "3" ||
					val == "4" ||
					val == "5" ||
					val == "6"
				)
					instructionInfo = memData[val];
				else {
					setErrorMessage(
						`Instruction type is ${operationInfo} but the operation is not specified`
					);
				}
				if (instructionInfo !== undefined) {
					setInstructionWholeInfo({
						instructionType: operationInfo,
						instructionOp: instructionInfo?.op,
						instructionOpDesc: instructionInfo?.desc,
					});
					setGenerateResult(true);
				}
				instructionInfo = undefined;
				operationInfo = undefined;
				return;
			} else if (iField === "1" && binToDecimal(opcodeField) <= 6) {
				// memory 2
				operationInfo = "Memory Reference instruction (Indirect access mode)";
				let val = binToHex(iField + opcodeField + addressField)[0];

				switch (val) {
					case "8":
						instructionInfo = memData[0];
						break;
					case "9":
						instructionInfo = memData[1];
						break;
					case "A":
						instructionInfo = memData[2];
						break;
					case "B":
						instructionInfo = memData[3];
						break;
					case "C":
						instructionInfo = memData[4];
						break;
					case "D":
						instructionInfo = memData[5];
						break;
					case "E":
						instructionInfo = memData[6];
						break;
					default:
						setErrorMessage(
							`Instruction type is ${operationInfo} but the operation is not specified`
						);
				}
				if (instructionInfo !== undefined) {
					setInstructionWholeInfo({
						instructionType: operationInfo,
						instructionOp: instructionInfo?.op,
						instructionOpDesc: instructionInfo?.desc,
					});
					setGenerateResult(true);
				}
				instructionInfo = undefined;
				operationInfo = undefined;
				return;
			} else {
				throw new Error("Something wrong");
			}
		} else if (iField === "") setErrorMessage("Please, fill the iField first");
		else if (opcodeField.length < 3)
			setErrorMessage("Please, fill the Opcode field");
		else if (addressField.length < 12)
			setErrorMessage("Please, fill the address field");
	}

	return (
		<div className="App">
			<div
				className="container"
				style={{
					position: "absolute",
					left: 0,
					right: "0",
					marginLeft: "auto",
					marginRight: "auto",
					maxWidth: "900px",
					width: "600px",
				}}
			>
				{errorMessage && (
					<div className="row">
						<div className="col-12 col-lg-auto">
							<div className="alert alert-danger " role="alert">
								{errorMessage}
							</div>
						</div>
					</div>
				)}
			</div>
			<div
				className="container mt-4 "
				style={{
					backgroundColor: "#f8f9fa",
				}}
			>
				<div className="row pt-5">
					<div
						className="col-12 col-lg-6 p-4"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							height: "191.600px",
						}}
					>
						<h2 className="mb-3">Enter the instruction</h2>
						<form className="row">
							<div className="col-2">
								<label htmlFor="i-field" className="text-center">
									<h5>I</h5>
								</label>
								<input
									className="form-control"
									type="text"
									id="i-field"
									onChange={(e) =>
										[...e.target.value].filter(
											(char) => char !== "0" && char !== "1"
										).length > 0
											? setErrorMessage("The value must be 0 or 1 (BINARY)!")
											: e.target.value.length >= 0 && e.target.value.length < 2
											? setIField(e.target.value)
											: ""
									}
									value={iField}
									size={1}
								/>
							</div>
							<div className="col-3">
								<label htmlFor="opcode-field" className="text-center">
									<h5>Opcode</h5>
								</label>
								<input
									className="form-control"
									type="text"
									id="opcode-field"
									style={{
										letterSpacing: "1.1",
									}}
									size={3}
									onChange={(e) =>
										[...e.target.value].filter(
											(char) => char !== "0" && char !== "1"
										).length > 0
											? setErrorMessage("The value must be 0 or 1 (BINARY)!")
											: e.target.value.length >= 0 && e.target.value.length < 4
											? setOpcodeField(e.target.value)
											: setErrorMessage("Enter a 3-bit value")
									}
									value={opcodeField}
								/>
							</div>
							<div className="col-7">
								<label htmlFor="address-field" className="text-center">
									<h5>Address or Operation</h5>
								</label>
								<input
									className="form-control"
									type="text"
									id="address-field"
									onChange={(e) =>
										[...e.target.value].filter(
											(char) => char !== "0" && char !== "1"
										).length > 0
											? setErrorMessage("The value must be 0 or 1 (BINARY)!")
											: e.target.value.length >= 0 &&
											  e.target.value.length <= 12
											? setAddressField(e.target.value)
											: setErrorMessage("Enter a 12-bit value")
									}
									value={addressField}
								/>
							</div>
							<div className="col-6 col-lg-12 mt-4">
								<button
									type="submit"
									className="btn btn-success"
									onClick={submit}
								>
									Find Operation
								</button>
							</div>
						</form>
					</div>

					<Results {...instructionWholeInfo} />
				</div>
				<div className="row mt-4  justify-content-center align-items-center">
					<div className="col-12 col-lg-6 mb-5">
						<h2 className="mb-4">How it works?</h2>
						<Example />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
