import {configure} from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault'

function loadStories() {
    // require('../src/stories/InputStory');
    // require('../src/stories/NewCounterStory');
    const context = require.context('../src/stories', true, /Story\.jsx$/);
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    })
}

configure(loadStories, module);