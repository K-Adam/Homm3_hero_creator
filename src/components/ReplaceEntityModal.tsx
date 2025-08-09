"use client";

import React, { useState } from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
import clsx from "clsx";
import styles from "./ReplaceEntityModal.module.css";
import { selectImageAsBase64 } from "@/lib/selectImageAsBase64";
import {
  faCheck,
  faFileImage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Entity {
  name: string;
  path: string;
}

enum EntityType {
  Predefined,
  Custom,
}

export default function ReplaceEntityModal({
  title,
  show,
  onHide,
  entityList = [],
  onSelect,
}: {
  title: string;
  show: boolean;
  onHide: () => void;
  entityList: Entity[];
  onSelect: (entity: Entity) => void;
}) {
  const [key, setKey] = useState<EntityType>(EntityType.Predefined);
  const [selected, setSelected] = useState<Entity>(entityList[0]);

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Replace {title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k as unknown as EntityType)}
          className="mb-3"
        >
          <Tab eventKey={EntityType.Predefined} title="Select">
            <div className={styles.entityList}>
              {entityList.map((entity) => (
                <label
                  key={entity.path}
                  title={entity.name}
                  className={clsx(
                    styles.label,
                    selected.path === entity.path ? styles.selected : null
                  )}
                >
                  <input
                    type="radio"
                    name="entities"
                    value={entity.path}
                    checked={selected.path === entity.path}
                    onChange={() => setSelected(entity)}
                    style={{ display: "none" }}
                  />
                  <div
                    style={{ backgroundImage: `url('${entity.path}')` }}
                    className={styles.image}
                  ></div>
                </label>
              ))}
            </div>
          </Tab>

          <Tab eventKey={EntityType.Custom} title="Custom">
            <Button
              onClick={async () => {
                const path = await selectImageAsBase64();

                setSelected({ name: "custom", path });
              }}
            >
              <FontAwesomeIcon icon={faFileImage} /> Upload image
            </Button>
            <div>
              <img src={selected.path} className={styles.preview} />
            </div>
          </Tab>
        </Tabs>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="warning" onClick={onHide}>
          <FontAwesomeIcon icon={faXmark} /> Cancel
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onSelect(selected);
            onHide();
          }}
          disabled={entityList.length === 0}
        >
          <FontAwesomeIcon icon={faCheck} /> Select
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
