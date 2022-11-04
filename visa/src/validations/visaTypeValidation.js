import * as Yup from "yup";

export const visaTypeValidation = Yup.object().shape({
  visa_type: Yup.number().required(),
  country_to: Yup.string().required(),
});
