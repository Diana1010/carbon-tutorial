import React from 'react';
import { Dropdown } from 'carbon-components-react';


// Given that we have the following rows with the fields `foo`, `bar`, and `baz`


// We would have a headers array like the following



// Inside of your component's `render` method
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
          items={[
           {id:'Hello'} 
          ]}

          itemToString={itemToString}
          onChange={anonymous}
        />
    </div>
  );
}



export default MyDropdown;
