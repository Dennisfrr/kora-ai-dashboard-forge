import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MessageSquare, Phone, Mail, TrendingUp, AlertTriangle, CheckCircle, Search, MoreHorizontal, Eye, Edit, Plus } from "lucide-react";
import { useState } from "react";

const LeadsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [stageFilter, setStageFilter] = useState("all");
  const [healthFilter, setHealthFilter] = useState("all");

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

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStage = stageFilter === "all" || lead.stage === stageFilter;
    const matchesHealth = healthFilter === "all" || lead.health === healthFilter;
    
    return matchesSearch && matchesStage && matchesHealth;
  });

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
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Plus className="h-4 w-4 mr-2" />
            Adicionar Lead
          </Button>
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

      {/* Filtros e Busca */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar leads por nome ou empresa..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={stageFilter} onValueChange={setStageFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por estágio" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os estágios</SelectItem>
            <SelectItem value="Primeiro Contato">Primeiro Contato</SelectItem>
            <SelectItem value="Descoberta">Descoberta</SelectItem>
            <SelectItem value="Qualificação">Qualificação</SelectItem>
            <SelectItem value="Proposta">Proposta</SelectItem>
            <SelectItem value="Negociação">Negociação</SelectItem>
          </SelectContent>
        </Select>
        <Select value={healthFilter} onValueChange={setHealthFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por saúde" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as saúdes</SelectItem>
            <SelectItem value="positive">Positivo</SelectItem>
            <SelectItem value="neutral">Neutro</SelectItem>
            <SelectItem value="negative">Atenção</SelectItem>
          </SelectContent>
        </Select>
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
              <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeads.map((lead) => {
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
                        <button className="font-medium text-foreground text-sm hover:text-primary transition-colors text-left">
                          {lead.name}
                        </button>
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
                  <td className="py-4 px-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover border-border">
                        <DropdownMenuItem className="text-foreground hover:bg-accent">
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalhes
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-foreground hover:bg-accent">
                          <Edit className="mr-2 h-4 w-4" />
                          Editar Lead
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-foreground hover:bg-accent">
                          <Plus className="mr-2 h-4 w-4" />
                          Adicionar Tarefa
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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