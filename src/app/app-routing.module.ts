import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { TokenComponent } from './components/token/token.component';
import { EmissaoXmlDocComponent } from './components/emissao-xml-doc/emissao-xml-doc.component';
import { EmissaoXmlDipComponent } from './components/emissao-xml-dip/emissao-xml-dip.component';
import { EmissaoRvddComponent } from './components/emissao-rvdd/emissao-rvdd.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { AssinaturasComponent } from './components/assinaturas/assinaturas.component';
import { MantenedoraComponent } from './components/novo/mantenedora/mantenedora.component';
import { IesComponent } from './components/novo/ies/ies.component';
import { CursoComponent } from './components/novo/curso/curso.component';
import { AlunoComponent } from './components/novo/aluno/aluno.component';
import { LivroRegistroComponent } from './components/novo/livro-registro/livro-registro.component';
import { AssinaturaComponent } from './components/novo/assinatura/assinatura.component';
import { SelecionarCursoComponent } from './components/novo/selecionar-curso/selecionar-curso.component';
import { AreaPublicaComponent } from './components/area-publica/area-publica.component';
import { NovoComponent } from './components/novo/novo.component';

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
  {path:'novo',component:NovoComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

