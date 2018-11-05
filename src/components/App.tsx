import * as React from 'react';
import LoanAmountInput from '../containers/LoanAmountInput';
import InterestRateInput from '../containers/InterestRateInput';
import LoanTermInput from '../containers/LoanTermInput';
import SwitchFrequency from '../containers/SwitchFrequency';
import RepaymentTable from '../containers/RepaymentTable';

const App: React.StatelessComponent = () => (
	<div className="App container mb-5">
		<header>
			<h1 className="mt-5 mb-5">Repayment calculator</h1>
		</header>
		<section className="card mt-5 mb-5">
			<div className="card-body">
				<h2 className="mb-4">Loan details</h2>
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
			</div>
		</section>
		<section className="card mt-5 mb-5">
			<div className="card-header">
				<h2 className="mb-4">Repayments</h2>
				<SwitchFrequency />
			</div>
			<div className="card-body p-0 pt-3">
				<RepaymentTable />
			</div>
		</section>
	</div>
);

export default App;
