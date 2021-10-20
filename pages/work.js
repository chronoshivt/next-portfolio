import Section from "../components/Section"
import CardItem from "../components/CardItem"
import LyricfyThumbnail from "../public/thumbnail/lyricfythumb.PNG"
import FaceThumbnail from "../public/thumbnail/facethumb.PNG"
import ScottsThumbnail from "../public/thumbnail/uzithumb.PNG"

function Work() {
    return (
      <div>
          <Section title="Work">
          <CardItem
          title="Scotts NFT"
          thumbnail={ScottsThumbnail}
          id="scotts"
          >
            Lead full stack developer for NFT project on
            Solana Blockchain.
          </CardItem>
          </Section>

          <Section title="Projects"> 
            <CardItem
            title="Lyricfy"
            thumbnail={LyricfyThumbnail}
            id="lyricfy"
            >
              Opens the Genius lyric page for whatever
              Spotify song is currently playing.
          </CardItem>

          <CardItem
          title="Face Detect"
          thumbnail={FaceThumbnail}
          id="facedetect"
          >
              Uses Clarifai API to detect faces in 
              the given picture.
          </CardItem>

          </Section>
      </div>
    )
  }
  
  export default Work
  