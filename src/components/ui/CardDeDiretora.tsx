import Image from 'next/image';
import type { Diretora } from '@/content/types';
import estilos from './CardDeDiretora.module.css';

/** Iniciais usadas enquanto não há foto oficial. */
function monograma(nome: string): string {
  return nome
    .split(' ')
    .filter((parte) => parte.length > 2)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('');
}

type Bloco = { rotulo: string; itens: string[] };

/**
 * Perfil de diretora. Cada bloco só é renderizado quando há conteúdo — os
 * campos vazios em /src/content/paginas/sobre.ts aguardam o material
 * institucional e não deixam buraco na página enquanto isso.
 */
export function CardDeDiretora({ diretora }: { diretora: Diretora }) {
  const blocos: Bloco[] = [
    { rotulo: 'Formação acadêmica', itens: diretora.formacaoAcademica },
    { rotulo: 'Especializações', itens: diretora.especializacoes },
    { rotulo: 'Experiência clínica e docente', itens: diretora.atuacao },
  ].filter((bloco) => bloco.itens.length > 0);

  return (
    <article className={estilos.card}>
      <div className={estilos.retrato}>
        {diretora.foto ? (
          <Image
            src={diretora.foto}
            alt={`Retrato de ${diretora.nome}`}
            fill
            sizes="(max-width: 720px) 100vw, 320px"
            className={estilos.foto}
            style={{
              objectPosition: diretora.fotoPosicao ?? 'center top',
              transform: diretora.fotoScale ? `scale(${diretora.fotoScale})` : undefined,
              transformOrigin: diretora.fotoPosicao ?? 'center top',
            }}
          />
        ) : (
          <span className={estilos.monograma} aria-hidden="true">
            {monograma(diretora.nome)}
          </span>
        )}
      </div>

      <div className={estilos.conteudo}>
        <div className={estilos.cabecalhoInfo}>
          <h3 className={estilos.nome}>{diretora.nome}</h3>
          <p className={estilos.cargo}>{diretora.cargo}</p>
        </div>

        {diretora.trajetoria ? (
          <p className={estilos.trajetoria}>{diretora.trajetoria}</p>
        ) : null}

        {blocos.length > 0 ? (
          <dl className={estilos.blocos}>
            {blocos.map((bloco) => (
              <div key={bloco.rotulo} className={estilos.bloco}>
                <dt className={estilos.blocoRotulo}>{bloco.rotulo}</dt>
                <dd className={estilos.blocoValor}>
                  <ul className={estilos.blocoLista}>
                    {bloco.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}
