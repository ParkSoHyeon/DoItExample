import React, {PureComponent} from 'react';
import SearchFilterInputContainer from "./containers/SearchFilterInputContainer";
import SearchResetButtonContainer from "./containers/SearchResetButtonContainer";
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import SearchResultTableContainer from "./containers/SearchResultTableContainer";
import {setCollection} from "./actions/collectionActions";

class SearchFilterReduxApp extends PureComponent {
    store = configureStore({ loading: false });
    render() {
        this.store.dispatch(setCollection([
            { id: 21, name: 'John', age: 20 },
            { id: 34, name: 'Justin', age: 40 },
            { id: 56, name: 'Mary', age: 29 },
        ]));
        return (
            <Provider store={this.store}>
                리덕스 예제
                <fieldset>
                    <SearchFilterInputContainer type="number" name="id" label="아이디 검색" />
                    <SearchFilterInputContainer type="text" name="name" label="이름 검색" />
                    <SearchFilterInputContainer type="number" name="age" label="나이 검색" />
                    <SearchResetButtonContainer>리셋</SearchResetButtonContainer>
                </fieldset>
                <SearchResultTableContainer />
            </Provider>
        );
    }
}

export default SearchFilterReduxApp;
