import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:50px 20px;

  @media screen and (min-width: 768px) {
    padding: 80px 40px;
}

    @media screen and (min-width: 1100px) {
        height: 800px;
        margin: 0;
        padding: 0;
    }

`;

export const ServicesWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 32px;
  padding: 0 50px;


  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    grid-gap: 16px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  height: 380px;
  padding:30px;
  margin-bottom: 20px;
  box-shadow: 0 20px 30px 4px rgba(0, 0, 0, 0.1);


    @media screen and (max-width: 768px) {
       grid-template-columns: 1fr 1fr;
            heigth: 343px;
 }

    @media screen and (max-width: 1200px) {
            heigth: 380px;
    }
`;


export const ServicesH1 = styled.h1`
  color: #4d4d4d;
  font-size: 48px;
  margin-bottom: 64px;
  text-align: center;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ServicesIcon = styled.img`
  height: 150px;
  width: 150px;
`;


export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #4d4d4d;
  margin: 10px 0;
  text-align: center;
  font-weight: 600;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #6b6b6b;
  margin-bottom: 25px;

`;

export const ServicesBtn = styled.div`
  border-radius: 5px;
  background: #ff3775;
  white-space: nowrap;
  color: #fff;
  padding: 12px 24px;
  font-size: 17px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-family: "new-zen", sans-serif;
  font-weight: 600;
  font-style: normal;
  box-shadow: 0px 3px 10px 4px rgba(255, 55, 117, 0.3);
  margin-bottom: 0 auto;

  &:hover {
    border: none;
    transition: all 0.3s ease;
    background: #d4266c;
  }
`;
