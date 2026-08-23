/** Junta classes ignorando valores vazios/falsos. */
export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

/** Remove o link do próprio item ativo mantendo a comparação de rotas simples. */
export function rotaAtiva(rotaAtual: string, href: string): boolean {
  if (href === '/') return rotaAtual === '/';
  return rotaAtual === href || rotaAtual.startsWith(`${href}/`);
}
