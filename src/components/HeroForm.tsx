"use client";

import { Hero, Portrait, portraits } from "@/models/hero";
import {
  monsterSpecialties,
  Specialty,
  SpecialtyLevel,
} from "@/models/specialty";
import { SpecialtyContent } from "@/models/specialtyContent";
import { classStats, HeroType, TownType } from "@/models/town";
import { useState } from "react";
import { Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import ReplaceEntityModal from "./ReplaceEntityModal";
import { abilities, Ability } from "@/models/ability";
import { iconMap } from "@/lib/textToComponent";
import styles from "./HeroForm.module.css";

export default function HeroForm({
  hero,
  setHero,
}: {
  hero: Hero;
  setHero: (hero: Hero) => void;
}) {
  const [key, setKey] = useState<SpecialtyLevel>(SpecialtyLevel.One);

  const [showPortraitModal, setShowPortraitModal] = useState<boolean>(false);
  const [showAbilityModal, setShowAbilityModal] = useState<boolean>(false);
  const [showSpecialtyModal, setShowSpecialtyModal] = useState<boolean>(false);

  const setTownType = (town: TownType) => {
    setHero({ ...hero, town, statistics: classStats[town][hero.type] });
  };

  const setHeroType = (type: HeroType) => {
    setHero({ ...hero, type, statistics: classStats[hero.town][type] });
  };

  const setHeroName = (name: string) => {
    setHero({ ...hero, name });
  };

  const setSpecialtyContent = (specialtyContent: SpecialtyContent) => {
    setHero({ ...hero, specialtyContent });
  };

  const setPortrait = (portrait: Portrait) => {
    setHero({ ...hero, portrait });
  };

  const setAbility = (ability: Ability) => {
    setHero({ ...hero, ability });
  };

  const setSpecialty = (specialty: Specialty) => {
    setHero({ ...hero, specialty });
  };

  return (
    <Form>
      <Form.Group controlId="heroNameInput" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={hero.name}
          onChange={(e) => setHeroName(e.target.value)}
          placeholder="Enter hero name"
        />
      </Form.Group>

      <Row className="mb-3">
        <Col>
          <Form.Group controlId="townTypeSelect">
            <Form.Label>Town</Form.Label>
            <Form.Select
              value={hero.town}
              onChange={(e) => setTownType(e.target.value as TownType)}
            >
              {Object.values(TownType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <Form.Group controlId="heroTypeSelect">
            <Form.Label>Type</Form.Label>
            <Form.Select
              value={hero.type}
              onChange={(e) => setHeroType(e.target.value as HeroType)}
            >
              {Object.values(HeroType).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="my-3 text-center">
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setShowPortraitModal(true)}
          >
            Replace portrait
          </Button>

          <ReplaceEntityModal
            title="portrait"
            show={showPortraitModal}
            onHide={() => setShowPortraitModal(false)}
            entityList={portraits}
            onSelect={(portrait) => setPortrait(portrait)}
            hideName={true}
          />
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setShowAbilityModal(true)}
          >
            Replace ability
          </Button>

          <ReplaceEntityModal
            title="ability"
            show={showAbilityModal}
            onHide={() => setShowAbilityModal(false)}
            entityList={abilities}
            onSelect={(ability) => setAbility(ability)}
          />
        </Col>
        <Col>
          <Button
            variant="outline-secondary"
            onClick={() => setShowSpecialtyModal(true)}
          >
            Replace specialty
          </Button>

          <ReplaceEntityModal
            title="specialty"
            show={showSpecialtyModal}
            onHide={() => setShowSpecialtyModal(false)}
            entityList={monsterSpecialties}
            onSelect={(specialty) => setSpecialty(specialty)}
          />
        </Col>
      </Row>

      <Tabs
        activeKey={key}
        onSelect={(k) => setKey(k as unknown as SpecialtyLevel)}
        className="mb-3"
      >
        <Tab eventKey={SpecialtyLevel.One} title="Specialty I">
          <Form.Group className="mb-3" controlId="specialtyOneContent">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter specialty content"
              value={hero.specialtyContent[SpecialtyLevel.One]}
              onChange={(e) =>
                setSpecialtyContent({
                  ...hero.specialtyContent,
                  [SpecialtyLevel.One]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Tab>

        <Tab eventKey={SpecialtyLevel.Four} title="Specialty IV">
          <Form.Group className="mb-3" controlId="specialtyFourContent">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter specialty content"
              value={hero.specialtyContent[SpecialtyLevel.Four]}
              onChange={(e) =>
                setSpecialtyContent({
                  ...hero.specialtyContent,
                  [SpecialtyLevel.Four]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Tab>

        <Tab eventKey={SpecialtyLevel.Six} title="Specialty VI">
          <Form.Group className="mb-3" controlId="specialtySixContent">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter specialty content"
              value={hero.specialtyContent[SpecialtyLevel.Six]}
              onChange={(e) =>
                setSpecialtyContent({
                  ...hero.specialtyContent,
                  [SpecialtyLevel.Six]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Tab>
      </Tabs>

      <div>Available icons</div>

      <div className={styles.iconContainer}>
        {Object.entries(iconMap)
          .filter(([key, _icon]) => key !== "\n")
          .map(([key, icon]) => (
            <span key={key} title={key} className={styles.icon}>
              {icon}
            </span>
          ))}
      </div>
    </Form>
  );
}
