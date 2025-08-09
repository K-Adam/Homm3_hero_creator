"use client";

import HeroBoard from "./HeroBoard";
import { useState } from "react";
import { Hero, initialHero } from "@/models/hero";
import HeroCards from "./HeroCards";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import HeroForm from "./HeroForm";
import clsx from "clsx";
import styles from "./HeroEditor.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPrint,
  faDownload,
  faUpload,
  faMagnifyingGlass,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import { loadHero, saveHero } from "@/lib/serializeHero";
import PrintModal from "./PrintModal";
import { useAppDispatch } from "@/lib/hooks";
import { addHero } from "@/lib/features/printSlice";

export default function HeroEditor() {
  const [hero, setHero] = useState<Hero>(initialHero);
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const displayPrintModal = () => {
    setShowPrintModal(true);
    dispatch(addHero(hero));
  };

  return (
    <div className={clsx("d-print-none", styles.editor)}>
      <Card className={styles.properties}>
        <CardHeader>
          <h2>
            <FontAwesomeIcon icon={faGears} /> Properties
          </h2>
        </CardHeader>
        <CardBody>
          <HeroForm hero={hero} setHero={(v) => setHero(v)} />
        </CardBody>
        <CardFooter>
          <div className="d-flex justify-content-start gap-2">
            <Button variant="secondary" onClick={displayPrintModal}>
              <FontAwesomeIcon icon={faPrint} /> Print
            </Button>
            <Button
              variant="primary"
              onClick={async () => {
                const hero = await loadHero();

                setHero(hero);
              }}
            >
              <FontAwesomeIcon icon={faUpload} /> Open
            </Button>
            <Button
              variant="success"
              onClick={() => {
                saveHero(hero);
              }}
            >
              <FontAwesomeIcon icon={faDownload} /> Save
            </Button>
          </div>
        </CardFooter>
      </Card>

      <PrintModal
        show={showPrintModal}
        onHide={() => setShowPrintModal(false)}
      />

      <Card className={styles.preview}>
        <CardHeader>
          <h2>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Preview
          </h2>
        </CardHeader>
        <CardBody>
          <div className="d-flex justify-content-center">
            <HeroBoard hero={hero} />
          </div>
          <br />
          <HeroCards hero={hero} />
        </CardBody>
      </Card>
    </div>
  );
}
