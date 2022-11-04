import { useFormik } from "formik";
import React, { useContext } from "react";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { VisaContext } from "../contexts/visaContext";
import { COUNTRIES } from "../rquery";
import { VisaService } from "../services/VisaService";
import { formValidation } from "../validations/formValidation";

export default function PersonalFormPage() {
  const navigate = useNavigate();

  const { country_to, visa_type, source, setInid } = useContext(VisaContext);

  const { data: countriesData } = useQuery([COUNTRIES], () =>
    VisaService.getCountries()
  );

  const { mutate: mutateStart } = useMutation(
    (values) => VisaService.postStart(values),
    {
      onSuccess: (data) => {
        const { inid } = data?.data?.data;
        setInid(inid);
        navigate("/quiz");
      }
    }
  );

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      visa_type,
      country_to,
      source,
      name: null,
      resident_of: null,
      country_from: null
    },
    validationSchema: formValidation,
    onSubmit: (values) => {
      mutateStart(values);
    }
  });

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <h3>
              Hey amigo! Wassup? Answer questions, and I'll tell your chance of
              obtaining the required visa.
            </h3>
            <input
              name="name"
              placeholder="Your name"
              onChange={formik.handleChange}
              type="text"
            />
            <br />
            <select
              className="my-3"
              name="country_from"
              onChange={formik.handleChange}
            >
              <option selected disabled value={0}>
                Where are you from?
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
            <select
              className="my-3"
              name="resident_of"
              onChange={formik.handleChange}
            >
              <option selected disabled value={0}>
                Your residency?
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
            <button type="button" onClick={formik.handleSubmit}>
              start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
