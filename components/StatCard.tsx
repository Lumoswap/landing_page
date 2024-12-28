import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

interface StatCardProps {
  title: string;
  count: string;
  description: string;
  index: number;
}

const StatCard = ({ title, count, description, index }: StatCardProps) => {
  return (
    <Card data-aos="flip-up" data-aos-delay={index * 100} className="p-4">
      <CardHeader>
        <p className="text-3xl">{count}</p>
      </CardHeader>
      <br />
      <CardBody>
        <p className="text-xl text-primary">{title}</p>
        <p>{description}</p>
      </CardBody>
    </Card>
  );
};

export default StatCard;
