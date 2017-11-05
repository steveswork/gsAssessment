import React from 'react';
import { Button } from 'react-bootstrap';

export default ({ onEnter }) => <div className='welcome'>
	<h3>Welcome</h3>
	<div>
		<p>
			You are welcomed to the GS Assessment. Since you are here now, hopefully, it is safe to assume that you are not simply taking a tour around the campus but to indeed participate in the assessment. In that case, take a full breathe to calm your nerves and clear your head. When yoau ready to proceed, please click the 'Enter' button below. 
		</p>
		<p>
			Keep in mind that the test must be completed in one take. So once you enter the assessment site, you may not disengage until you have completed the assessment. If you disengage, your endeavors up until the point of your disengagement may not be saved for continuation at a future date. You may skip a question and revisit previouly answered questions. At the completion of the assessment, your score will be revealed to you. 
		</p>
		<p>
			Good luck!
		</p>
	</div>
	<div>
		<Button onClick={ onEnter }>Enter</Button>
	</div>
</div>
