import React, {Fragment} from 'react';
import spinner from '../../common/images/spinner.svg';

export default () => {
 return (
  <Fragment>
   <img
    src={spinner}
    style={{width: '200px', margin: 'auto', display: 'block'}}
    alt='Loading...'
   />
  </Fragment>
 );
};
