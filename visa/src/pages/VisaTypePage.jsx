import { useFormik } from "formik";
import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { VisaContext } from "../contexts/visaContext";
import { COUNTRIES, VISA_TYPES } from "../rquery";
import { VisaService } from "../services/VisaService";
import { visaTypeValidation } from "../validations/visaTypeValidation";


export default function VisaTypePage() {
  const navigate = useNavigate();
  const { submitVisaType } = useContext(VisaContext);

  const { data: countriesData } = useQuery([COUNTRIES], () =>
    VisaService.getCountries()
  );

  const { data: visaTypesData } = useQuery([VISA_TYPES], () =>
    VisaService.getVisaTypes()
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      visa_type: null,
      country_to: null,
    },
    validationSchema: visaTypeValidation,
    onSubmit: (values) => {
      submitVisaType(values);
      navigate("/form");
    },
  });

  return (
    <div>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 ">
        <h4>
        Hey amigo! Wassup? Answer questions, and I'll tell your chance of
        obtaining the required visa.
      </h4>
      <br />
    
      <select className="my-3" name="country_to" onChange={formik.handleChange}>
        <option  selected disabled value={0}>
          Visiting
        </option>
        {countriesData?.data?.data.map((c, i) => {
          return (
            <option key={i} value={c.short_code}>
              {c.name}
            </option>
          );
        })}
      </select>
      <br />
      <select className="my-3" name="visa_type" onChange={formik.handleChange}>
        <option selected disabled value={0}>
          Visit purpose
        </option>
        {visaTypesData?.data.map((vt, i) => {
          return (
            <option key={i} value={vt.id}>
              {vt.title}
            </option>
          );
        })}
      </select>
      <br />
      <button type="button" onClick={formik.handleSubmit}>
        submit
      </button>
        </div>
      </div>
    </div>
    </div>
  );
}
