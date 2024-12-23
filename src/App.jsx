import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import OnlineConsultationProvider from "@contexts/OnlineConsultationContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import PackageBookingProvider from "./contexts/PackageBookingContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <OnlineConsultationProvider>
        <PackageBookingProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        </PackageBookingProvider>
      </OnlineConsultationProvider>
    </QueryClientProvider>
  );
}

export default App;
