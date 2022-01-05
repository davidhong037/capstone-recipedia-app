import styled from 'styled-components'

export const Header = styled.div`
    color: white;
    background-color: #3bb19b;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    font-size: 25px;
    font-weight: bold;
    box-shadow: 0 3px 6px 0 #555;
    flex-wrap: wrap;
`;

export const AppNameComponent = styled.div`
    display: flex;
    align-items: center;  
`;

export const AppIcon = styled.img`
    width: 60px;
    height: 60px;
    margin: 15px;
`;

export const SearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    padding: 10px;
    border-radius: 6px;
    width: 50%;
`;

export const SearchInput = styled.input`
    border: none;
    outline: none;
    margin-left: 15px;
    font-size: 16px;
    font-weight: bold;
    width: 100%;
`;

export const SearchIcon = styled.img`
    width: 32px;
    height: 32px;
`;

export const LogoutButton = styled.button`
    border: none;
    outline: none;
    padding: 12px 0;
    background-color: white;
    border-radius: 6px;
    width: 100px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    &:hover{
        background-color: lightgray;
`;
