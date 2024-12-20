import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import OnlineConsultationProvider from "@contexts/OnlineConsultationContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OnlineConsultationProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </OnlineConsultationProvider>
    </QueryClientProvider>
  );
}

export default App;
