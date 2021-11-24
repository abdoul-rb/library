## Use Axios

### Free API : https://jsonplaceholder.typicode.com/

```js
fetch(url)
/* Appeler la fonction fetch en passant l'URL de l'API comme paramètre */
// https://api.coindesk.com/v1/bpi/currentprice.json
.then(() => {
  /* Code pour le traitement des données obtenu depuis l'API */
})
.then((res) => res.set('Access-Control-Allow-Origin', '*'));
.catch(() => {
    /* Code à exécuter si le serveur renvoie des erreurs */
});
```

**Exemple GET**
```js
fetch("https://jsonplaceholder.typicode.com/posts")
    // Convertir les données en JSON
.then((res) => res.json())
.then((data) => {
  console.log(data)
})
.catch((error) => {
  console.log(error)
});
```

**Exemple POST**
```js
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST'
    // Imaginez que vous obtenez toutes les données dont vous avez besoin
    // à partir de l'API du formulaire et que vous créez un objet pour
    // envoyer les données au serveur, comme dans l'exemple ci-dessous
    body: JSON.stringify({
      title: 'title'
      body: 'content',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
})
// Convertir les données en JSON
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
```

**Exemple PUT**
```js
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'PUT'
    body: JSON.stringify({
      title: 'title'
      body: 'content',
      userId: 1
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
.then((res) => res.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
```

**Exemple DELETE**

```js
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE'
)}
```


### Axios & fetch
```js
async asyncData ({ app }) {
    try {
      let skills = await app.$axios.get('skills')
      return { skills : skills.data.data }
    } catch (e) {
      console.log(e.response.data)
    }
}
```