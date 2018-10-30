import * as React from 'react';
import LoanAmountInput from '../containers/LoanAmountInput';

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
	</div>
);

export default App;
