import Image from 'next/image';
import { Container } from '@/components/layout/Container';
import { Grafismo } from '@/components/marca/Grafismo';
import { SeloDezAnos } from '@/components/marca/SeloDezAnos';
import { Botao } from '@/components/ui/Botao';
import { heroHome } from '@/content/home';
import estilos from './HeroHome.module.css';

export function HeroHome() {
  return (
    <section className={estilos.hero} aria-labelledby="hero-titulo">
      <Grafismo posicao="fundo" tom="claro" className={estilos.grafismo} />

      <Container className={estilos.conteudo}>
        <div className={estilos.gridHero}>
          {/* Coluna Texto (Esquerda) */}
          <div className={estilos.colunaTexto}>
            <p className={estilos.rotulo}>{heroHome.rotulo}</p>

            <h1 id="hero-titulo" className={estilos.titulo}>
              {heroHome.titulo}
            </h1>

            <div className={estilos.textos}>
              {heroHome.paragrafos.map((paragrafo) => (
                <p key={paragrafo.slice(0, 40)} className={estilos.paragrafo}>
                  {paragrafo}
                </p>
              ))}
            </div>

            <div className={estilos.acoes}>
              <Botao href={heroHome.acoes[0].href} tamanho="padrao">
                {heroHome.acoes[0].rotulo}
              </Botao>
              <Botao
                href={heroHome.acoes[1].href}
                variante="secundario"
                tamanho="padrao"
              >
                {heroHome.acoes[1].rotulo}
              </Botao>
            </div>
          </div>

          {/* Coluna Imagem com Máscara e Selo 10 Anos (Direita) */}
          <div className={estilos.colunaImagem}>
            <div className={estilos.molduraImagem}>
              <Image
                src="/images/hero.jpg"
                alt="Grupo de alunos e psicólogos reunidos em momento de estudo e troca profissional"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                quality={90}
                priority
                className={estilos.imagem}
              />
            </div>

            {/* Selo 10 anos — arquivo oficial da marca, com o fundo girando */}
            <SeloDezAnos className={estilos.seloDezAnos} />
          </div>
        </div>

        {/* Pilares */}
        <ul className={estilos.pilares}>
          {heroHome.pilares.map((pilar) => (
            <li key={pilar} className={estilos.pilar}>
              {pilar}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
