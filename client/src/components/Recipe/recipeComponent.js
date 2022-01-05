import styled from 'styled-components'

export const RecipeContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 3px 10px 0 #aaa;
    width: 300px;
    border-radius: 15px;
`;

export const RecipeImage = styled.img`
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
`;

export const RecipeName = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px 0;
    text-align: center;
`;

export const IngredientsText = styled.span`
    font-size: 18px;
    border: solid 1px #4CC417;
    color: black;
    cursor: pointer;
    padding: 10px 15px;
    border-radius: 4px;
    color: #4CC417;
    text-align: center;
    margin-bottom: 12px;
`;

export const SeeMoreText = styled(IngredientsText)`
    color: #eb3300;
    border: solid 1px #eb3300;
`;