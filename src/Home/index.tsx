import { Link } from "react-router-dom";

import Banner from "./Banner";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container text-center mt-4">
        <div className="row">
          <div className="col-4">
            <div className="shadow-sm bg-light">Contact Info</div>
          </div>
          <div className="col-8">
            <div className="shadow-sm bg-light">Short Bio/Recent Highlights</div>
          </div>
        </div>
      </div>
    </>
  );
}
