import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: #212121;
  }

  p {
    color: #707070;
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Tags = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  div {
    display: flex;
    flex-wrap: wrap;
    margin-right: 0.5rem;
    margin-bottom: 2px;

    span {
      color: #000;
      margin-left: 0.5rem;
      text-align: center;
    }
  }
`;

export const Tag = styled.div`
  background-color: #0074d9;
  color: #fff;
  border-radius: 2px;
  padding: 2px 10px;
`;
