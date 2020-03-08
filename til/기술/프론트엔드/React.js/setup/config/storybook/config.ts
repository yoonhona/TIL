import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.tsx in src/components
const req = require.context('../../stories', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
