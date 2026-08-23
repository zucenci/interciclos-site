import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CardDeFrente } from '@/components/ui/CardDeFrente';
import { Revelar } from '@/components/ui/Revelar';
import { TituloDeSecao } from '@/components/ui/TituloDeSecao';
import type { Frente } from '@/content/types';
import estilos from './GradeDeFrentes.module.css';

type Props = {
  frentes: readonly Frente[];
  rotulo?: string;
  titulo?: string;
  chamada?: string;
  fundo?: 'papel' | 'suave' | 'media';
  id?: string;
  /** Numera os cards — útil na página que reúne todas as frentes. */
  numerado?: boolean;
};

export function GradeDeFrentes({
  frentes,
  rotulo,
  titulo,
  chamada,
  fundo = 'suave',
  id,
  numerado = false,
}: Props) {
  if (frentes.length === 0) return null;

  return (
    <Secao id={id} fundo={fundo} rotuloAcessivel={titulo ? undefined : 'Frentes de atuação'}>
      <Container>
        {titulo ? (
          <Revelar>
            <TituloDeSecao rotulo={rotulo} titulo={titulo} chamada={chamada} className={estilos.titulo} />
          </Revelar>
        ) : null}

        <ul className={estilos.grade}>
          {frentes.map((frente, indice) => (
            <Revelar
              key={frente.slug}
              como="li"
              atraso={Math.min(indice, 3) * 90}
              className={estilos.item}
            >
              <CardDeFrente frente={frente} ordem={numerado ? indice + 1 : undefined} />
            </Revelar>
          ))}
        </ul>
      </Container>
    </Secao>
  );
}
