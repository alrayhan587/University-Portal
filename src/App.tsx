import { Mainlayout } from "./components/layout/Mainlayout"
import ProtectedRoute from "./components/layout/ProtectedRoute"


function App() {


  return (
    <ProtectedRoute role={undefined}>
      <Mainlayout />
    </ProtectedRoute>

  )
}

export default App
