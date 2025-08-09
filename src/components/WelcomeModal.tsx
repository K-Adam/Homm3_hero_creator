import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "react-bootstrap";

export default function WelcomeModal({
  show,
  onHide,
}: {
  show: boolean;
  onHide: () => void;
}) {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" centered>
      <Modal.Header closeButton>
        <Modal.Title>Welcome</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>
          This project is a personal, fan-made tool created for board game
          owners who want to enhance their experience with custom heroes —
          including those found in the PC game but missing from the board game.
        </p>
        <p>
          It uses assets from both the PC game and the official board game
          rulebook, but is <b>not affiliated with Ubisoft or Archon Studio</b>{" "}
          in any way.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={onHide}>
          <FontAwesomeIcon icon={faCheck} /> Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
