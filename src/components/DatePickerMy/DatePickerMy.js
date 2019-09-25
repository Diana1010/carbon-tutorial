import React from 'react';
import { DatePicker,DatePickerInput } from 'carbon-components-react';

function DatePickerMy() {
  return (
    <div style={{width: 300}}>
       <DatePicker
            id="date-picker"
            datePickerType="single"
          >
          <DatePickerInput
            id="date-picker-input-id"
            className="some-class"
            labelText="Date Picker label"
            pattern="d{1,2}/d{4}"
            placeholder="mm/dd/yyyy"
            invalidText="A valid value is required"
            iconDescription="Icon description"
/>
</DatePicker>

    </div>
  );
}



export default DatePickerMy;
