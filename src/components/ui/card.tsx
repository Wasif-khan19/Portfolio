"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardTitle,
} from "../ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Lead The Competition"
        revealText="Feel Free To Say Hello "
      >
        <TextRevealCardTitle>
          Time To Hire A Professional
        </TextRevealCardTitle>
      </TextRevealCard>
    </div>
  );
}
