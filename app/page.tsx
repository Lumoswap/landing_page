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
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      startEvent: "DOMContentLoaded",
      offset: 100,
      once: true
    });
    AOS.refresh();
  }, []);
  const defaultContent =
    "Effortlessly trade a wide variety of digital assets with minimal fees and lightning-fast execution.";

  const [activeTab, setActiveTab] = useState("phase1");

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div
          id="home"
          className="inline-block max-w-full text-center justify-center"
        >
          <span
            data-aos="fade-up"
            className="text-white text-2xl md:text-3xl lg:text-5xl font-medium tracking-tight inline-block leading-10"
          >
            Empowering Your{" "}
            <span className="text-default-400"> DeFi Journey </span> <br /> with
            Innovation and Security
          </span>
          <br />
          <Spacer y={5} />
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-md text-default-400 hidden md:block"
          >
            Cutting-edge decentralized exchange (DEX) built on the Creatorchain,
            a <br />
            high-performance Layer 2 blockchain developed on Optimism’s
            Superchain
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-sm text-default-400 md:hidden block"
          >
            Cutting-edge decentralized exchange (DEX) built on the Creatorchain,
            a high-performance Layer 2 blockchain developed on Optimism’s
            Superchain
          </p>
          <Spacer y={5} />
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex gap-5 items-center justify-center"
          >
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
        <Image
          data-aos="fade-up"
          data-aos-delay="300"
          src="/images/swap.svg"
          width={400}
          height={400}
          className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
          alt="Hero"
        />
        <Spacer y={36} />
        <div className="flex items-center justify-center flex-col">
          <h3
            data-aos="fade-up"
            className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500"
          >
            Our Partner
          </h3>
          <Image
            src="/images/creator_logo.svg"
            width={400}
            height={50}
            alt="Partner"
            data-aos="fade-up"
          />
          <Spacer y={24} />
          <span className="text-white text-2xl md:text-3xl lg:text-5xl text-center font-medium tracking-tight inline-block leading-10">
            Build On Superchain, <br />
            <span className="text-default-400"> supported by </span>{" "}
            Creatorchain
          </span>
        </div>
        <Spacer y={10} />
        <div
          data-aos="fade-up"
          className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        >
          <StatCard
            title="Total users"
            count="5k+"
            description="In the last 30 days"
            index={1}
          />
          <StatCard
            title="Total Trades"
            count="50k+"
            description="In the last 30 days"
            index={2}
          />
          <StatCard
            title="Total Volume"
            count="$10M+"
            description="In the last 30 days"
            index={3}
          />
          <StatCard
            title="Total Value Locked"
            count="$2M+"
            description="In the last 30 days"
            index={4}
          />
        </div>
        <section id="features">
          <Spacer y={44} />
          <div
            style={{
              overflowX: "hidden"
            }}
            className="flex items-center justify-center flex-col"
          >
            <h3
              data-aos="fade-up"
              className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500"
            >
              Features
            </h3>
          </div>
          <Spacer y={10} />
          <div className="flex flex-col gap-10 justify-between md:flex-row">
            <div className="flex-1" data-aos="fade-right">
              <p className="text-default-400 text-sm md:text-lg pb-4 text-center md:text-left">
                At Lumoswap, we're revolutionizing the DeFi space by offering
                advanced trading features, robust financial tools, and a
                seamless user experience that puts you in control of your
                financial future.
              </p>
              <Accordion selectionMode="multiple">
                <AccordionItem
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="1"
                  aria-label="Accordion 1"
                  title={
                    <p className="font-semibold text-medium">
                      Token Swaps & & Liquidity Pools
                    </p>
                  }
                >
                  <p className="text-sm md:text-base">
                    Instant token swaps powered by liquidity pools, rewarding
                    liquidity providers with transaction fees.
                  </p>
                </AccordionItem>
                <AccordionItem
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="2"
                  aria-label="Accordion 2"
                  title={
                    <p className="font-semibold text-medium">
                      Cross-Chain Swaps
                    </p>
                  }
                >
                  <p className="text-sm md:text-base">
                    Trade assets across blockchains seamlessly without
                    centralized intermediaries.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">
                      Perpetual Futures
                    </p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="3"
                  aria-label="Accordion 3"
                >
                  <p className="text-sm md:text-base">
                    Trade perpetual contracts with no expiry, supporting
                    advanced strategies and leverage.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">
                      Staking & Yield Farming
                    </p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="4"
                  aria-label="Accordion 4"
                >
                  <p className="text-sm md:text-base">
                    Earn rewards by staking tokens or providing liquidity to
                    farming pools.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">
                      AI-Driven Token Analytics
                    </p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="6"
                  aria-label="Accordion 6"
                >
                  <p className="text-sm md:text-base">
                    AI tools provide actionable insights for smarter trading and
                    investment decisions.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">NFT Marketplace</p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="7"
                  aria-label="Accordion 7"
                >
                  <p className="text-sm md:text-base">
                    Mint, trade, and collect NFTs directly on the Lumoswap
                    platform.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">
                      Portfolio Tracking
                    </p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="8"
                  aria-label="Accordion 8"
                >
                  <p className="text-sm md:text-base">
                    Monitor portfolio performance across DeFi protocols and
                    assets.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">
                      Advanced Order Types
                    </p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="9"
                  aria-label="Accordion 9"
                >
                  <p className="text-sm md:text-base">
                    Automate trading with limit orders, stop losses, and
                    take-profit options.
                  </p>
                </AccordionItem>
                <AccordionItem
                  title={
                    <p className="font-semibold text-medium">Governance</p>
                  }
                  startContent={<I3DRotate size="20" color="#F7E600" />}
                  key="10"
                  aria-label="Accordion 10"
                >
                  <p className="text-sm md:text-base">
                    Token holders participate in decision-making, shaping
                    Lumoswap’s future.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
            <div
              data-aos="fade-left"
              className="flex-1 justify-center items-center flex"
            >
              <Image
                src="/images/chart.svg"
                width={500}
                height={700}
                className="h-[400px] w-[400px] md:h-[500px] md:w-[500px]"
                alt="Partner"
              />
            </div>
          </div>
          <Spacer y={44} />
          <div
            id="roadmap"
            className="flex items-center justify-center flex-col"
          >
            <h3
              data-aos="fade-up"
              className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500"
            >
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
              data-aos="fade-up"
            >
              <Tab key="phase1" title="Phase 1" />
              <Tab key="phase2" title="Phase 2" />
              <Tab key="phase3" title="Phase 3" />
              <Tab key="phase4" title="Phase 4" />
            </Tabs>
            <Spacer y={10} />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <PhaseCard
                data-aos="fade-up"
                data-aos-delay="100"
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
                data-aos="fade-up"
                data-aos-delay="200"
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
                data-aos="fade-up"
                data-aos-delay="300"
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
                title="Growth and Expansion"
                data-aos="fade-up"
                data-aos-delay="400"
                steps={[
                  "Launch Additional Projects",
                  "Telegram Mini App Launch",
                  "Developer Grant Program",
                  "New Product Release (Surprise)",
                  "Marketing Campaigns",
                  "Partnership Expansion",
                  "Event Sponsorships",
                  "Milestone Metrics: $1M TVL within 6 months, 20% user growth quarterly"
                ]}
                isActive={activeTab === "phase4"}
              />
            </div>
          </div>
        </section>
        <Spacer y={24} />
        <section>
          <div className="flex items-center justify-center flex-col">
            <h3
              data-aos="fade-up"
              className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-500"
            >
              Featured Updates
            </h3>
            <Spacer y={10} />
            <MediumBlogCard
              limit={2}
              url={"https://medium.com/feed/@lumoswap"}
            />
            <Spacer y={20} />
            <Button
              onPress={() =>
                window.open("https://medium.com/@lumoswap", "_blank")
              }
              data-aos="fade-up"
            >
              See more updates
              <GoArrowRight />
            </Button>
          </div>
        </section>
        <Spacer y={24} />
      </div>
    </>
  );
}
