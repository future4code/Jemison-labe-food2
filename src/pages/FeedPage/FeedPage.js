import React, { useContext, useEffect, useState } from "react";
import search from "../../assets/img/search/search.svg";
import {
   Categories,
   Cards,
   SectionButtonSearch,
   SearchButton,
   ContentsHeader,
} from "./StyledFeedPage";
import { Container, Contents, Menu, Title } from "../../Styled";
import { NavbarContainer } from "../../components/Navbar/StyledNavbar";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { CardRestaurants } from "../../components/CardRestaurants/CardRestaurants";
import { GlobalContext } from "../../global/GlobalContext";
import { useNavigate } from "react-router-dom";
import {
   goToCartPage,
   goToFeedPage,
   goToProfilePage,
   goToSearchPage,
} from "../../routes/coordinator";
import house2 from "../../assets/img/icon/house2.svg";
import cart1 from "../../assets/img/icon/cart1.svg";
import avatar1 from "../../assets/img/icon/avatar1.svg";

export function FeedPage() {
   useProtectedPage();
   const navigate = useNavigate();
   const { GlobalRequests } = useContext(GlobalContext);
   const [categories, setCategories] = useState("Todos");
   const [inputSearch, setInputSearch] = useState("");
   const onChangeCategories = (value) => {
      setCategories(value);
   };
   const onChangeInputSearch = (e) => {
      // e.preventdefault();
      setInputSearch(e.target.value);
   };

   useEffect(() => {
      GlobalRequests.getRestaurants();
   }, []);

   // Lógica das cores
   const getColorTodos = (categories) => {
      if (categories === "Todos") return "#e21";
      else return "inherit";
   };
   const getColorHamburguer = (categories) => {
      if (categories === "Hamburguer") return "#e21";
      else return "inherit";
   };
   const getColorAsiatica = (categories) => {
      if (categories === "Asiática") return "#e21";
      else return "inherit";
   };
   const getColorMexicana = (categories) => {
      if (categories === "Mexicana") return "#e21";
      else return "inherit";
   };
   const getColorItaliana = (categories) => {
      if (categories === "Italiana") return "#e21";
      else return "inherit";
   };
   const getColorSorvetes = (categories) => {
      if (categories === "Sorvetes") return "#e21";
      else return "inherit";
   };
   const getColorCarnes = (categories) => {
      if (categories === "Carnes") return "#e21";
      else return "inherit";
   };
   const getColorBaiana = (categories) => {
      if (categories === "Baiana") return "#e21";
      else return "inherit";
   };
   const getColorPetiscos = (categories) => {
      if (categories === "Petiscos") return "#e21";
      else return "inherit";
   };

   return (
      <Container>
         <NavbarContainer>
            <Title>Ifuture</Title>
         </NavbarContainer>

         <Contents>
            <ContentsHeader>
               <SearchButton
                  onClick={() => {
                     goToSearchPage(navigate);
                  }}>
                  <SectionButtonSearch>
                     <img src={search} />

                     <p>Restaurante</p>
                  </SectionButtonSearch>
               </SearchButton>

               <Categories>
                  <li>
                     <button
                        value="Todos"
                        categories={categories}
                        onClick={() => onChangeCategories("Todos")}
                        style={{
                           color: getColorTodos(categories),
                        }}>
                        Todos
                     </button>
                  </li>
                  <li>
                     <button
                        value="Hamburguer"
                        categories={categories}
                        onClick={() => onChangeCategories("Hamburguer")}
                        style={{
                           color: getColorHamburguer(categories),
                        }}>
                        Burger
                     </button>
                  </li>
                  <li>
                     <button
                        value="Asiática"
                        categories={categories}
                        onClick={() => onChangeCategories("Asiática")}
                        style={{
                           color: getColorAsiatica(categories),
                        }}>
                        Asiática
                     </button>
                  </li>
                  <li>
                     <button
                        value="Mexicana"
                        categories={categories}
                        onClick={() => onChangeCategories("Mexicana")}
                        style={{
                           color: getColorMexicana(categories),
                        }}>
                        Mexicano
                     </button>
                  </li>
                  <li>
                     <button
                        value="Italiana"
                        categories={categories}
                        onClick={() => onChangeCategories("Italiana")}
                        style={{
                           color: getColorItaliana(categories),
                        }}>
                        Italiana
                     </button>
                  </li>
                  <li>
                     <button
                        value="Sorvetes"
                        categories={categories}
                        onClick={() => onChangeCategories("Sorvetes")}
                        style={{
                           color: getColorSorvetes(categories),
                        }}>
                        Sorvetes
                     </button>
                  </li>
                  <li>
                     <button
                        value="Carnes"
                        categories={categories}
                        onClick={() => onChangeCategories("Carnes")}
                        style={{
                           color: getColorCarnes(categories),
                        }}>
                        Carnes
                     </button>
                  </li>
                  <li>
                     <button
                        value="Baiana"
                        categories={categories}
                        onClick={() => onChangeCategories("Baiana")}
                        style={{
                           color: getColorBaiana(categories),
                        }}>
                        Baiana
                     </button>
                  </li>
                  <li>
                     <button
                        value="Petiscos"
                        categories={categories}
                        onClick={() => onChangeCategories("Petiscos")}
                        style={{
                           color: getColorPetiscos(categories),
                        }}>
                        Petiscos
                     </button>
                  </li>
               </Categories>
            </ContentsHeader>

            <Cards>
               <CardRestaurants
                  categories={categories}
                  inputSearch={inputSearch}
               />
            </Cards>
         </Contents>

         <Menu>
            <button
               onClick={() => {
                  goToFeedPage(navigate);
               }}>
               <img src={house2} width="27" height="27" />
            </button>

            <button
               onClick={() => {
                  goToCartPage(navigate);
               }}>
               <img src={cart1} width="27" height="27" />
            </button>

            <button
               onClick={() => {
                  goToProfilePage(navigate);
               }}>
               <img src={avatar1} width="27" height="27" />
            </button>
         </Menu>
      </Container>
   );
}
