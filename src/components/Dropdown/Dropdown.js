import React from 'react';
import { Dropdown } from 'carbon-components-react';

function MyDropdown() {
  return (
    <div style={{width: 300}}>
        <Dropdown
          id="carbon-dropdown-example"
          label="Dropdown menu options"
          ariaLabel="Dropdown"
          titleText="This is not a dropdown title."
          helperText="This is not some helper text."
          invalid={false}
          invalidText="A valid value is required"
          items={['Option 1','Option 2','Option 3']}
         
        />
    </div>
  );
}



export default MyDropdown;
