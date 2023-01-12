import React from "react";
import style from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { Section } from "../shared/Section";
import { MaxWidth } from "../../../shared/MaxWidth";
import { SectionTitle } from "../shared/SectionTitle";

const Gradient = style.div`
  min-height:100vh;
  background: linear-gradient(126deg, rgba(2,0,36,1) 0%, rgba(9,121,78,1) 35%, rgba(7,61,99,1) 100%);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${(props) => props.theme.text.primaryColor}};
`;
const GradientInside = style.div`
    padding: 0em 0em;
    display: flex;
    flex-direction: column;
`;

const Qualifications = style.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  `;

const Qualification = style.div`
  font-size: 1.25rem;
  text-align: center;
  flex: 1 0 33.333%;
  max-width: 320px;
`;

const Text = style.p`
  display: block;
  padding: 2em 1em;
`;

const Coin = style.div`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0 0 8px rgba(14, 18, 57, 0.5);
  margin: 4em auto;
`;

export const AboutMe: React.FC = () => {
  const data = useStaticQuery<Queries.QualificationsQuery>(graphql`
    query Qualifications {
      allQualificationsJson {
        edges {
          node {
            id
            value
          }
        }
      }
    }
  `);

  return (
    <Gradient id="about-me">
      <GradientInside>
        <Coin>
          <StaticImage src="../../../../images/photo.jpeg" alt="Dan Imbrogno" />
        </Coin>
        <Section>
          <Qualifications>
            {data.allQualificationsJson.edges.map(({ node }) => (
              <Qualification key={node.id}>
                <Text>{node.value}</Text>
              </Qualification>
            ))}
          </Qualifications>
        </Section>
      </GradientInside>
    </Gradient>
  );
};
