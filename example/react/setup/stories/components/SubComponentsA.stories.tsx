import React from "react";
import { storiesOf } from "@storybook/react";

import SubComponentsA from "../../src/components/SubComponentsA";
import SubComponentsB from "../../src/components/SubComponentsB";

storiesOf("sub", SubComponentsA)
    .add('SubComponentsA/default', () => (<SubComponentsA/>))
    .add('SubComponentsB/default', () => (<SubComponentsB/>))
