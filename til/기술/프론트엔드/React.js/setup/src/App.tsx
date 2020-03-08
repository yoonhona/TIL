import React from "react";
import SubComponentsA from "src/components/SubComponentsA";

const SubComponentsB = React.lazy(() => import("src/components/SubComponentsB"));

const App = () => {
    return (
        <React.Suspense fallback={'loading.......'}>
            <div>
                Root
                <SubComponentsA/>
                <SubComponentsB/>
            </div>
        </React.Suspense>
    )
}

export default App;
