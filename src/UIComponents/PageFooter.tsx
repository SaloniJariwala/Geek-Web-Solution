import styled from "styled-components";

const FooterWrapper = styled.div`
    position: static;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    padding: 0 5px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    a {
        color: black;
    }
`;

const PageFooter: React.FC = () => {
    return (
        <FooterWrapper>
            <span>&copy; Copyright 2016 - 2022 by </span>&nbsp;
            <a href="https://geekwebsolution.com/" target={"_blank"}>Geek Web Solution</a>
        </FooterWrapper>
    );
};

export default PageFooter;