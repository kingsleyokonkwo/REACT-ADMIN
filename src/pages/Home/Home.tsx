import Chartbox from "../../components/Chartbox/Chartbox";
import TopBox from "../../components/TopBox/TopBox";
import "./Home.scss";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxVisit,
  barChartBoxRevenue,
} from "../../data";
import BarchartBox from "../../components/BarChartBox/BarchartBox";
import PiechartBox from "../../components/PiechartBox/PiechartBox";
import BigChart from "../../components/BigChart/BigChart";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PiechartBox />
      </div>
      <div className="box box5">
        <Chartbox {...chartBoxConversion} />
      </div>
      <div className="box box6">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7">
        <BigChart />
      </div>
      <div className="box box8">
        <BarchartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarchartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
