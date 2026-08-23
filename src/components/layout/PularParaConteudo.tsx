import estilos from './PularParaConteudo.module.css';

/** Primeiro elemento focável da página: atalho para o conteúdo principal. */
export function PularParaConteudo() {
  return (
    <a href="#conteudo-principal" className={estilos.atalho}>
      Pular para o conteúdo principal
    </a>
  );
}
