import { useState } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const [isOpen, updateOpen] = useState(false);
  const [isSecondOpen, updateSecondOpen] = useState(false);
  const [isLiked, updateLikes] = useState(false);
  
  return (
    <section className="main">
      <div className="container">
          <div className="main__post">
            <div className="main__post--img">
              <i className="far fa-images"></i>
            </div>
            <div className="main__post--body">
              <h3 className="main__post--subtitle">Traveling</h3>
              <h1 className="main__post--title">
                be the one to stand out in the crowed
              </h1>
              <div className="main__post--links">
                <Link to="">
                  <i className="fas fa-download"></i>Download from disk
                </Link>
                <Link to="">
                  <i className="fas fa-table"></i>09 May 2021
                </Link>
              </div>
              <p
                className="main__post--description"
                style={
                  isOpen
                    ? {
                      maxHeight:"800px"
                      }
                    : {}
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, ipsa error? Ad facilis dicta mollitia voluptates
                laudantium fuga amet! Suscipit ut nisi corrupti velit nobis
                pariatur, consequuntur aut quae, tempore vitae possimus quidem
                esse quas doloremque ea rem quasi repellat id veniam ullam
                voluptates. Neque similique, consequuntur nobis incidunt
                aspernatur odio officia, natus dignissimos voluptates nihil quae
                repellat consectetur cum quo dolorum, praesentium excepturi
                aliquid. Porro distinctio dolorum pariatur ipsum aperiam aliquam
                voluptate magni veritatis vero harum enim possimus alias velit
                ex recusandae adipisci nulla sit optio itaque nesciunt, error
                omnis tempora. Sint illum ratione itaque sit repellendus ad
                impedit praesentium excepturi modi omnis accusantium dicta
                porro, saepe sunt! Quo temporibus consequatur sapiente
                asperiores nisi nostrum, nesciunt totam culpa suscipit quisquam
                nulla est quod dolorum magnam deserunt, animi corporis alias nam
                quaerat reprehenderit. Quae consectetur dolorem inventore ipsum
                soluta nam saepe? Aperiam nulla dolore in ipsam fugiat labore
                laudantium officiis vitae ipsa earum quam, nisi dicta iure atque
                ad sed? Unde veniam obcaecati fugiat animi expedita, nulla
                itaque, omnis, molestias suscipit numquam placeat vitae
                assumenda repellat distinctio exercitationem quod id. Corporis
                magni doloribus accusantium modi quo ipsa perspiciatis molestiae
                sint aperiam itaque optio cum asperiores fugit iure totam magnam
                architecto id voluptatibus aut, commodi nesciunt, consectetur
                veritatis! Maxime accusantium id animi perspiciatis, provident
                molestiae necessitatibus voluptatibus consequuntur dignissimos
                quod est officia eum explicabo consequatur ipsam omnis qui odit
                dolore sapiente obcaecati quis architecto fugiat numquam
                reiciendis! Culpa, dolor architecto iste tempore voluptatem
                obcaecati labore et quam facere aspernatur asperiores alias
                perspiciatis tempora odit quos officia. Illo soluta ipsum
                deleniti rem quo mollitia error quibusdam! Ducimus culpa
                incidunt veritatis consequatur ad nostrum, accusamus ratione,
                fugit exercitationem in distinctio tempore temporibus quia
                tenetur sapiente neque est magnam molestiae commodi inventore
                magni? Similique culpa, dolore asperiores ad laborum sapiente
                quibusdam omnis placeat ab, officia dolores amet. Distinctio
                tempora eveniet quae iusto odio voluptatem impedit! Quasi,
                distinctio. Totam eaque porro quam molestias necessitatibus,
                minima earum sit libero quaerat quae ex incidunt odit. Quae, ab,
                hic fugiat unde quia, aliquam rem sed temporibus nobis officiis
                ducimus explicabo quasi alias quidem ex odit saepe nam?
                Molestiae, aut magnam? Praesentium, nostrum incidunt temporibus
                numquam voluptate eius doloremque deleniti, earum quidem laborum
                a, minima reprehenderit quod corporis eveniet dicta quas!
                Quibusdam quidem ipsa, error, accusamus quo architecto
                distinctio consectetur quam dolor doloremque ducimus doloribus
                adipisci hic. Vitae quibusdam praesentium tenetur nulla eos
                similique nesciunt, repellat nostrum in laborum?
              </p>
              <button
                onClick={() => {
                  updateOpen(!isOpen);
                }}
              >
                <i style={isOpen ? { opacity: 0 } : {}}> Read more </i>
                <i
                  className="far fa-times-circle"
                  style={isOpen ? {} : { opacity: 0 }}
                ></i>
              </button>
              <hr />
              <div className="main__post--share">
                <div className="main__post--share-controls">
                  <Link to="">
                    <i className="far fa-comments"></i>Leave comment
                  </Link>
                  <Link
                    to=""
                    onClick={() => {
                      updateLikes(!isLiked);
                    }}
                  >
                    <span className={isLiked ? "none" : ""}>
                      <i className="far fa-heart"></i>
                    </span>
                    <span className={isLiked ? "" : "none"}>
                      <i className="fas fa-heart"></i>
                    </span>
                    Like
                  </Link>
                </div>
                <div className="main__post--share-item">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-google-plus-g"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </div>
          <div className="main__post--gallery">
            <div className="main__post--gallery-item">
              <div></div>
              <div></div>
            </div>
            <div className="main__post--gallery-item"></div>
            <div className="main__post--gallery-item">
              <div></div>
              <div></div>
            </div>
            <i className="far fa-images"></i>
          </div>
          <h3 className="main__post--subtitle">Traveling</h3>
              <h1 className="main__post--title">
                be the one to stand out in the crowed
              </h1>
              <div className="main__post--links">
                <Link to="">
                  <i className="fas fa-download"></i>Download from disk
                </Link>
                <Link to="">
                  <i className="fas fa-table"></i>09 May 2021
                </Link>
              </div>
              <p
                className="main__post--description"
                style={
                  isSecondOpen
                    ? {
                      maxHeight:"800px"
                      }
                    : {}
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, ipsa error? Ad facilis dicta mollitia voluptates
                laudantium fuga amet! Suscipit ut nisi corrupti velit nobis
                pariatur, consequuntur aut quae, tempore vitae possimus quidem
                esse quas doloremque ea rem quasi repellat id veniam ullam
                voluptates. Neque similique, consequuntur nobis incidunt
                aspernatur odio officia, natus dignissimos voluptates nihil quae
                repellat consectetur cum quo dolorum, praesentium excepturi
                aliquid. Porro distinctio dolorum pariatur ipsum aperiam aliquam
                voluptate magni veritatis vero harum enim possimus alias velit
                ex recusandae adipisci nulla sit optio itaque nesciunt, error
                omnis tempora. Sint illum ratione itaque sit repellendus ad
                impedit praesentium excepturi modi omnis accusantium dicta
                porro, saepe sunt! Quo temporibus consequatur sapiente
                asperiores nisi nostrum, nesciunt totam culpa suscipit quisquam
                nulla est quod dolorum magnam deserunt, animi corporis alias nam
                quaerat reprehenderit. Quae consectetur dolorem inventore ipsum
                soluta nam saepe? Aperiam nulla dolore in ipsam fugiat labore
                laudantium officiis vitae ipsa earum quam, nisi dicta iure atque
                ad sed? Unde veniam obcaecati fugiat animi expedita, nulla
                itaque, omnis, molestias suscipit numquam placeat vitae
                assumenda repellat distinctio exercitationem quod id. Corporis
                magni doloribus accusantium modi quo ipsa perspiciatis molestiae
                sint aperiam itaque optio cum asperiores fugit iure totam magnam
                architecto id voluptatibus aut, commodi nesciunt, consectetur
                veritatis! Maxime accusantium id animi perspiciatis, provident
                molestiae necessitatibus voluptatibus consequuntur dignissimos
                quod est officia eum explicabo consequatur ipsam omnis qui odit
                dolore sapiente obcaecati quis architecto fugiat numquam
                reiciendis! Culpa, dolor architecto iste tempore voluptatem
                obcaecati labore et quam facere aspernatur asperiores alias
                perspiciatis tempora odit quos officia. Illo soluta ipsum
                deleniti rem quo mollitia error quibusdam! Ducimus culpa
                incidunt veritatis consequatur ad nostrum, accusamus ratione,
                fugit exercitationem in distinctio tempore temporibus quia
                tenetur sapiente neque est magnam molestiae commodi inventore
                magni? Similique culpa, dolore asperiores ad laborum sapiente
                quibusdam omnis placeat ab, officia dolores amet. Distinctio
                tempora eveniet quae iusto odio voluptatem impedit! Quasi,
                distinctio. Totam eaque porro quam molestias necessitatibus,
                minima earum sit libero quaerat quae ex incidunt odit. Quae, ab,
                hic fugiat unde quia, aliquam rem sed temporibus nobis officiis
                ducimus explicabo quasi alias quidem ex odit saepe nam?
                Molestiae, aut magnam? Praesentium, nostrum incidunt temporibus
                numquam voluptate eius doloremque deleniti, earum quidem laborum
                a, minima reprehenderit quod corporis eveniet dicta quas!
                Quibusdam quidem ipsa, error, accusamus quo architecto
                distinctio consectetur quam dolor doloremque ducimus doloribus
                adipisci hic. Vitae quibusdam praesentium tenetur nulla eos
                similique nesciunt, repellat nostrum in laborum?
              </p>
              <button
                onClick={() => {
                  updateSecondOpen(!isSecondOpen);
                }}
              >
                <i style={isSecondOpen ? { opacity: 0 } : {}}> Read more </i>
                <i
                  className="far fa-times-circle"
                  style={isSecondOpen ? {} : { opacity: 0 }}
                ></i>
              </button>
              <hr />
              <div className="main__post--share">
                <div className="main__post--share-controls">
                  <Link to="">
                    <i className="far fa-comments"></i>Leave comment
                  </Link>
                  <Link
                    to=""
                    onClick={() => {
                      updateLikes(!isLiked);
                    }}
                  >
                    <span className={isLiked ? "none" : ""}>
                      <i className="far fa-heart"></i>
                    </span>
                    <span className={isLiked ? "" : "none"}>
                      <i className="fas fa-heart"></i>
                    </span>
                    Like
                  </Link>
                </div>
                <div className="main__post--share-item">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-google-plus-g"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
        </div>
        <div className="main__sidebar">
          <form>
            <input placeholder="search" type="text" name="search" />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
          <div className="main__sidebar--collectors">
              <ul>
                <div>
                  <i></i>
                  <h3><b>R</b><span>Blog & <br /> magazine <br /> wp theme</span></h3>
                </div>
                <section>
                  <h3 className="main__sidebar--collectors-header">catagories</h3>
                  <li className="main__sidebar--collectors-item"><span>lifestyle</span><i>58</i></li>
                  <li className="main__sidebar--collectors-item"><span>audio</span><i>102</i></li>
                  <li className="main__sidebar--collectors-item"><span>gallery</span><i>83</i></li>
                  <li className="main__sidebar--collectors-item"><span>image</span><i>64</i></li>
                  <li className="main__sidebar--collectors-item"><span>standard</span><i>109</i></li>
                  <li className="main__sidebar--collectors-item"><span>status</span><i>50</i></li>
                  <li className="main__sidebar--collectors-item"><span>video</span><i>102</i></li>
                </section>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
