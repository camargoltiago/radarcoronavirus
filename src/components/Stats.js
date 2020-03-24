import React from 'react';
import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: '. . .';
`;
const StatBlock = styled.div`
  background: #d3d3d3;
  align-items: center;
  border-radius: 7px;
  margin: 7px;
  justify-items: center;
  text-align: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>carregando...</p>;
  if (error || stats.error) return <p>Ocorreu um erro tente novamente.</p>;
  return (
    <StatGrid>
      <StatBlock>
        <p>Confirmados</p>
        <p>{stats.confirmed.value}</p>
      </StatBlock>

      <StatBlock>
        <p>Mortes</p>
        <p>{stats.deaths.value}</p>
      </StatBlock>

      <StatBlock>
        <p>Recuperados</p>
        <p>{stats.recovered.value}</p>
      </StatBlock>
    </StatGrid>
  );
}
