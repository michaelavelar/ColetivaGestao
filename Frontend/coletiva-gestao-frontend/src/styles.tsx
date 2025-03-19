import styled from "styled-components";

// Container principal da página
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// Navbar estilizado
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #359ef1;
  color: white;

  .nav-links {
    display: flex;
    gap: 20px;

    a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      transition: 0.3s;

      &:hover {
        color:rgb(227, 227, 227);
      }
    }
  }

  .login-button {
    background:rgb(9, 24, 102);
    padding: 8px 15px;
    border-radius: 5px;

    a {
      color: rgb(227, 227, 227);
      font-weight: bold;
    }

    &:hover {
      background:rgb(118, 204, 225);
    }
  }
`;

// Estilos do conteúdo da página
export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

// Rodapé estilizado
export const Footer = styled.footer`
  background-color:  #359ef1;
  color: white;
  text-align: center;
  padding: 10px;
  margin-top: auto;
`;
