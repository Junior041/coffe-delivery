import CafeCard from './CafeCard';
import { CafesContainer, NossosCafesContainer } from './styles';
import { CafesJSON } from '../../../cafes';

export default function NossosCafes() {
  return (
    <NossosCafesContainer>
      <h1>Nossos cafés</h1>
      <CafesContainer>
        {CafesJSON.map((cafe) => {
          return (
            <CafeCard
              descricao={cafe.descricao}
              imagem={cafe.imagem}
              nome={cafe.nome}
              tipo={cafe.tipo}
              preco={cafe.preco}
              id={cafe.id}
              key={cafe.id}
            />
          );
        })}
      </CafesContainer>
    </NossosCafesContainer>
  );
}
