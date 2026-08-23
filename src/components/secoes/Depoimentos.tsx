import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import { depoimentosHome as conteudo } from '@/content/home';
import { depoimentos } from '@/content/depoimentos';
import estilos from './Depoimentos.module.css';

/**
 * Enquanto os depoimentos reais não são publicados, a seção apresenta os
 * marcos editoriais. Assim que /src/content/depoimentos.ts receber itens,
 * as citações passam a ser exibidas automaticamente.
 */
export function Depoimentos() {
  return (
    <Secao fundo="papel">
      <Container>
        <Revelar>
          <TituloDeSecao
            rotulo={conteudo.rotulo}
            titulo={conteudo.titulo}
            alinhamento="centro"
            className={estilos.titulo}
          />
        </Revelar>

        <Revelar atraso={100}>
          <ul className={estilos.marcos}>
            {conteudo.marcos.map((marco) => (
              <li key={marco} className={estilos.marco}>
                {marco}
              </li>
            ))}
          </ul>
        </Revelar>

        {depoimentos.length > 0 ? (
          <ul className={estilos.citacoes}>
            {depoimentos.map((depoimento, indice) => (
              <Revelar
                key={depoimento.autor + indice}
                como="li"
                atraso={Math.min(indice, 2) * 100}
                className={estilos.citacaoItem}
              >
                <figure className={estilos.citacao}>
                  <blockquote className={estilos.texto}>
                    <p>{depoimento.texto}</p>
                  </blockquote>
                  <figcaption className={estilos.autoria}>
                    <span className={estilos.autor}>{depoimento.autor}</span>
                    {depoimento.contexto ? (
                      <span className={estilos.contexto}>{depoimento.contexto}</span>
                    ) : null}
                  </figcaption>
                </figure>
              </Revelar>
            ))}
          </ul>
        ) : null}
      </Container>
    </Secao>
  );
}
