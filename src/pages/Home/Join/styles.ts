import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: var(--section-height);
  max-height: 42rem;

  > div {
    padding: 0 0 0 var(--padding-lateral);
    height: 100%;

    display: flex;
    justify-content: space-between;

    div.content {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      > h2 {
        min-width: 26rem;
        max-width: 26rem;
        color: var(--cll-title);
      }

      div.form-controls {
        width: 100%;
        max-width: 26rem;

        display: flex;
        gap: 1rem;
        justify-content: center;
      }
    }

    > img {
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    > div {
      gap: 10rem;
    }
  }
`;
