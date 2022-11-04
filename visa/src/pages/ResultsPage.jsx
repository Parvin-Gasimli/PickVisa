import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { VisaContext } from "../contexts/visaContext";
import { RESULTS } from "../rquery";
import { VisaService } from "../services/VisaService";

export default function ResultsPage() {
  const { inid, resetAll } = useContext(VisaContext);
  const navigate = useNavigate();
  const { data: resultData } = useQuery(
    [RESULTS, inid],
    () => VisaService.getResults(inid),
    {
      enabled: !!inid,
    }
  );

  const handleBtnClick = () => {
    resetAll();
    navigate("/");
  };

  return (
    <div>
     <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6">
        <h4>Results: {resultData?.data?.data.visa_status}</h4>
      <h5>Total result: {resultData?.data?.data.total_result}</h5>
      <button onClick={handleBtnClick}>Go back</button>
        </div>
      </div>
     </div>
    </div>
  );
}
