import React from "react";
import styled from "styled-components";

const RepublicaDominicanaPage = () => {
    return (
        <PageWrapper>
            <HeroSection>
                <h1>Bienvenue en République Dominicaine</h1>
                <p>
                    Découvrez les plages paradisiaques, la culture vibrante et la nature
                    exceptionnelle de cette magnifique destination.
                </p>
            </HeroSection>

            <HighlightsSection>
                <h2>Ce que vous allez adorer :</h2>
                <ul>
                    <li>Plages de sable blanc et eaux turquoise</li>
                    <li>Sports nautiques et plongée sous-marine</li>
                    <li>Gastronomie locale et culture riche</li>
                    <li>Écotourisme dans des parcs nationaux préservés</li>
                </ul>
            </HighlightsSection>

            <ImageGallery>
                <img src="plage.jpg" alt="Plage de République Dominicaine" />
                <img src="culture.jpg" alt="Culture Dominicaine" />
                <img src="aventure.jpg" alt="Aventure en République Dominicaine" />
            </ImageGallery>
        </PageWrapper>
    );
};

export default RepublicaDominicanaPage;

// --- Styled Components ---
const PageWrapper = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 50px;
  background: linear-gradient(180deg, #0093e9, #80d0c7);
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const HighlightsSection = styled.section`
  margin: 30px 0;
  ul {
    list-style-type: disc;
    padding-left: 40px;
  }

  li {
    margin-bottom: 10px;
    font-size: 1.1rem;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  img {
    width: 30%;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
