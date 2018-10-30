import * as React from 'react';
import LoanAmountInput from '../containers/LoanAmountInput';
import InterestRateInput from '../containers/InterestRateInput';
import LoanTermInput from '../containers/LoanTermInput';
import SwitchFrequency from 'src/containers/SwitchFrequency';

const App: React.StatelessComponent = () => (
	<div className="App container">
		<div className="row">
			<div className="col-sm">
				<div className="form-group">
					<label htmlFor="App-LoanAmountInput">Loan amount</label>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text">$</div>
						</div>
						<LoanAmountInput
							id="App-LoanAmountInput"
							className="form-control form-control-lg"
						/>
					</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="col-sm">
				<div className="form-group">
					<label htmlFor="App-InterestRateInput">Interest rate</label>
					<div className="input-group">
						<InterestRateInput
							id="App-InterestRateInput"
							className="form-control form-control-lg"
						/>
						<div className="input-group-append">
							<div className="input-group-text">%</div>
						</div>
					</div>
				</div>
			</div>
			<div className="col-sm">
				<div className="form-group">
					<label htmlFor="App-LoanTermInput">Loan term</label>
					<div className="input-group">
						<LoanTermInput
							id="App-LoanTermInput"
							className="form-control form-control-lg"
						/>
						<div className="input-group-append">
							<div className="input-group-text">years</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br />
		<SwitchFrequency />
	</div>
);

export default App;
