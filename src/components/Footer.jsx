import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper--box">
            <h1 className="footer__wrapper--box-header">About blog</h1>
            <p className="footer__wrapper--box-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              nobis est sequi!
            </p>
            <div className="footer__wrapper--box-image"></div>
          </div>
          <div className="footer__wrapper--box">
            <h1 className="footer__wrapper--box-header">Lastest tweets</h1>
            <div className="footer__wrapper--box-post">
              <p className="footer__wrapper--box-description">
              <Link to=""> @linkToSomeBody</Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptat quo est, harum tenetur et
              dolores accusamus hic.
              </p>
              <i className="fab fa-twitter"></i>
            </div>
            <div className="footer__wrapper--box-post">
              <p className="footer__wrapper--box-description">
              <Link to="">@linkToSomeBody</Link>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quo est, harum tenetur et
              dolores accusamus hic.
              </p>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
          <div className="footer__wrapper--box">
          <h1 className="footer__wrapper--box-header">Instagram posts</h1>
            <div className="footer__wrapper--box-gallery">
              <div></div>  
              <div></div>  
              <div></div>  
              <div></div>  
              <div></div>  
              <div></div>  
            </div>  
          </div>
        <div className="footer__wrapper--box">
          <h1 className="footer__wrapper--box-header">Lastest comments</h1>
          <div className="footer__wrapper--box-comment">
          <i className="fas fa-user"></i>
            <h3>Maks1mp</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit vel odio dignissimos voluptatum molestiae sed!</p>
          </div>
        </div>
        </div>
      </div>
        <div className="footer__info">
          <h1>©2021,Created by RomanLamer: <Link to="">GitHub</Link></h1>
        </div>
    </section>
  );
}
