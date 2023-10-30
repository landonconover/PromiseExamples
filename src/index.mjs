import "./styles.css";

let myPromise = new Promise((reslove, reject) => {
  setTimeout(() => {
    reslove('passing data')
  }, 2000)
})


myPromise.then((data) => {
  console.log(data)
})

let response = fetch('https://pokeapi.co/api/v2/pokemon/ditto')

let data = response.then((res) => {
  return res.json()
})

data.then((data) => {
  console.log(data)
})

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })

async function getPokemon(){

  let response = await fetch('https://pokeapi.co/api/v2/pokemon')
  let data = await response.json()

  return data
}

getPokemon().then(pokemon => {
  console.log(pokemon)
  pokemon.results.forEach(pokeman => {
    console.log(pokeman.name)
  })
})
