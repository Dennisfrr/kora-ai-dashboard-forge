import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Phone, Mail, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const LeadsTable = () => {
  const leads = [
    {
      id: 1,
      name: "Maria Silva",
      company: "TechCorp",
      planStatus: "Proposta",
      health: "positive",
      lastInteraction: "há 2 horas",
      interactionType: "email",
      value: "R$ 45.000",
      stage: "Negociação"
    },
    {
      id: 2,
      name: "João Santos",
      company: "InnovateLtd",
      planStatus: "Qualificação",
      health: "neutral",
      lastInteraction: "há 4 horas",
      interactionType: "call",
      value: "R$ 32.000",
      stage: "Descoberta"
    },
    {
      id: 3,
      name: "Ana Costa",
      company: "FutureInc",
      planStatus: "Follow-up",
      health: "negative",
      lastInteraction: "há 1 dia",
      interactionType: "message",
      value: "R$ 28.000",
      stage: "Primeiro Contato"
    },
    {
      id: 4,
      name: "Carlos Mendes",
      company: "NextGen",
      planStatus: "Fechamento",
      health: "positive",
      lastInteraction: "há 30 min",
      interactionType: "call",
      value: "R$ 67.000",
      stage: "Proposta"
    },
    {
      id: 5,
      name: "Lucia Rodrigues",
      company: "StartupX",
      planStatus: "Descoberta",
      health: "positive",
      lastInteraction: "há 3 horas",
      interactionType: "email",
      value: "R$ 18.000",
      stage: "Qualificação"
    }
  ];

  const getHealthColor = (health: string) => {
    switch (health) {
      case "positive": return "text-green-500";
      case "neutral": return "text-yellow-500";
      case "negative": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const getHealthIcon = (health: string) => {
    switch (health) {
      case "positive": return CheckCircle;
      case "neutral": return AlertTriangle;
      case "negative": return AlertTriangle;
      default: return CheckCircle;
    }
  };

  const getInteractionIcon = (type: string) => {
    switch (type) {
      case "email": return Mail;
      case "call": return Phone;
      case "message": return MessageSquare;
      default: return MessageSquare;
    }
  };

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Leads Ativos</h3>
        <div className="flex items-center space-x-2">
          <Badge variant="outline" className="text-green-500 border-green-500">
            23 Positivos
          </Badge>
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            15 Neutros
          </Badge>
          <Badge variant="outline" className="text-primary border-primary">
            9 Atenção
          </Badge>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Lead</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status do Plano</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Saúde</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Última Interação</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Valor</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Estágio</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => {
              const HealthIcon = getHealthIcon(lead.health);
              const InteractionIcon = getInteractionIcon(lead.interactionType);
              
              return (
                <tr key={lead.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                          {lead.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground text-sm">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <Badge variant="outline" className="text-xs">
                      {lead.planStatus}
                    </Badge>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-2">
                      <HealthIcon className={`h-4 w-4 ${getHealthColor(lead.health)}`} />
                      <span className={`text-sm capitalize ${getHealthColor(lead.health)}`}>
                        {lead.health}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex items-center space-x-2">
                      <InteractionIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{lead.lastInteraction}</span>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <span className="font-medium text-foreground text-sm">{lead.value}</span>
                  </td>
                  <td className="py-4 px-2">
                    <Badge variant="secondary" className="text-xs">
                      {lead.stage}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LeadsTable;