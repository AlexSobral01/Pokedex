export default function contact() {
  return (
    <div style={{ display: "flex", flexDirection: "column",  gap: "10px", color: "white", padding: "15px", maxWidth: "80vw", margin: "auto" }}>
      <h1 style={{margin: "15px 0px"}}>Contact</h1>
      <div>
        <p>Email:</p>
        <a href="mailto:alex.dacostasobral@gmail.com"
        style={{color: "lightBlue "}}
        >Press here to send me a email.</a>
      </div>
      <div>
        <p>Phone:</p>
        <p>I haven&rsquo; t</p>
      </div>
      <div>
        <p>Github</p>
        <a href="https://github.com/AlexSobral01" target="_blank"
        style={{color: "lightBlue "}}
        >Press here to see my github</a>
      </div>
      <div>
        <p>Instagram:</p>
        <a href="" target="_blank"
        style={{color: "lightBlue "}}
        >Press here to see my instagram</a>
      </div>
    </div>
  )
}