import { Card, CardBody, Spacer } from "@nextui-org/react";
import React from "react";

interface PhaseCardProps {
  title: string;
  isActive?: boolean;
  steps: string[];
}

const PhaseCard = ({ title, isActive, steps }: PhaseCardProps) => {
  return (
    <div
      className="flex flex-col"
      style={{
        opacity: isActive ? 1 : 0.2,
        transition: "opacity 0.3s ease-in-out"
      }}
    >
      <Card className="px-2 py-2">
        <CardBody>
          <p className="text-lg text-white">{title}</p>
        </CardBody>
      </Card>
      <Spacer y={2} />
      <Card style={{ height: "240px", width: "330px" }} className="px-2 py-2">
        <CardBody>
          {steps.map((step, index) => (
            <p className="text-[15px]" key={`${step}-${index}`}>
              {step}
            </p>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};

export default PhaseCard;
