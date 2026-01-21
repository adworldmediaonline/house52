"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    topic: "",
    telephone: "",
    gameInquiry: "",
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-foreground">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name here"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="bg-input/30"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-foreground">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name here"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="bg-input/30"
          />
        </div>
      </div>

      {/* Email Address */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-foreground">
          Email Address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Example: user@website.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-input/30"
        />
      </div>

      {/* Topic */}
      <div className="space-y-2">
        <Label htmlFor="topic" className="text-foreground">
          Topic <span className="text-destructive">*</span>
        </Label>
        <Input
          id="topic"
          name="topic"
          type="text"
          placeholder="How can we help you?"
          value={formData.topic}
          onChange={handleChange}
          required
          className="bg-input/30"
        />
      </div>

      {/* Telephone */}
      <div className="space-y-2">
        <Label htmlFor="telephone" className="text-foreground">
          Telephone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="telephone"
          name="telephone"
          type="tel"
          placeholder="+(602) 448 763 22"
          value={formData.telephone}
          onChange={handleChange}
          required
          className="bg-input/30"
        />
      </div>

      {/* Game Inquiry */}
      <div className="space-y-2">
        <Label htmlFor="gameInquiry" className="text-foreground">
          Game Inquiry <span className="text-destructive">*</span>
        </Label>
        <Input
          id="gameInquiry"
          name="gameInquiry"
          type="text"
          placeholder="Poker etc"
          value={formData.gameInquiry}
          onChange={handleChange}
          required
          className="bg-input/30"
        />
      </div>

      {/* Comments / Questions */}
      <div className="space-y-2">
        <Label htmlFor="comments" className="text-foreground">
          Comments / Questions <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="comments"
          name="comments"
          placeholder="Add text"
          value={formData.comments}
          onChange={handleChange}
          required
          rows={5}
          className="bg-input/30 min-h-[120px]"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold uppercase tracking-wide px-8 py-6 h-auto rounded-xl"
      >
        Send Message
      </Button>
    </form>
  );
}
