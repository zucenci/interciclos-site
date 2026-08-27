import Link from 'next/link';
import { Container } from './Container';
import { AssinaturaReduzida } from '@/components/marca/AssinaturaReduzida';
import { site, contato, rodape, whatsapp } from '@/content/site';
import estilos from './Footer.module.css';

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className={`${estilos.rodape} emFundoEscuro`}>
      <Container className={estilos.conteudo}>
        <nav className={estilos.blocos} aria-label="Navegação do rodapé">
          <div>
            <h2 className={estilos.tituloBloco}>Formações e atividades</h2>
            <ul className={estilos.listaLinks}>
              {rodape.formacoes.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={estilos.link}>
                    {link.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={estilos.tituloBloco}>Instituto</h2>
            <ul className={estilos.listaLinks}>
              {rodape.institucional.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={estilos.link}
                    target={link.externo ? '_blank' : undefined}
                    rel={link.externo ? 'noopener noreferrer' : undefined}
                  >
                    {link.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={estilos.tituloBloco}>Contato</h2>
            <ul className={estilos.listaLinks}>
              <li>
                <a
                  href={whatsapp('Olá! Vim pelo site do InterCiclos e gostaria de falar com a equipe.')}
                  className={estilos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp {contato.whatsappExibicao}
                  <span className="apenasLeitorDeTela"> (abre em nova aba)</span>
                </a>
              </li>
              {contato.email ? (
                <li>
                  <a href={`mailto:${contato.email}`} className={estilos.link}>
                    {contato.email}
                  </a>
                </li>
              ) : null}
              <li>
                <a
                  href={contato.instagram}
                  className={estilos.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram {contato.instagramUsuario}
                  <span className="apenasLeitorDeTela"> (abre em nova aba)</span>
                </a>
              </li>
              <li className={estilos.endereco}>
                <address>
                  {contato.cidade}, {contato.estado}
                </address>
              </li>
            </ul>
          </div>
        </nav>
      </Container>

      {/* A marca fecha o conteúdo, logo acima da faixa legal. */}
      <Container className={estilos.marca}>
        <Link
          href="/"
          className={estilos.marcaLink}
          aria-label="InterCiclos — ir para a página inicial"
        >
          <AssinaturaReduzida />
        </Link>
      </Container>

      <Container className={estilos.base}>
        <p className={estilos.direitos}>
          © {ano} {site.nomeCompleto}. Todos os direitos reservados.
        </p>
        <p className={estilos.desde}>
          Desde {site.fundacao}, em {contato.cidade}/{contato.estadoSigla}.
        </p>
      </Container>

    </footer>
  );
}
