import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegisterEmp from "./RegisterEmp";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RegisterEmp />
    </QueryClientProvider>
  );
}

export default App;
