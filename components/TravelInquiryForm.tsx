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
import { useReducer, useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "./ui/combobox";

const initialState = "";

function reducer(state, action) {
  switch (action.type) {
    case "SET_FIELD": {
      const newState = [
        ...state,
        {
          name: action.payload,
          email: action.payload,
          phone: action.payload,
          places: action.payload,
          message: action.payload,
        },
      ];
      return newState;
    }

    case "RESET": {
    }
    default:
      throw new Error();
  }
}

const places = ["Bishkek", "Naryn", "Issyk Kul"];

export function TravelInquiryForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <form
        className="w-full max-w-sm"
        onSubmit={async (event) => {
          setLoading(true);
          event.preventDefault();
          const response = await fetch("/api/contact-request/", {
            method: "POST",
            body: JSON.stringify({}),
          });
          const data = await response.json();

          if (response.ok) {
          } else {
          }

          setLoading(false);
        }}
      >
        <FieldGroup>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="form-name">Your Name</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Email</FieldLabel>
              <Input
                id="form-email"
                type="email"
                placeholder="john@example.com"
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="form-phone">Phone / WhatsApp</FieldLabel>
            <Input
              id="form-phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="form-country">
              Places you are interested in
            </FieldLabel>
            <Combobox items={places}>
              <ComboboxInput placeholder="Select or type places" />
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
            <FieldLabel htmlFor="checkout-7j9-optional-comments">
              Tell me about your trip
            </FieldLabel>
            <Textarea
              id="checkout-7j9-optional-comments"
              placeholder="What are you looking for? Any special requests?"
              className="resize-none"
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
