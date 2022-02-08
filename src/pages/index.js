export { default as AboutPage } from "./about";
export { default as HelpPage } from "./help";
export { default as OurTeamPage } from "./ourTeam";
export { default as PrivacyPolicyPage } from "./privacyPolicy";
export { default as TermsPage } from "./terms";

export const Nav = () => {
  return (
    <div className="container">
      <button className="button">
        <a href="/about" className="link">
          About Page
        </a>
      </button>
      <button className="button">
        <a href="/help" className="link">
          Help Page
        </a>
      </button>
      <button className="button">
        <a href="/our-team" className="link">
          Our Team Page
        </a>
      </button>
      <button className="button">
        <a href="/privacy-policy" className="link">
          Privacy Policy Page
        </a>
      </button>
      <button className="button">
        <a href="/terms" className="link">
          Terms of Service Page
        </a>
      </button>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

          .container {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            background: -moz-radial-gradient(
              circle at 3% 25%,
              rgba(49, 51, 78, 1) 0%,
              rgba(10, 10, 16, 1) 100%
            );
            background: -webkit-radial-gradient(
              circle at 3% 25%,
              rgba(49, 51, 78, 1) 0%,
              rgba(10, 10, 16, 1) 100%
            );
            background: -o-radial-gradient(
              circle at 3% 25%,
              rgba(49, 51, 78, 1) 0%,
              rgba(10, 10, 16, 1) 100%
            );
            background: -ms-radial-gradient(
              circle at 3% 25%,
              rgba(49, 51, 78, 1) 0%,
              rgba(10, 10, 16, 1) 100%
            );
            background: radial-gradient(
              circle at 3% 25%,
              rgba(49, 51, 78, 1) 0%,
              rgba(10, 10, 16, 1) 100%
            );
            display: flex;
            flex-direction: column;
          }

          .button {
            width: 300px;
            height: 45px;
            color: #fff;
            background: #f3386a;
            font-family: "Manrope", sans-serif;
            font-weight: 500;
            font-size: 18px;
            line-height: 25px;
            border-radius: 5px;
            border: 0;
            outline: none;
            cursor: pointer;
            margin-top: 1rem;
            margin-left: auto;
            margin-right: auto;
          }

          .link {
            text-decoration: none;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};
