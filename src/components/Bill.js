import React, { useState } from "react";

const Bill = () => {
	const [ticket, setTicket] = useState({
		bill: 0,
		tipPercent: 0,
		split: 1,
	});

	const handleChange = (e) => {
		setTicket({
			...ticket,
			[e.target.name]: parseInt(e.target.value),
		});
	};
	const { bill, tipPercent, split } = ticket;

	function formatMoney(value) {
		value = Math.ceil(value * 100) / 100;
		value = value.toFixed(2);
		return "$" + value;
	}

	const tip = bill * (tipPercent / 100);
	const total = bill + tip;
	const billEach = bill / split;
	const tipEach = tip / split;
	const totalEach = billEach + tipEach;

	return (
		<>
			{/* Bill section */}
			<section>
				<div className="bill">
					<label htmlFor="yourBill">Bill</label>
					<input
						type="number"
						placeholder="Your bill"
						id="yourBill"
						name="bill"
						onChange={handleChange}
						value={bill}
					/>
				</div>
				<div>
					<div className="space-between">
						<label htmlFor="">Select tip</label>
						<span>{tipPercent} %</span>
					</div>
					<input
						type="range"
						defaultValue="0"
						className="range"
						name="tipPercent"
						onChange={handleChange}
						value={tipPercent}
					/>
				</div>
				<div className="space-between">
					<span>Tip</span>
					<span>{formatMoney(tip)}</span>
				</div>
				<hr />
				<div className="space-between total">
					<span>Total</span>
					<span>{formatMoney(total)}</span>
				</div>
			</section>

			{/* Split section */}
			<section>
				<div>
					<div className="space-between">
						<label htmlFor="">Split</label>
						<span id="splitValue">
							{split === 1 ? split + " person" : split + " people"}
						</span>
					</div>
					<input
						type="range"
						min="1"
						max="10"
						defaultValue="1"
						className="range"
						name="split"
						onChange={handleChange}
						value={split}
					/>
				</div>
				<div className="space-between">
					<span>Bill each</span>
					<span id="billEach">{formatMoney(billEach)}</span>
				</div>
				<div className="space-between">
					<span>Tip each</span>
					<span id="tipEach">{formatMoney(tipEach)}</span>
				</div>
				<hr></hr>
				<div className="space-between total">
					<span>Total</span>
					<span>{formatMoney(totalEach)}</span>
				</div>
			</section>
		</>
	);
};

export default Bill;
