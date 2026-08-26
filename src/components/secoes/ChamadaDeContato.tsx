import { Container } from '@/components/layout/Container';
import { Secao } from '@/components/layout/Secao';
import { Botao } from '@/components/ui/Botao';
import { Revelar } from '@/components/ui/Revelar';
import { contato, whatsapp } from '@/content/site';
import estilos from './ChamadaDeContato.module.css';

type Props = {
  titulo?: string;
  paragrafo?: string;
  /** CTA principal. Por padrão leva ao WhatsApp. */
  acaoPrincipal?: { rotulo: string; href: string; externo?: boolean };
  /** Acompanha o fundo da seção anterior para a faixa não criar um degrau. */
  fundo?: 'papel' | 'suave' | 'media';
};

/** Faixa de conversão flutuante reutilizada ao final das páginas. */
export function ChamadaDeContato({
  titulo = 'Vamos conversar?',
  paragrafo = 'Quer saber mais sobre nossas formações, grupos, eventos ou atividades? Entre em contato direto com o InterCiclos pelo WhatsApp.',
  acaoPrincipal = {
    rotulo: 'Fale com o InterCiclos',
    href: whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de saber mais sobre as formações e atividades.'),
    externo: true,
  },
  fundo = 'media',
}: Props) {
  return (
    <Secao espacamento="curto" fundo={fundo} className={estilos.secao}>
      <Container>
        <div className={estilos.blocoFlutuante}>
          <div className={estilos.conteudo}>
            <Revelar className={estilos.texto}>
              <h2 className={estilos.titulo}>{titulo}</h2>
              <p className={estilos.paragrafo}>{paragrafo}</p>
            </Revelar>

            <Revelar atraso={100} className={estilos.acoes}>
              <ul className={estilos.dados}>
                <li>WhatsApp: {contato.whatsappExibicao}</li>
                <li>
                  {contato.cidade}, {contato.estado}
                </li>
              </ul>

              <Botao
                href={acaoPrincipal.href}
                externo={acaoPrincipal.externo}
                variante="claro"
                tamanho="padrao"
              >
                {acaoPrincipal.rotulo}
              </Botao>
            </Revelar>
          </div>
        </div>
      </Container>
    </Secao>
  );
}
