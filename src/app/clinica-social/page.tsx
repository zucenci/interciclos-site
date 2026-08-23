import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { CabecalhoDePagina } from '@/components/secoes/CabecalhoDePagina';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { Botao } from '@/components/ui/Botao';
import { Etiquetas } from '@/components/ui/Etiquetas';
import { Revelar } from '@/components/ui/Revelar';
import { clinicaSocial as conteudo } from '@/content/paginas/clinica-social';
import estilos from '@/styles/pagina.module.css';

export const metadata: Metadata = {
  title: 'Clínica Social',
  description:
    'A Clínica Social do InterCiclos une formação clínica supervisionada para alunos da Especialização e acesso à psicoterapia com valores sociais para a comunidade.',
  alternates: { canonical: '/clinica-social' },
};

export default function PaginaClinicaSocial() {
  return (
    <>
      <CabecalhoDePagina conteudo={conteudo.cabecalho} />

      <Secao fundo="suave">
        <Container>
          <ul className={estilos.doisPublicos}>
            {conteudo.publicos.map((publico, indice) => (
              <Revelar key={publico.id} como="li" atraso={indice * 100}>
                <article className={estilos.publico} id={publico.id}>
                  <p className={estilos.publicoRotulo}>{publico.rotulo}</p>
                  <h2 className={estilos.publicoTitulo}>{publico.titulo}</h2>

                  {publico.paragrafos.map((paragrafo) => (
                    <p key={paragrafo.slice(0, 40)} className={estilos.publicoParagrafo}>
                      {paragrafo}
                    </p>
                  ))}

                  <Etiquetas itens={publico.condicoes} />

                  <div className={estilos.publicoAcao}>
                    <Botao href={publico.acao.href} variante={indice === 0 ? 'primario' : 'secundario'}>
                      {publico.acao.rotulo}
                    </Botao>
                  </div>
                </article>
              </Revelar>
            ))}
          </ul>
        </Container>
      </Secao>

      <ChamadaDeContato
        titulo="Ainda com dúvidas sobre a Clínica Social?"
        paragrafo="Nossa equipe explica como funcionam os atendimentos, a supervisão e os critérios de participação."
      />
    </>
  );
}
