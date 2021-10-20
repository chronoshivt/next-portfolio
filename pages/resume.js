import Section from "../components/Section"

import ResumeEmbed from "../components/ResumeEmbed"

function Resume() {

    return (
      <div>

        <Section title="Resume">
        <div className="invisible">
              <p className="text-justify">
                Ryan Diaz is a freelance and a full-stack developer based in Osaka witoodo 
              </p>
            </div>
        <div>
            <ResumeEmbed/>
        </div>
          </Section>

      </div>
    )
  }
  
  export default Resume
  