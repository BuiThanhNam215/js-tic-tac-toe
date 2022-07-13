export function getCellElementList() {
  return document.querySelectorAll("#cellList > li");
}
export function getCellListElement() {
  return document.querySelector("#cellList");
}

export function getCurrentTurnElement() {
  return document.getElementById("CurrentTurn");
}

export function getCellElementAtIdx(index) {
  return document.querySelector(`#cellList > li:nth-child(${index + 1})`);
}

export function getGameStatusElement() {
  return document.getElementById("gameStatus");
}
export function getReplayButtonElement() {
  return document.getElementById("replayGame");
}
