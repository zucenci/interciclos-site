import { HeroHome } from '@/components/secoes/HeroHome';
import { Manifesto } from '@/components/secoes/Manifesto';
import { DestaqueEspecializacao } from '@/components/secoes/DestaqueEspecializacao';
import { GradeDeFrentes } from '@/components/secoes/GradeDeFrentes';
import { CarrosselDepoimentos } from '@/components/secoes/CarrosselDepoimentos';
import { FacaParte } from '@/components/secoes/FacaParte';
import { ChamadaDeContato } from '@/components/secoes/ChamadaDeContato';
import { frentes } from '@/content/frentes';
import { frentesHome } from '@/content/home';

export default function PaginaInicial() {
  return (
    <>
      <HeroHome />
      <Manifesto />
      <DestaqueEspecializacao />
      <GradeDeFrentes
        id="frentes"
        frentes={frentes}
        rotulo={frentesHome.rotulo}
        titulo={frentesHome.titulo}
        chamada={frentesHome.chamada}
      />
      <CarrosselDepoimentos />
      <FacaParte />
      <ChamadaDeContato />
    </>
  );
}
