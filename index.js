const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
  cats.push("Ralph");
}
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newCats = [...cats, "Broom"];
  return newCats;
}

function prependCat(name) {
  const newerCats = ["Arnold", ...cats];
  return newerCats;
}

function removeLastCat() {
  const freshCats = cats.slice(0, 2);
  return freshCats;
}
function removeFirstCat() {
  const fresherCats = cats.slice(1);
  return fresherCats;
}
