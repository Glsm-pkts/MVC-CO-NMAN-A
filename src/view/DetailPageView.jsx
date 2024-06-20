import millify from "millify";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar} from 'react-chartjs-2';


const DetailPageView = ({model}) => {
   
  return (
    <div>
      <h3 className="text-center">
        <span className="me-3 fs-4 font-bold">{model.coin?.name}</span>
        <span className="fs-2 text-warning">{model.coin?.symbol}</span>
      </h3>

      <div className="row">
        <section className="col-md-3 d-flex flex-column gap-5 p-5 p-md-4">
          {model?.infoFields?.map((item, i)=>(
            <div key={i} className="text-bg-light rounded shadow-lg text text-center p-3">
              <span className="fs-2">{item.icon}</span>
              <h3 className="fs-2">{item.label}</h3>
              <p className="fw-bold">{millify (item.value)}</p>
              </div>
          ))}
        </section>
        <section className="col-md-9">
          <Line data={model.chartData}/>
          <Bar data={model.chartData}/>
        </section>
      </div>
    </div>
  );
}



export default DetailPageView;
