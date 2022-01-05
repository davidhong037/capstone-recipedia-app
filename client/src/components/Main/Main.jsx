import { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { DialogTitle, DialogContent, Dialog, DialogActions } from '@mui/material'
import { Header, AppNameComponent, AppIcon, SearchComponent, SearchInput, SearchIcon, LogoutButton } from '../Header/headerComponent'
import { RecipeContainer, RecipeImage, RecipeName, IngredientsText, SeeMoreText } from '../Recipe/recipeComponent';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const RecipeListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 30px;
    justify-content: space-evenly;
    gap: 20px;
`;

const Placeholder = styled.img`
    width: 120px;
    height: 120px;
    margin: 200px;
    opacity: 50%;
`;

const RecipeComponent = (props) => {
    const [show, setShow] = useState(false);

    const { recipeObj } = props
    console.log(recipeObj)
    return (
        <>
            <Dialog open={show}>
                <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
                <DialogContent>
                    <table>
                        <thead>
                            <th>Ingredients</th>
                        </thead>
                        <tbody>
                            {recipeObj.ingredients.map((ingredientObj) => (
                                <tr>
                                    <td>{ingredientObj.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </DialogContent>
                <DialogActions>
                    <IngredientsText onClick={() => window.open(recipeObj.url)}>
                        See More
                    </IngredientsText>
                    <SeeMoreText onClick={() => setShow(false)}>
                        Close
                    </SeeMoreText>
                </DialogActions>
            </Dialog>
            <RecipeContainer>
                <RecipeImage src={ recipeObj.image }/>
                <RecipeName>{ recipeObj.label }</RecipeName>
                <IngredientsText onClick={() => setShow(true)}>
                    Ingredients
                </IngredientsText>
                <SeeMoreText onClick={() => window.open(recipeObj.url)}>
                    See Complete Recipe
                </SeeMoreText>
            </RecipeContainer>
        </>    
    )
}

const APP_ID = '550a34ec';
const API_KEY = '8bf76b5c799aedaebd7b9f899e8aa35d';


const Main = () => {
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        window.location.reload()
    }

    const [timeoutId, setTimeoutId] = useState();
    const [recipeList, setRecipeList] = useState([]);

    const fetchRecipe = async (searchString) => {
        const response = await axios.get(`https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${API_KEY}`)
        setRecipeList(response.data.hits)
    }    

    const onTextChange = (e) => {
        clearTimeout(timeoutId)
        const timeout = setTimeout(() => fetchRecipe(e.target.value), 500)
        setTimeoutId(timeout)
    }

    return (
        <div>
            <Container>
                <Header>
                    <AppNameComponent><AppIcon src='/junk-food.svg' />
                        Recipedia
                    </AppNameComponent>
                    <SearchComponent>
                        <SearchIcon src='/icons8-search.svg' />
                        <SearchInput placeholder='Search Recipe' onChange={onTextChange}/>
                    </SearchComponent>
                    <LogoutButton onClick={handleLogout}>
                        Logout
                    </LogoutButton>
                </Header>
                <RecipeListContainer>
                    {recipeList.length ? (
                        recipeList.map((recipeObj) => (
                            <RecipeComponent recipeObj={recipeObj.recipe} />
                        )) 
                    ) : (
                        <Placeholder src="junk-food.svg" />
                    )}
                </RecipeListContainer>
            </Container>
        </div>    
    )
}

export default Main;