import React, {PureComponent} from 'react';
import { Provider } from 'react-redux';
import configureStore from "./configureStore";
import {setAge, setCollection} from "./actions/collectionActions";
import PresentationComponent from "./PresentationComponent";
import ContainerComponent from "./containers/ContainerComponent";
import DispatchContainer from "./containers/DispatchContainer";

class ReduxApp02 extends PureComponent {
    store = configureStore({ loading: false });
    componentDidMount() {
        this.store.dispatch(setCollection([
            { id: 1, name: 'Park', age: 27 },
            { id: 2, name: 'Choi', age: 20 },
        ]));
        this.store.dispatch(setAge(2, 35));
        const { collection } = this.store.getState();
        const { ids, entities } = collection;
        const originalPayload = ids.map(id => entities[id]);
        console.log(originalPayload);
    }
    render() {
        return (
            <Provider store={this.store}>
                화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
                <br />
                데이터 컴포넌트: <ContainerComponent id={2} />
                <br />
                액션 데이터 컴포넌트: <DispatchContainer />
            </Provider>
        );
    }
}

export default ReduxApp02;
