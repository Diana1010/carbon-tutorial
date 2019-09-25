import React from 'react';
import DataTable from '../../components/DataTable';
import TableSkeleton from '../../components/TableSkeleton';
const LandingPage = () => {
  const element = (<React.Fragment>
    <div>
      <DataTable /> 
    </div>
    <div>
      <TableSkeleton />
    </div>
    </React.Fragment>);
  return element;
};
export default LandingPage;
