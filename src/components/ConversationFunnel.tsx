import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ConversationFunnel = () => {
  const funnelSteps = [
    { step: "Primeiro Contato", count: 47, percentage: 100, color: "bg-primary" },
    { step: "Descoberta de Dor", count: 38, percentage: 81, color: "bg-primary" },
    { step: "Qualificação", count: 29, percentage: 62, color: "bg-primary" },
    { step: "Proposta", count: 21, percentage: 45, color: "bg-primary" },
    { step: "Negociação", count: 15, percentage: 32, color: "bg-primary" },
    { step: "Fechamento", count: 11, percentage: 23, color: "bg-primary" }
  ];

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Funil de Conversação</h3>
        <Badge variant="outline" className="text-primary border-primary">
          IA Guiada
        </Badge>
      </div>
      
      <div className="space-y-4">
        {funnelSteps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{step.step}</span>
              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">{step.percentage}%</span>
                <span className="text-lg font-bold text-foreground">{step.count}</span>
              </div>
            </div>
            
            <div className="w-full bg-secondary rounded-full h-3">
              <div 
                className={`h-3 rounded-full ${step.color} transition-all duration-500`}
                style={{ width: `${step.percentage}%` }}
              />
            </div>
            
            {index < funnelSteps.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2">
                <div className="w-px h-4 bg-border" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">Taxa de Conversão Geral</span>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">23%</span>
            <Badge variant="outline" className="text-green-500 border-green-500">
              +2.5%
            </Badge>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Melhor que o mês anterior</p>
      </div>
    </Card>
  );
};

export default ConversationFunnel;