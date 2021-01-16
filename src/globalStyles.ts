import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: #E7E7E7;
    color: ${({ theme }: any) => theme.textPrimary};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 50px 0 0 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.4s linear;

    .calculator {
      width: 350px;
      background: ${({ theme }: any) => theme.background};
      border-radius: 15px;

      .header {
        height: 300px;
        
        .theme-toggle-container {
          display: flex;
          justify-content: center;
          
          .theme-toggle {
            background: ${({ theme }: any) => theme.themeToggleBackground};
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 100px;
            height: 50px;
            margin-top: 20px;
            border-radius: 15px;

            button {
              all: unset;
              cursor: pointer;
            }
          } 
        }

        .header-display {
          height: 70%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
          padding-right: 30px;
          
          .history {
            margin-bottom: 8px;
            font-size: 20px;
            
            span {
              color: ${({ theme }: any) => theme.textTertiary};
              margin-left: 10px;
              margin-right: 10px;
            }
          }
          
          .calculation {
            font-size: 40px;
            font-weight: bold;
          }
        }
      }

      .body {
        background: ${({ theme }: any) => theme.bodyBackground};
        height: 400px;
        border-radius: 40px 40px 15px 15px;
      }
      
      &.calculator-dark {
        .icon-sun { color: #66696E !important; }
      }
      
      &.calculator-light {
        .icon-sun { color: #4A4F55 !important; }
        .icon-moon { color: #E1E1E1; }
      }
    }
  }
`;
