export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <nav className="banner__nav">
          <nav className="banner__nav--menu">
            <input id="menu__toggle" type="checkbox" />
            <label htmlFor="menu__toggle">
              <i></i>
            </label>

            <ul>
              <li>Banner</li>
              <li onClick={()=>{
                document.querySelector(".main__post--img").scrollIntoView({behavior:"smooth",block:"center"})
              }}>Posts</li>
              <li onClick={()=>{
                document.querySelector(".footer").scrollIntoView({behavior:"smooth",block:"center"})
              }}>Footer</li>
            </ul>
          </nav>
          <nav className="banner__nav--logo">MYBLOG</nav>
          <nav className="banner__nav--links">
            <div>
              <i className="fab fa-instagram"></i>
            </div>
            <div>
              <i className="fab fa-facebook-square"></i>
            </div>
            <div>
              <i className="fab fa-twitter"></i>
            </div>
            <div>
              <i className="fab fa-google-plus-g"></i>
            </div>
          </nav>
        </nav>
        <div className="banner__bg">
          <p>Lastest news!</p>
          <h1>
            Blog here,info <br /> about me!
          </h1>
        </div>
        <form className="banner__offer">
          <h1>
            signup to <br /> newslatter
          </h1>
          <input type="text" placeholder="Name" name="" required />
          <input
            type="Email"
            placeholder="Email adress"
            name=""
            required
          />
          <input type="submit" value="Subscribe now" />
        </form>
      </div>
    </section>
  );
}
