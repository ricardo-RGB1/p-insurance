import styled from 'styled-components';


export const InfoContainer = styled.div`
    color: #fff;
    height: 100%;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#fff')};

    @media screen and (max-width: 768px) {
        padding: 80px 0;
    }

    @media screen and (min-width: 1100px) {
        height: 840px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 820px;
    width: 100%;
    max-width: 1400px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }

    @media screen and (min-width: 768px) {
        grid-template-areas: ${({imgTop}) => (imgTop ? `'col2 col2' 'col1 col1'` : `'col1 col2' 'col1 col2'`)};
    }

`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
    max-width: ${({maxWidth}) => (maxWidth ? '580px' : '550px')};
`;


export const TopLine = styled.p`
    color: #FF3775;
    font-size: 17px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
    text-transform: uppercase;
    text-align: ${({center}) => (center ? 'center' : 'left')};
`;


export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#4d4d4d')};
    text-align: ${({center}) => (center ? 'center' : 'left')};
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;


export const Subtitle = styled.p`
    max-width: 460px;
    margin-bottom: 35px;
    margin: ${({center}) => (center ? 'auto' : '0')};
    font-size: 18px;
    line-height: 28px;
    text-align: ${({center}) => (center ? 'center' : 'left')};
    color: ${({darkText}) => (darkText ? '#6b6b6b' : '#fff')};
`;


export const BtnWrap = styled.div`
    margin-top: 30px;
    display: ${({opacity}) => (opacity ? 'flex' : 'none')};
    justify-content: flex-start;   
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    // width: 500px;
    height: 310px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (min-width: 768px) {
        height: 500px;
    }
`;
