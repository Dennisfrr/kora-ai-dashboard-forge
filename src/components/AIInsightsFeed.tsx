import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, TrendingUp, Calendar, MessageSquare } from "lucide-react";

const AIInsightsFeed = () => {
  const insights = [
    {
      id: 1,
      type: "alert",
      title: "Alerta de Risco",
      description: "Lead Maria Silva mencionou concorrente em última conversa",
      priority: "high",
      icon: AlertTriangle,
      time: "há 2 min"
    },
    {
      id: 2,
      type: "opportunity",
      title: "Oportunidade Detectada",
      description: "Lead João Santos revisitou página de preços 3x hoje",
      priority: "medium",
      icon: TrendingUp,
      time: "há 15 min"
    },
    {
      id: 3,
      type: "action",
      title: "Ação Recomendada",
      description: "Agendar follow-up com Ana Costa - momento ideal detectado",
      priority: "medium",
      icon: Calendar,
      time: "há 1h"
    },
    {
      id: 4,
      type: "insight",
      title: "Padrão Identificado",
      description: "Leads do setor tech respondem melhor às segundas-feiras",
      priority: "low",
      icon: MessageSquare,
      time: "há 2h"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-primary text-primary-foreground";
      case "medium": return "bg-orange-500 text-white";
      case "low": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-4 bg-card border-border h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Inteligência do Agente</h3>
        <Badge variant="outline" className="text-primary border-primary">
          {insights.length} insights
        </Badge>
      </div>
      
      <div className="space-y-3">
        {insights.map((insight) => {
          const IconComponent = insight.icon;
          return (
            <div key={insight.id} className="bg-secondary/50 rounded-lg p-3 border border-border">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getPriorityColor(insight.priority)}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-foreground">{insight.title}</h4>
                    <span className="text-xs text-muted-foreground">{insight.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <Badge variant="outline" className="text-xs">
                      {insight.type}
                    </Badge>
                    <Badge variant="outline" className={`text-xs ${
                      insight.priority === 'high' ? 'border-primary text-primary' : ''
                    }`}>
                      {insight.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AIInsightsFeed;