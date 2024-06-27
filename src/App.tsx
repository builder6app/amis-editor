import { lazy, Suspense } from 'react';

const Editor = lazy(() => import('./Editor'));

function App() {


  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Editor
        />
    </Suspense>
  )
}

export default App
