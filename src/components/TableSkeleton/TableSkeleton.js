import React from 'react';
import { DataTableSkeleton  } from 'carbon-components-react';



function TableSkeleton() {
  return (
    <div style={{width: '800px'}}>
      <DataTableSkeleton headers={[
          'Name',
          'Protocol',
          'Port'
        ]} 
        rowCount = {1}/>
      <br/>
    </div>
  );
}



export default TableSkeleton;
