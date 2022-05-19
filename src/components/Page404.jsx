import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <section className="page404">
      <div className="container">
        <div className="page404__container">
          <h1 className="page404__numbers">404</h1>
            <form>
                <input type="text" name="" id="" required placeholder="Enter any keyword" />
                <input type="submit" value="search" required/>
            </form>
            <h3>Sorry!</h3>
            <p>The page you are looking for does not exist or other error happened!</p>
            <div className="page404__link"><Link to="/"><i className="fas fa-home"></i> GO BACK HOME</Link></div>
        </div>
      </div>
    </section>
  );
}
