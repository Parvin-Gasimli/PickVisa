import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  name: Yup.string().required(),
  resident_of: Yup.string().required(),
  country_from: Yup.string().required(),
  visa_type: Yup.number().required(),
  country_to: Yup.string().required(),
  source: Yup.string().required(),
});
