import "antd/dist/antd.css";
import "./snackbar.css";
import { DatePicker, message } from "antd";
import React, { useState } from "react";
import moment, { Moment } from "moment";
import {SnackBarNotificationProps} from "./input.types";

export const Comp = ({ msg }: { msg: string }) => {
  const [date, setDate] = useState(moment());
  const handleChange = (value: Moment) => {
    message.info(
      `[${msg}] Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    <>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
      </div>
    </>
  );
};

export const fun = () => 2 + 5;

export const SnackBarNotification = ({copy, theme}: SnackBarNotificationProps)  => {
  const imageSrc = theme === 'green' ? require('./images/bell.png') : require('./images/alert-circle.png');
  return (
      <div className={`snackbar-notification ${theme}`}>
        
        <div className="snackbar-notification_container">
          <img src={imageSrc} alt="notification" className="snackbar-notification_image" />
          <div className="snackbar-notification_copy">
            <p>{copy}</p>
          </div>
        </div>
      </div>
  );
}