import React from 'react'

function App() {


  return(
    <div>
     <BrowserRouter>
     <Router>
        <Route path='/' element={<Dashboard/>}></Route>
     </Router>
     </BrowserRouter>
    </div>
  )
}

export default App
