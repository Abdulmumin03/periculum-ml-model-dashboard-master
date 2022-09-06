import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

* {
    box-sizing: border-box;
    margin: 0;
}

body{


}
.activateSidebar {
  display: block !important;
  transition: "0.5s";
}


`;
export default GlobalStyle;
