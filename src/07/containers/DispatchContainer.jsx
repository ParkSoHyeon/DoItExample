import { connect } from 'react-redux';
import ActionComponent from "../ActionComponent";

import {setAge, setCollection} from '../actions/collectionActions';
import {resetLoading, setLoading} from "../actions/loadingActions";
import {setUser} from "../actions/userActions";

// const mapDispatchToProps = dispatch => {
//     return {
//         setAge: (id, age) => dispatch(setAge(id, age)),
//     };
// };

const mapDispatchToProps = {
    setLoading,
    resetLoading,
    setUser,
    setCollection,
    setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);