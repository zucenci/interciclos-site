import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import type { ItemDeLista } from '@/content/types';
import { cx } from '@/lib/utils';
import estilos from './ListaDeItens.module.css';

type Props = {
  itens: readonly ItemDeLista[];
  rotulo?: string;
  titulo?: string;
  chamada?: string;
  colunas?: 'umaColuna' | 'duasColunas' | 'tresColunas';
  fundo?: 'papel' | 'suave' | 'media';
  numerado?: boolean;
  id?: string;
};

/**
 * Lista de itens titulados — usada nos blocos "o que você encontra",
 * "compromissos", "modalidades" e "eixos" das páginas internas.
 */
export function ListaDeItens({
  itens,
  rotulo,
  titulo,
  chamada,
  colunas = 'tresColunas',
  fundo = 'papel',
  numerado = false,
  id,
}: Props) {
  if (itens.length === 0) return null;

  return (
    <Secao id={id} fundo={fundo} rotuloAcessivel={titulo ? undefined : rotulo}>
      <Container>
        {titulo ? (
          <Revelar>
            <TituloDeSecao rotulo={rotulo} titulo={titulo} chamada={chamada} className={estilos.titulo} />
          </Revelar>
        ) : null}

        <ul className={cx(estilos.lista, estilos[colunas])}>
          {itens.map((item, indice) => (
            <Revelar
              key={item.titulo}
              como="li"
              atraso={Math.min(indice, 3) * 80}
              className={estilos.item}
            >
              {numerado ? (
                <span className={estilos.numero} aria-hidden="true">
                  {String(indice + 1).padStart(2, '0')}
                </span>
              ) : null}
              <h3 className={estilos.itemTitulo}>{item.titulo}</h3>
              {item.descricao ? <p className={estilos.itemDescricao}>{item.descricao}</p> : null}
            </Revelar>
          ))}
        </ul>
      </Container>
    </Secao>
  );
}
