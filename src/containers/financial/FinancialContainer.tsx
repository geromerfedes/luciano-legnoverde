import BannerComponent from "../../components/banner/BannerComponent"
import HelpComponent from "../../components/help-component/HelpComponent"
import PlannerCardComponent from "../../components/planner-card-component/PlannerCardComponent"
import { BannerFinancial } from "../../utils/BannerData"
import { PlannerCardFinancial } from "../../utils/PlannerCard"

const FinancialContainer = () => {
  return (
    <>
      <BannerComponent banner={BannerFinancial} />
      <div className="main_container">
        <div className="container_intro_section">
          <h1 className="title_global">Etapas del servicio</h1>
          <p>
            <b>Tomar una decisión financiera</b> implica comparar múltiples alternativas. El desarrollo de  <br />
            soluciones se centra en evaluar un conjunto de variables para encontrar la mejor opción<br />
            ajustada a cada necesidad.
          </p>
        </div>
        <PlannerCardComponent planner={PlannerCardFinancial} />
        <HelpComponent />
      </div>
    </>
  )
}

export default FinancialContainer