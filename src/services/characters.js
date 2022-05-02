export default async function getCharacters() {
  const resp = await fetch('https://rickandmortyapi.com/api');
  const data = resp.json();
  return data;
}
