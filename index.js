const superbowlWin = (games) => {
  const winningGame = games.find(isWin);
  if (winningGame) {
    return winningGame.year;
  } else {
    return undefined;
  }
};

function isWin(game) {
  return game.result === "W";
}
