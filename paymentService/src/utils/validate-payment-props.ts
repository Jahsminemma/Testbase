import joi from "joi";
import { VerifyPaymentModel } from "../models";

export const handlePropsValidation = (body: VerifyPaymentModel) => {
    const { error } = validateVerifyProps(body);
    if (error) {
      throw Error(error.details[0].message);
    }
  };

export const validateVerifyProps = (value: VerifyPaymentModel) => {
  const verifySchema = joi.object({
    reference: joi.string().min(3).max(60).required(),
    accountNumber: joi.string().min(10).max(10).required(),
    email: joi.string().email().min(3).max(60).required(),
    amount: joi.number().required(),
    bankCode: joi.string().min(3).max(60).required(),
  });

  return verifySchema.validate(value);
};

