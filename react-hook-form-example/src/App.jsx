import { AdvancedForm } from "./AdvancedForm";
import BasicForm from "./BasicForm";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GetUser } from "./GetUser";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GetUser />
        {/* <AdvancedForm /> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
