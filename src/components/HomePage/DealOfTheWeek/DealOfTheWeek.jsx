import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../DealOfTheWeek/DealOfTheWeek.scss';

class DealOfTheWeek extends PureComponent {
	render() {
		return (
			<div>
				{/* Deal of the week */}
				<div className="deal_ofthe_week">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-6">
								<div className="deal_ofthe_week_img">
									<img src="images/deal_ofthe_week.png" alt="" />
								</div>
							</div>
							<div className="col-lg-6 text-right deal_ofthe_week_col">
								<div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
									<div className="section_title">
										<h2>Deal Of The Week</h2>
									</div>
									<ul className="timer">
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="day" className="timer_num">
												03
											</div>
											<div className="timer_unit">Day</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="hour" className="timer_num">
												15
											</div>
											<div className="timer_unit">Hours</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="minute" className="timer_num">
												45
											</div>
											<div className="timer_unit">Mins</div>
										</li>
										<li className="d-inline-flex flex-column justify-content-center align-items-center">
											<div id="second" className="timer_num">
												23
											</div>
											<div className="timer_unit">Sec</div>
										</li>
									</ul>
									<div className="deal_ofthe_week_button">
										<span><NavLink exact to="/shop">
											shop now
										</NavLink></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

DealOfTheWeek.propTypes = {};

export default DealOfTheWeek;
