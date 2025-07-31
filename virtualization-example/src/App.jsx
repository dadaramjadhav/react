import React, { Suspense, lazy } from "react";

// Lazy import
const MyList = lazy(() => import("./MyList"));

function App() {
  return (
    <>
      <h1>Virtualization example</h1>
      <Suspense fallback={<div>Loading list...</div>}>
        <MyList />
      </Suspense>
    </>
  );
}

export default App;
