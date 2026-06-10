export type FormState = {
  name: string;
  email: string;
  phone: string;
  places: string;
  message: string;
};

export type FormAction =
  | {
      type: "SET_FIELD";
      payload: { field: keyof FormState; value: string };
    }
  | { type: "RESET_FORM" };
