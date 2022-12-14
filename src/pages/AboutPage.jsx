import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
   return (
      <Card>
         <div className="about">
            <h1>About This Project</h1>
            <p>
               This is a React app to leave feedback for a product or service.
            </p>
            <p>
               It requires json-server as a mock backend to function, clone and
               install all packages to test locally
            </p>
            <p>
               Github repo:{" "}
               <a href="https://github.com/ddastardly91/feedback-app">
                  https://github.com/ddastardly91/feedback-app
               </a>
            </p>
            <p>Version: 1.0.0</p>

            <p>
               <Link to="/">Back to Homepage</Link>
            </p>
         </div>
      </Card>
   );
}

export default AboutPage;
