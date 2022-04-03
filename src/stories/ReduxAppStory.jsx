import React from 'react';
import { storiesOf } from "@storybook/react";
import ReduxApp01 from "../07/ReduxApp01";
import ReduxApp02 from "../07/ReduxApp02";
import SearchFilterReduxApp from "../07/SearchFilterReduxApp";

storiesOf('ReduxApp', module)
    .addWithJSX('기본 스토어 설정', () => <ReduxApp01 />)
    .addWithJSX('데이터 컴포넌트 예제', () => <ReduxApp02 />)
    .addWithJSX('검색창 예제', () => <SearchFilterReduxApp />)
