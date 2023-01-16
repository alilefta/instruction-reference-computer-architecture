export const memRefData = {
	0: {
		desc: "AND memory word to AC",
		op: "AND",
	},
	1: {
		desc: "ADD memory word to AC",
		op: "ADD",
	},
	2: {
		desc: "Load memory word to AC",
		op: "LDA",
	},
	3: {
		desc: "Store content of AC in memory",
		op: "STA",
	},
	4: {
		desc: "Branch unconditionally",
		op: "BUN",
	},
	5: {
		desc: "Branch and save return address",
		op: "BSA",
	},
	6: {
		desc: "Increment and skip if zero",
		op: "ISZ",
	},
};

export const registerRefData = {
	7001: {
		desc: "Halt computer",
		op: "HLT",
	},
	7002: {
		desc: "Skip next instruction if E is zero",
		op: "SZE",
	},
	7004: {
		desc: "Skip next instruction if AC is zero",
		op: "SZA",
	},
	7008: {
		desc: "Skip next instruction if AC negative",
		op: "SNA",
	},
	7010: {
		desc: "Skip next instruction if AC positive",
		op: "SPA",
	},
	7020: {
		desc: "Increment AC",
		op: "INC",
	},
	7040: {
		desc: "Circulate left AC and E",
		op: "CIL",
	},
	7080: {
		desc: "Circulate right AC and E",
		op: "CIR",
	},
	7100: {
		desc: "Complement E",
		op: "CME",
	},
	7200: {
		desc: "Complement AC",
		op: "CMA",
	},
	7400: {
		desc: "Clear E",
		op: "CLE",
	},
	7800: {
		desc: "Clear AC",
		op: "CLA",
	},
};

export const ioRefData = {
	F800: {
		desc: "Input character to AC",
		op: "INP",
	},
	F400: {
		desc: "Output character from AC",
		op: "OUT",
	},
	F200: {
		desc: "Skip on input flag",
		op: "SKI",
	},
	F100: {
		desc: "Skip on output flag",
		op: "SKO",
	},
	F080: {
		desc: "Interrupt on",
		op: "ION",
	},
	F040: {
		desc: "Interrupt off",
		op: "IOF",
	},
};
