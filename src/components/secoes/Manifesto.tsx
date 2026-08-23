import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { Rotulo } from '@/components/ui/Rotulo';
import { manifestoHome as conteudo } from '@/content/home';
import estilos from './Manifesto.module.css';

/**
 * Bloco institucional da home: título à esquerda, texto à direita e, abaixo
 * dos dois, as frases de fechamento como citações discretas em duas colunas.
 */
export function Manifesto() {
  return (
    <Secao id="o-instituto">
      <Container className={estilos.grade}>
        <Revelar className={estilos.colunaTitulo}>
          <Rotulo>{conteudo.rotulo}</Rotulo>
          <h2 className={estilos.titulo}>{conteudo.titulo}</h2>
        </Revelar>

        <Revelar atraso={120} className={estilos.colunaTexto}>
          {conteudo.paragrafos.map((paragrafo) => (
            <p key={paragrafo.slice(0, 40)} className={estilos.paragrafo}>
              {paragrafo}
            </p>
          ))}
        </Revelar>

        <Revelar atraso={200} className={estilos.citacoes}>
          {conteudo.fechamento.map((frase) => (
            <blockquote key={frase.slice(0, 40)} className={estilos.citacao}>
              <p>{frase}</p>
            </blockquote>
          ))}
        </Revelar>
      </Container>
    </Secao>
  );
}
