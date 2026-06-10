"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { ChangeEvent, useReducer, useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./ui/combobox";
import { FormAction, FormState } from "@/type";

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  places: "",
  message: "",
};

function reducer(state: FormState, action: FormAction) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case "RESET_FORM":
      return initialFormState;
    default:
      return state;
  }
}

const places = ["Bishkek", "Naryn", "Issyk Kul"];

export const TravelInquiryForm = () => {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [loading, setLoading] = useState(false);

  const handleValueChange = (field: keyof FormState, value: string) => {
    dispatch({
      type: "SET_FIELD",
      payload: {
        field,
        value,
      },
    });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    handleValueChange(e.target.id as keyof FormState, e.target.value);
  };

  return (
    <div>
      <form
        className="w-full max-w-sm"
        onSubmit={async (event) => {
          setLoading(true);
          event.preventDefault();
          const response = await fetch("/api/contact-request/", {
            method: "POST",
            body: JSON.stringify(state),
          });

          if (response.ok) {
            dispatch({
              type: "RESET_FORM",
            });
          } else {
            const data = await response.json();
            alert(data.message);
          }

          setLoading(false);
        }}
      >
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="name">Your Name</FieldLabel>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                value={state.name}
                onChange={handleChange}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={state.email}
                onChange={handleChange}
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="phone">Phone / WhatsApp</FieldLabel>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={state.phone}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="places">
              Places you are interested in
            </FieldLabel>
            <Combobox
              items={places}
              value={state.places}
              onValueChange={(value) => {
                handleValueChange("places", value ?? "");
              }}
            >
              <ComboboxInput id="places" placeholder="Select or type places" />
              <ComboboxContent>
                <ComboboxEmpty>No items found.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <FieldDescription>You can choose multiple places</FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor="message">Tell me about your trip</FieldLabel>
            <Textarea
              id="message"
              placeholder="What are you looking for? Any special requests?"
              className="resize-none"
              value={state.message}
              onChange={handleChange}
            />
          </Field>
          <Field orientation="horizontal">
            <Button type="submit" disabled={loading}>
              Send Inquiry
            </Button>
            <FieldDescription>
              Your information is safe with me.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}
