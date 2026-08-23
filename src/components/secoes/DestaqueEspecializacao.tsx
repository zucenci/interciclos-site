import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Grafismo } from '@/components/marca/Grafismo';
import { Botao } from '@/components/ui/Botao';
import { ListaDeDados } from '@/components/ui/ListaDeDados';
import { Revelar } from '@/components/ui/Revelar';
import { Rotulo } from '@/components/ui/Rotulo';
import { destaqueEspecializacaoHome as conteudo } from '@/content/home';
import estilos from './DestaqueEspecializacao.module.css';

/**
 * Bloco âncora da home: dá à Especialização o peso visual de produto
 * principal sem tirar as demais frentes de cena.
 */
export function DestaqueEspecializacao() {
  return (
    <Secao fundo="gradiente" className={estilos.secao}>
      <Grafismo posicao="superiorDireita" tom="escuro" />

      <Container className={estilos.conteudo}>
        <Revelar className={estilos.texto}>
          <Rotulo tom="claro">{conteudo.rotulo}</Rotulo>
          <h2 className={estilos.titulo}>{conteudo.titulo}</h2>
          <p className={estilos.chamada}>{conteudo.chamada}</p>
          <p className={estilos.paragrafo}>{conteudo.paragrafo}</p>
          <Botao href={conteudo.acao.href} variante="claro" tamanho="grande" className={estilos.acao}>
            {conteudo.acao.rotulo}
          </Botao>
        </Revelar>

        <Revelar atraso={120} className={estilos.ficha}>
          <h3 className={estilos.tituloFicha}>Estrutura da formação</h3>
          <ListaDeDados dados={conteudo.dados} tom="escuro" colunas="unica" />
        </Revelar>
      </Container>
    </Secao>
  );
}
