"use client";

import { Spacer } from "@nextui-org/spacer";
import { Button } from "@nextui-org/button";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import StatCard from "@/components/StatCard";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { I3DRotate } from "iconsax-react";
import MediumBlogCard from "@/components/MediumBlogCard";
import PhaseCard from "@/components/PhaseCard";
import { useState } from "react";

export default function Home() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [activeTab, setActiveTab] = useState("phase1");

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center">
        <span className="text-white text-3xl lg:text-5xl font-medium tracking-tight inline-block leading-10">
          Empowering Your{" "}
          <span className="text-default-400"> DeFi Journey </span> <br /> with
          Innovation and Security
        </span>
        <br />
        <Spacer y={5} />
        <p className="text-md text-default-400">
          Cutting-edge decentralized exchange (DEX) built on the Creatorchain, a{" "}
          <br />
          high-performance Layer 2 blockchain developed on Optimism’s Superchain
        </p>
        <Spacer y={5} />
        <div className="flex gap-5 items-center justify-center">
          <Button>
            Explore Features
            <GoArrowRight />
          </Button>
          <Button variant="solid" color="primary">
            Launch App
          </Button>
        </div>
      </div>
      <Spacer y={14} />
      <Image src="/images/swap.svg" width={400} height={400} alt="Hero" />
      <Spacer y={36} />
      <div className="flex items-center justify-center flex-col">
        <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
          Our Partner
        </h3>
        <Image
          src="/images/creator_logo.svg"
          width={400}
          height={50}
          alt="Partner"
        />
        <Spacer y={24} />
        <span className="text-white text-3xl text-center lg:text-5xl font-medium tracking-tight inline-block leading-10">
          Build On Superchain, <br />
          <span className="text-default-400"> supported by </span> Creatorchain
        </span>
      </div>
      <Spacer y={10} />
      <div className="flex gap-4">
        <StatCard
          title="Total users"
          count="5k+"
          description="In the last 30 days"
        />
        <StatCard
          title="Total Trades"
          count="50k+"
          description="In the last 30 days"
        />
        <StatCard
          title="Total Volume"
          count="$10M+"
          description="In the last 30 days"
        />
        <StatCard
          title="Total Value Locked"
          count="$2M+"
          description="In the last 30 days"
        />
      </div>

      <section>
        <Spacer y={72} />
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
            Features
          </h3>
        </div>
        <Spacer y={10} />
        <div className="flex gap-4 justify-between">
          <div className="flex-1">
            <p>
              At Lumoswap, we're revolutionizing the DeFi space by offering
              advanced trading features, robust financial tools, and a seamless
              user experience that puts you in control of your financial future.
            </p>
            <Accordion selectionMode="multiple">
              <AccordionItem
                startContent={<I3DRotate size="20" color="#FFD700" />}
                key="1"
                aria-label="Accordion 1"
                title={
                  <p className="font-semibold text-medium">Token Swaps:</p>
                }
              >
                Effortlessly trade a wide variety of digital assets with minimal
                fees and lightning-fast execution.
              </AccordionItem>
              <AccordionItem
                startContent={<I3DRotate size="20" color="#FFD700" />}
                key="2"
                aria-label="Accordion 2"
                title={
                  <p className="font-semibold text-medium">Cross-Chain Swaps</p>
                }
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                title={
                  <p className="font-semibold text-medium">Perpetual Futures</p>
                }
                startContent={<I3DRotate size="20" color="#FFD700" />}
                key="3"
                aria-label="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                title={
                  <p className="font-semibold text-medium">
                    Staking & Yield Farming
                  </p>
                }
                startContent={<I3DRotate size="20" color="#FFD700" />}
                key="3"
                aria-label="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                title={
                  <p className="font-semibold text-medium">NFT Marketplace</p>
                }
                startContent={<I3DRotate size="20" color="#FFD700" />}
                key="3"
                aria-label="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex-1 justify-center items-center flex">
            <Image
              src="/images/chart.svg"
              width={500}
              height={700}
              alt="Partner"
            />
          </div>
        </div>
        <Spacer y={48} />
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
            Roadmap
          </h3>
          <Spacer y={10} />
          <Tabs
            selectedKey={activeTab}
            onSelectionChange={(v) => {
              setActiveTab(v.toString());
            }}
            key={"lg"}
            aria-label="Tabs sizes"
            size={"lg"}
          >
            <Tab key="phase1" title="Phase 1" />
            <Tab key="phase2" title="Phase 2" />
            <Tab key="phase3" title="Phase 3" />
            <Tab key="phase4" title="Phase 4" />
          </Tabs>
          <Spacer y={10} />
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            <PhaseCard
              title="Foundation & Planning"
              steps={[
                "Conceptualization",
                "Brainstorming",
                "Team Recruitment",
                "Planning",
                "Branding",
                "Partnership Announcement",
                "Project Site & Whitepaper Launch"
              ]}
              isActive={activeTab === "phase1"}
            />
            <PhaseCard
              title="Testnet Rollout"
              steps={[
                "DEX Testnet Launch",
                "Testnet Task Launch",
                "User Onboarding Campaign",
                "Partnership Expansion",
                "Academy Launch",
                "Perpetual Futures Testnet Launch"
              ]}
              isActive={activeTab === "phase2"}
            />
            <PhaseCard
              title="Mainnet Deployment"
              steps={[
                "Mainnet Launch",
                "DApp Audit",
                "Mainnet Contract Deployment & Audit",
                "Community AMA",
                "IDO and Project Launch",
                "Global Marketing Push",
                "Milestone Metrics: $500K trading volume in week 1, 10,000 active users in month 1"
              ]}
              isActive={activeTab === "phase3"}
            />
            <PhaseCard
              title="Testnet Rollout"
              steps={[
                "DEX Testnet Launch",
                "Testnet Task Launch",
                "User Onboarding Campaign",
                "Partnership Expansion",
                "Academy Launch",
                "Perpetual Futures Testnet Launch"
              ]}
              isActive={activeTab === "phase4"}
            />
          </div>

          <Spacer y={24} />
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center flex-col">
          <h3 className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500">
            Featured Updates
          </h3>
          <Spacer y={10} />
          <MediumBlogCard limit={4} url={"https://medium.com/feed/@lumoswap"} />
          <Spacer y={20} />
          <Button
            onPress={() =>
              window.open("https://medium.com/@lumoswap", "_blank")
            }
          >
            See more updates
            <GoArrowRight />
          </Button>
        </div>
      </section>
    </div>
  );
}
