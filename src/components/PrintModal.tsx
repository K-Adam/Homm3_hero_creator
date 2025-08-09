import {
  addHeroes,
  printState,
  removeAllHeroes,
  removeHero,
  setCardMode,
  setCompensateForExtraMargin,
  setExtraMarginSize,
  setFilter,
  setShowBacksides,
} from "@/lib/features/printSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  faPlus,
  faPrint,
  faTrashAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";
import styles from "./PrintModal.module.css";
import { loadHeroes } from "@/lib/serializeHero";
import { CardMode, PrintFilter } from "@/lib/features/printModel";
import clsx from "clsx";

const PRINT_FILTER_OPTIONS: Array<{ value: PrintFilter; label: string }> = [
  { value: PrintFilter.Both, label: "Board + Cards" },
  { value: PrintFilter.Board, label: "Board only" },
  { value: PrintFilter.Cards, label: "Cards only" },
];

const CARD_MODE_OPTIONS: Array<{ value: CardMode; label: string }> = [
  { value: CardMode.Folded, label: "Folded" },
  { value: CardMode.AutoDuplex, label: "Auto-duplex" },
  { value: CardMode.ManualDuplex, label: "Manual duplex" },
];

export default function PrintModal({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) {
  const dispatch = useAppDispatch();
  const state = useAppSelector(printState);

  const handleClose = () => {
    dispatch(removeAllHeroes());
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faPrint} /> Print
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <div className={clsx(styles.heroList, "mb-2")}>
            {state.heroes.map((hero, i) => (
              <button
                key={i}
                className={styles.item}
                type="button"
                aria-label="Remove hero"
                onClick={async () => {
                  dispatch(removeHero(hero));
                }}
              >
                <div
                  style={{ backgroundImage: `url('${hero.portrait.path}')` }}
                  className={styles.image}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className={styles.removeIcon}
                  />
                </div>
              </button>
            ))}
            <button
              className={styles.item}
              type="button"
              aria-label="Add hero"
              onClick={async () => {
                const heroes = await loadHeroes();
                dispatch(addHeroes(heroes));
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>

          <Form.Group className="mb-2">
            <div>
              {PRINT_FILTER_OPTIONS.map(({ value, label }) => (
                <Form.Check
                  key={value as number}
                  inline
                  type="radio"
                  label={label}
                  name="print-filter"
                  id={`print-filter-${label}`}
                  checked={state.filter === value}
                  onChange={() => dispatch(setFilter(value as PrintFilter))}
                />
              ))}
            </div>
          </Form.Group>

          <Row className="align-items-center g-2 mb-2">
            <Col xs="auto">
              <Form.Check
                type="switch"
                id="show-backsides"
                label="Print card backs"
                checked={state.showBacksides}
                onChange={(e) =>
                  dispatch(setShowBacksides(e.currentTarget.checked))
                }
              />
            </Col>
            <Col>
              <Form.Group controlId="card-mode" className="mb-0">
                <Form.Select
                  disabled={!state.showBacksides}
                  value={state.cardMode}
                  onChange={(e) =>
                    dispatch(setCardMode(Number(e.target.value) as CardMode))
                  }
                >
                  {CARD_MODE_OPTIONS.map(({ label, value }) => (
                    <option key={value as number} value={value as number}>
                      {label}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="align-items-center g-2 mb-2">
            <Col>
              <Form.Check
                type="checkbox"
                id="compensate-margin"
                label="Compensate for extra margin"
                checked={state.compensateForExtraMargin}
                onChange={(e) =>
                  dispatch(setCompensateForExtraMargin(e.currentTarget.checked))
                }
              />
            </Col>
            <Col xs="auto" className="ms-auto">
              <InputGroup style={{ width: "8rem" }}>
                <Form.Control
                  type="number"
                  min={0}
                  step={0.5}
                  disabled={!state.compensateForExtraMargin}
                  value={state.extraMarginSize}
                  onChange={(e) =>
                    dispatch(setExtraMarginSize(Number(e.currentTarget.value)))
                  }
                  aria-label="Extra margin size"
                />
                <InputGroup.Text>mm</InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>

          <Alert variant="warning">
            Most home printers automatically add a 5 mm margin, which can make
            printed objects appear slightly smaller. To ensure your print comes
            out at the correct size, turn on &quot;Compensate for extra
            margin&quot;.
          </Alert>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} /> Close
        </Button>
        <Button
          variant="primary"
          disabled={state.heroes.length === 0}
          onClick={() => {
            window.print();
          }}
        >
          <FontAwesomeIcon icon={faPrint} /> Print
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
