import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { PoToolbarModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ListarComponentsComponent } from './components/listar-components/listar-components.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';
import { TokenComponent } from './components/token/token.component';
import { EmissaoXmlDocComponent } from './components/emissao-xml-doc/emissao-xml-doc.component';
import { EmissaoRvddComponent } from './components/emissao-rvdd/emissao-rvdd.component';
import { HistoricoComponent } from './components/historico/historico.component';
import { AssinaturasComponent } from './components/assinaturas/assinaturas.component';
import { EmissaoXmlDipComponent } from './components/emissao-xml-dip/emissao-xml-dip.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltroDiplomadoPipe } from './pipe/filtro-diplomado.pipe';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MantenedoraComponent } from './components/novo-emissao-doc/mantenedora/mantenedora.component';
import { IesComponent } from './components/novo-emissao-doc/ies/ies.component';
import { CursoComponent } from './components/novo-emissao-doc/curso/curso.component';
import { AlunoComponent } from './components/novo-emissao-doc/aluno/aluno.component';
import { LivroRegistroComponent } from './components/novo-emissao-doc/livro-registro/livro-registro.component';
import { AssinaturaComponent } from './components/novo-emissao-doc/assinatura/assinatura.component';
import { SelecionarCursoComponent } from './components/novo-emissao-doc/selecionar-curso/selecionar-curso.component';
import { AppMaterialModule } from './components/material/app-material.module';
import { AreaPublicaComponent } from './components/area-publica/area-publica.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NovoComponent } from './components/novo-emissao-doc/novo.component';
import { EmissaoPipe } from './components/filters/emissao.pipe';
import { UsuariosPipe } from './components/filters/usuarios.pipe';
import { HistoricoPipe } from './components/filters/historico.pipe';
import { DadosPessoaisComponent } from './components/novo-historico/dados-pessoais/dados-pessoais.component';
import { AlunosPipe } from './components/filters/alunos.pipe';
import { DadosAlunosPipe } from './components/filters/dadosAlunos.pipe';
import { DadosIndividuaisComponent } from './components/novo-historico/dados-individuais/dados-individuais.component';
import { NovoHistoricoComponent } from './components/novo-historico/novo-historico.component';





@NgModule({
  declarations: [
    AppComponent,
    ListarComponentsComponent,
    SidenavComponent,
    DashboardComponent,
    CadastroUsuarioComponent,
    TokenComponent,
    EmissaoXmlDocComponent,
    EmissaoRvddComponent,
    HistoricoComponent,
    AssinaturasComponent,
    EmissaoXmlDipComponent,
    HeaderComponent,
    FiltroDiplomadoPipe,
    MantenedoraComponent,
    IesComponent,
    CursoComponent,
    AlunoComponent,
    LivroRegistroComponent,
    AssinaturaComponent,
    SelecionarCursoComponent,
    AreaPublicaComponent,
    NovoComponent,
    EmissaoPipe,
    UsuariosPipe,
    HistoricoPipe,
    DadosPessoaisComponent,
    AlunosPipe,
    DadosAlunosPipe,
    DadosIndividuaisComponent,
    NovoHistoricoComponent

 

  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    PoContainerModule,
    PoModule,
    PoTemplatesModule,
    PoToolbarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
