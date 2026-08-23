import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Botao } from '@/components/ui/Botao';
import { Grafismo } from '@/components/marca/Grafismo';
import estilos from './nao-encontrada.module.css';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function PaginaNaoEncontrada() {
  return (
    <Secao fundo="papel" className={estilos.secao}>
      <Grafismo posicao="centroDireita" tom="cor" />

      <Container largura="estreito" className={estilos.conteudo}>
        <p className={estilos.codigo}>Erro 404</p>
        <h1 className={estilos.titulo}>Este caminho não leva a nenhum ciclo.</h1>
        <p className={estilos.paragrafo}>
          A página que você procurou pode ter mudado de endereço ou não existe mais. Volte para o
          início ou veja todas as formações e atividades do Instituto.
        </p>

        <div className={estilos.acoes}>
          <Botao href="/" tamanho="grande">
            Voltar para o início
          </Botao>
          <Botao href="/#frentes" variante="secundario" tamanho="grande">
            Ver formações e atividades
          </Botao>
        </div>
      </Container>
    </Secao>
  );
}
