"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full items-center h-[60vh] justify-center gap-4 py-8 md:py-10">
      <h1
        data-aos="fade-up"
        className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500"
      >
        Coming Soon
      </h1>
      <Button
        onClick={() => {
          router.push("/");
        }}
        data-aos="fade-up"
        variant="light"
        color="primary"
        className="text-lg"
      >
        Go back
      </Button>
    </div>
  );
}
