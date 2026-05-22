import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import TopBar from "@/components/TopBar";
import RadialMenu from "@/components/RadialMenu";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Objectives from "@/pages/Objectives";
import Impact from "@/pages/Impact";
import Team from "@/pages/Team";
import Innovation from "@/pages/Innovation";
import Funding from "@/pages/Funding";
import GetInvolved from "@/pages/GetInvolved";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
      <RadialMenu />
    </>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/objectives" component={Objectives} />
        <Route path="/impact" component={Impact} />
        <Route path="/team" component={Team} />
        <Route path="/innovation" component={Innovation} />
        <Route path="/funding" component={Funding} />
        <Route path="/get-involved" component={GetInvolved} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
