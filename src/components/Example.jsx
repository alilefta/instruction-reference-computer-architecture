import React from "react";

const Example = () => {
	return (
		<div className="accordion" id="accordionExample">
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingOne">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
					>
						Memory Reference Instruction
					</button>
				</h2>
				<div
					id="collapseOne"
					className="accordion-collapse collapse"
					aria-labelledby="headingOne"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						I is either 0 or 1 indicating direct and indirect accessing modes,
						Opcode must be between 000 and 110 inclusive, while the 12-bit
						address could be any combinations that made up to 4KB of locations.{" "}
						<br />
						<code>
							0133<sub>16</sub> = 0 000 000100110011<sub>2</sub>{" "}
						</code>
						<br />
						<code>
							2A49<sub>16</sub> = 0 010 101001001001<sub>2</sub>
						</code>{" "}
						<br />
						<code>
							BC24
							<sub>16</sub> = 1 011 110000100100<sub>2</sub>
						</code>
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingTwo">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseTwo"
						aria-expanded="false"
						aria-controls="collapseTwo"
					>
						Register Reference Instruction
					</button>
				</h2>
				<div
					id="collapseTwo"
					className="accordion-collapse collapse"
					aria-labelledby="headingTwo"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						I must be 0, Opcode must be 111, while the 12-bit address must form
						with the I and Opcode bits to be between 7001 and 7800 inclusive.{" "}
						<br />
						<code>
							7001<sub>16</sub> = 0111 0000 0000 0001<sub>2</sub>{" "}
						</code>
						<br />
						<code>
							7002
							<sub>16</sub> = 0111 0000 0000 0010<sub>2</sub>
						</code>
						<br />
						<code>
							7800
							<sub>16</sub> = 0111 1000 0000 0000<sub>2</sub>
						</code>
					</div>
				</div>
			</div>
			<div className="accordion-item">
				<h2 className="accordion-header" id="headingThree">
					<button
						className="accordion-button collapsed"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#collapseThree"
						aria-expanded="false"
						aria-controls="collapseThree"
					>
						Input-Output Reference Instruction
					</button>
				</h2>
				<div
					id="collapseThree"
					className="accordion-collapse collapse"
					aria-labelledby="headingThree"
					data-bs-parent="#accordionExample"
				>
					<div className="accordion-body">
						I must be 1, Opcode must be 111, while the 12-bit address must form
						with the I and Opcode bits to be between F040 and F800 inclusive.
						<br />
						<code>
							F040<sub>16</sub> = 1 111 000001000000<sub>2</sub>
						</code>
						<br />
						<code>
							F200
							<sub>16</sub> = 1 111 001000000000<sub>2</sub>
						</code>
						<br />
						<code>
							F400
							<sub>16</sub> = 1 111 010000000000<sub>2</sub>
						</code>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Example;
