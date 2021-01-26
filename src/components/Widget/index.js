import styled from 'styled-components';

const Widget = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.lightText};
    border-radius: 4px;
    overflow: hidden;

    h1, h2, h3 {
        font-size: 16px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }
    h3, p {
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        color: ${({ theme }) => theme.colors.lightText}
    }
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 18px 32px;
    background-color: ${({ theme }) => theme.colors.primary};

    * {
        margin: 0;
    }
`;

Widget.Content = styled.div`
    padding: 24px 32px 32px 32px;
    & > *:last-child {
        margin-bottom: 0;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    input {
        background-color: transparent;
        border: 1px solid ${({ theme }) => theme.colors.lightText};
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors.lightText};
        font-weight: 700;
        height: 2.5rem;
        width: 100%;
    &:focus {
        outline: 0;
    }
    }
    button {
        background: ${({ theme }) => theme.colors.button};
        border:none;
        border-radius: ${({ theme }) => theme.borderRadius};
        color: ${({ theme }) => theme.colors.lightText};
        cursor: pointer;
        font-weight: bold;
        height: 2.5rem;
        margin-top: 2rem;
        transition: background .3s;
        width: 100%;
    &:disabled {
        background: ${({ theme }) => theme.colors.disabled};
        cursor: default;
        color:#707070;
    }
    }
`;

export default Widget;
