import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import KoraHeader from "@/components/KoraHeader";
import AIInsightsFeed from "@/components/AIInsightsFeed";
import ConversationFunnel from "@/components/ConversationFunnel";
import LeadsTable from "@/components/LeadsTable";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background dark">
        <AppSidebar />
        <main className="flex-1">
          <div className="sticky top-0 z-10 bg-background border-b border-border">
            <div className="flex items-center p-4">
              <SidebarTrigger className="mr-4" />
              <h1 className="text-xl font-semibold text-foreground">Dashboard Principal</h1>
            </div>
          </div>
          
          <KoraHeader />
          
          <div className="p-6">
            {/* Priorizar LeadsTable - ferramenta principal do dia a dia */}
            <div className="mb-8">
              <LeadsTable />
            </div>
            
            {/* Analytics e Insights em segundo plano */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <ConversationFunnel />
              </div>
              <div>
                <AIInsightsFeed />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
