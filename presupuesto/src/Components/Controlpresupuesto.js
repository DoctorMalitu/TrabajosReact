import React, { Fragment } from 'react';
import { resivarPresupuesto} from '../helpers';
import PropTypes from 'prop-types';


const ControlPresupuesto = ({presupuesto, restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: ${presupuesto}
            </div>  
            <div className={resivarPresupuesto(presupuesto, restante)}>
                Rastante: $ {restante}
            </div>

        </Fragment>
     );
}

ControlPresupuesto.propTypes ={
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;