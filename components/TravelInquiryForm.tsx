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
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue
} from "./ui/combobox";
import { FormAction, FormState } from "@/type";

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  places: [], // ""
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

const placeOptions = ["Bishkek", "Naryn", "Issyk Kul"];

export const TravelInquiryForm = () => {
  const [state, dispatch] = useReducer(reducer, initialFormState);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleValueChange = (field: keyof FormState, value: string | string[]) => {
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

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="mb-3 text-3xl font-semibold text-green-700">
          Inquiry Sent Successfully!
        </h2>

        <p className="mb-6 text-muted-foreground">
          Thank you for reaching out. I’ve received your inquiry and will get
          back to you shortly with travel recommendations and ideas for your
          Kyrgyzstan adventure.
        </p>

        <div className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
          ✓ Your message has been received.
        </div>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div>
      <form
        className="w-full max-w-sm"
        onSubmit={async (event) => {
          setLoading(true);
          event.preventDefault();
          const response = await fetch("/api/contact-request/", {
            method: "POST",
            body: JSON.stringify({
              ...state,
              places: state.places.join(", "),
            }),
          });

          if (response.ok) {
            dispatch({
              type: "RESET_FORM",
            });
            setIsSubmitted(true);
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
              items={placeOptions}
              multiple
              value={state.places}
              onValueChange={(value) => {
                handleValueChange("places", value ?? "");
              }}
            >
              <ComboboxChips className="w-full">
                <ComboboxValue>
                  {(values) => (
                    <>
                      {values.map((place: string) => (
                        <ComboboxChip key={place}>{place}</ComboboxChip>
                      ))}
                      <ComboboxChipsInput
                        id="places"
                        placeholder="Select or type places"
                      />
                    </>
                  )}
                </ComboboxValue>
              </ComboboxChips>
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
};
