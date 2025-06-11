import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, AlertTriangle } from "lucide-react";

const KoraHeader = () => {
  return (
    <div className="w-full bg-background border-b border-border">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          <div className="bg-primary rounded-lg p-2">
            <span className="text-primary-foreground font-bold text-lg">KORA</span>
          </div>
          <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
          <Badge variant="outline" className="text-muted-foreground">
            31 de mai de 2024 - 5 de abr de 30
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="secondary">Campanhas</Badge>
          <Badge variant="secondary">Conjuntos</Badge>
          <Badge variant="secondary">Anúncios</Badge>
          <Badge variant="secondary">Relatórios</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Leads Ativos</p>
              <p className="text-2xl font-bold text-foreground">47</p>
            </div>
            <Users className="h-8 w-8 text-primary" />
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">+12%</span>
          </div>
        </Card>

        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Saúde Média</p>
              <p className="text-2xl font-bold text-primary">Positivo</p>
            </div>
            <Target className="h-8 w-8 text-primary" />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-muted-foreground">8.2/10</span>
          </div>
        </Card>

        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Sucesso dos Planos</p>
              <p className="text-2xl font-bold text-foreground">74%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-primary" />
          </div>
          <div className="flex items-center mt-2">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-500">+5.2%</span>
          </div>
        </Card>

        <Card className="p-4 bg-card border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground text-sm">Alertas do Agente</p>
              <p className="text-2xl font-bold text-primary">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-primary" />
          </div>
          <div className="flex items-center mt-2">
            <span className="text-sm text-muted-foreground">Requer atenção</span>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KoraHeader;