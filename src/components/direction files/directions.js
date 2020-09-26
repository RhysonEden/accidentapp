import React from "react";
import "./directions.css";

const Directions = () => {
  return (
    <>
      <p class="spacing">Then follow the following steps:</p>
      <ul>
        <li class="spaceunder">
          Call your direct supervisor right away. Tell them exactly what
          happened that resulted in bodily injury or a motor vehicle accident.
        </li>
        <li class="spaceunder">
          Call 911 in order to obtain a police report if you were involved in a
          motor vehicle crash with another vehicle. Wait for the police to come
          and do their job; do not engage with the other people from other
          vehicles involved in the crash. In addition, do not admit guilt or
          fault in any accident situation.
        </li>
        <li class="spaceunder">
          Obtain a Witness Statement from anyone who may have seen what happened
          and is willing to help. These witnesses can be bystanders, people in
          other vehicles, or customers at the job site. Your manager will also
          collect witness statements from other Guardian employees who saw what
          happened.
        </li>
        <li class="spaceunder">
          Work with your manager to complete a thorough investigation of the
          accident or injury, which will include several different forms and
          statements. Your manager will have these forms available for you at
          the branch or will bring them to the scene of the accident or injury.
        </li>
        <li class="spaceunder">
          Maintain contact with your manager and with HR for the duration of the
          investigation and/or any time you are out of work due to the accident
          or injury. If you seek medical care, save every document and receipt
          to send to
          <a href="mailto:HR@guardianfueltech.com"> Guardian HR </a>
          as soon as you are able.
        </li>
      </ul>
      <p class="color">
        If your vehicle is involved in a minor cosmetic-damage incident, such as
        swiping a bumper pole, and there are NO other vehicles involved, this
        should be reported to{" "}
        <a href="mailto:NWood@guardianfueltech.com"> Nancy Wood </a>right away
        via email. You do not need to report these incidents to the Accident and
        Injury Line. Take pictures of your vehicle and VIN, and the item you
        came in contact with, and send those to Nancy.
      </p>
    </>
  );
};

export default Directions;
