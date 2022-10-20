import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { TokenComponent } from './components/token/token.component';
import { EmissaoXmlDocComponent } from './components/emissao-xml-doc/emissao-xml-doc.component';
import { EmissaoXmlDipComponent } from './components/emissao-xml-dip/emissao-xml-dip.component';
import { EmissaoRvddComponent } from './components/emissao-rvdd/emissao-rvdd.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { SelecionarCursoComponent } from './components/novo-emissao-doc/selecionar-curso/selecionar-curso.component';
import { AreaPublicaComponent } from './components/area-publica/area-publica.component';
import { NovoComponent } from './components/novo-emissao-doc/novo.component';
import { ShareDatasComponent } from './components/novo-emissao-doc/aluno/share-datas.component';
import { DadosAlunoComponent } from './components/novo-emissao-doc/aluno/dados-aluno/dados-aluno.component';
import { ListarhistoricoComponent } from './components/novo-historico/listarhistorico/listarhistorico.component';
import { NovoHistoricoComponent } from './components/novo-historico/novo-historico.component';

const routes: Routes = [
  {path:'',redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'cadastro',component:CadastroUsuarioComponent},
  {path:'token',component:TokenComponent},
  {path:'emissao-xml-doc',component:EmissaoXmlDocComponent},
  {path:'emissao-xml-dip',component:EmissaoXmlDipComponent},
  {path:'emissao-rvdd',component:EmissaoRvddComponent},
  {path:'historico',component:HistoricoComponent },
  {path:'selecionar-curso',component:SelecionarCursoComponent},
  {path:'area-publica',component:AreaPublicaComponent},
  {path:'novo',component:NovoComponent},
  {path:'listarhistorico',component:ListarhistoricoComponent},
  {path:'share',component:ShareDatasComponent},
  {path:'dados-aluno',component:DadosAlunoComponent},
  {path:'novo-historico',component:NovoHistoricoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

