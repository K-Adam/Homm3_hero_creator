"use client";

import HeroEditor from "@/components/HeroEditor";
import PrintView from "@/components/PrintView";
import WelcomeModal from "@/components/WelcomeModal";
import { useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function Home() {
  const [welcomeMessageAccepted, setWelcomeMessageAccepted] = useLocalStorage(
    "welcomeMessageAccepted",
    false
  );

  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <>
      <div className="d-print-none">
        <HeroEditor />
      </div>
      <div className="d-none d-print-block">
        <PrintView />
      </div>
      <WelcomeModal
        show={!welcomeMessageAccepted && ready}
        onHide={() => setWelcomeMessageAccepted(true)}
      />
    </>
  );
}
