import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Revelar } from '@/components/ui/Revelar';
import { Rotulo } from '@/components/ui/Rotulo';
import { facaParte as conteudo } from '@/content/ciclos';
import estilos from './FacaParte.module.css';

/**
 * Encaminha o visitante pelo momento profissional em que ele está — a
 * estratégia editorial que mantém todas as frentes equilibradas.
 */
export function FacaParte() {
  return (
    <Secao fundo="media" id="faca-parte">
      <Container className={estilos.grade}>
        <Revelar className={estilos.texto}>
          <Rotulo>{conteudo.rotulo}</Rotulo>
          <h2 className={estilos.titulo}>{conteudo.titulo}</h2>

          <ul className={estilos.momentos}>
            {conteudo.momentos.map((momento) => (
              <li key={momento} className={estilos.momento}>
                {momento}
              </li>
            ))}
          </ul>

          <p className={estilos.fechamento}>{conteudo.fechamento}</p>
        </Revelar>

        <Revelar atraso={120} className={estilos.escolha}>
          <h3 className={estilos.pergunta}>{conteudo.pergunta}</h3>

          <ul className={estilos.atalhos}>
            {conteudo.atalhos.map((atalho, indice) => (
              <li key={atalho.href}>
                <Link href={atalho.href} className={estilos.atalho}>
                  <span className={estilos.atalhoOrdem} aria-hidden="true">
                    {String(indice + 1).padStart(2, '0')}
                  </span>
                  <span className={estilos.atalhoRotulo}>{atalho.rotulo}</span>
                  <span className={estilos.atalhoSeta} aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Revelar>
      </Container>
    </Secao>
  );
}
