import "./page.scss";

import Grid from "src/components/home/grid";
import Sidebar from "src/components/home/sidebar";
// import fetchData from "src/lib/fetchData";
import paths from "src/lib/paths";

// import { getBasePath, isProd } from "src/lib/environment";

const Home = async () => {
  // if (isProd()) {
  //   for (const path of paths) {
  //     const views = await fetchData(
  //       `${getBasePath()}/api/views?id=${path.params.theme}`,
  //     );

  //     path.params.views = parseInt(views);
  //   }

  //   paths.sort((a, b) => {
  //     return b.params.views - a.params.views;
  //   });
  // }

  return (
    <section className="home">
      <div className="container">
        <Sidebar />
        <div className="apps-wrapper">
          <div className="title-wrapper">
            <h2>Discover</h2>
            <span>Browse the ever-growing selection of apps supported.</span>
          </div>
          <Grid paths={paths} />
        </div>
      </div>
    </section>
  );
};

export default Home;
