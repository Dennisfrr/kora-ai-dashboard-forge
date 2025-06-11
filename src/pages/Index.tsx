import KoraHeader from "@/components/KoraHeader";
import AIInsightsFeed from "@/components/AIInsightsFeed";
import ConversationFunnel from "@/components/ConversationFunnel";
import LeadsTable from "@/components/LeadsTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <KoraHeader />
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <ConversationFunnel />
          </div>
          <div>
            <AIInsightsFeed />
          </div>
        </div>
        
        <LeadsTable />
      </div>
    </div>
  );
};

export default Index;
