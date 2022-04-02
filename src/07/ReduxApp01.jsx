import React, {PureComponent} from 'react';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";
import { setLoading, resetLoading } from "./actions/loadingActions";
import { setUser } from "./actions/userActions";
import { setCollection } from "./actions/collectionActions";

class ReduxApp01 extends PureComponent {
    store = configureStore({ loading: false });
    componentDidMount() {
        this.store.dispatch(setLoading(true));
        this.store.dispatch(resetLoading());
        this.store.dispatch(setUser({ name: 'Park', age: 27 }));
        this.store.dispatch(setCollection([
            { id: 1, name: 'Park', age: 27 },
            { id: 2, name: 'Choi', age: 20 },
        ]));
    }
    render() {
        return (
            <Provider store={this.store}>리덕스 예제</Provider>
        );
    }
}

export default ReduxApp01;
