
import {styles} from '../style'
import { SectionWrapper } from "../hoc";
//import {projects} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";
import { useState } from 'react';



const Registration = () => {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Registration Details</h2>
      <h3 className="text-lg font-semibold text-gray-700 mb-3">Join the Cosmic Quest</h3>
      <p className="text-gray-600 mb-4">
        Register to claim your seat at the galaxy’s most exclusive event. With your registration,
        you'll gain access to the two-day auction, a chance to name a planet, and a front-row seat
        to stellar entertainment.
      </p>
      <div className="text-gray-600 mb-4">
        <strong>Registration Fee:</strong> $50 (proceeds go to the 'Stars for Future' fund supporting space education)
      </div>
      <div className="text-gray-600 mb-4">
        <strong>How to Register:</strong> Fill out the registration form on our website and complete the payment process.
      </div>
      <div className="text-gray-600 mb-4">
        <strong>Deadline:</strong> Registrations close at 12:00 PM Galactic Standard Time (GST) one week before the event.
      </div>
      <div className="text-gray-600 mb-4">
        <strong>Inclusions:</strong> Access to both days of the event, a digital auction paddle, and a participant welcome kit.
      </div>
      <p className="text-gray-500 italic">
        Note: Early registrants will receive a special pre-event package with exclusive digital content.
      </p>
    </div>
  );
};

export default SectionWrapper(Registration,"")