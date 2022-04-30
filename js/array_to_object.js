const data = [
    [ 'Name', 'Job', 'Stacks', 'Titre' ],
    [ 'Taylor ', 'Developer', 'Laravel', 'Test'],
    [ '', 'CS', 'Comm' ],
    [ 'Naruto', '', 'Razengan' ],
    [ 'Rahim', 'Dev' ]
 ]
const header = data[0];
let values = [];

for(let i=1;i<data.length;i++)
    values.push(data[i])

let jsonData = [];

for(const value of values)
{
    let object = {};
    // Pour chaque nouvelle clé dans notre objet, on regarde la taille de la valeur
    // Si elle est supérieure à 0 (cas pour la première cellule allant jusqu'à l'avant dernière), 
    // on prend la valeur sinon on met null
    for(let indexKey = 0; indexKey < value.length; indexKey++)
        object[header[indexKey]] = value[indexKey].length > 0 ? value[indexKey] : null
    
    // Si la limite de la boucle n'est pas égale au nombre d'entêtes (cas où la 3ème cellule n'existe pas)
    // On doit quand même créer la 3ème entrée dans notre objet, et lui passer une valeur null    
    if(value.length < header.length){
        for(let i=value.length; i<header.length; i++)
            object[header[i]] = null

    }    
    jsonData.push(object);
}


console.log(jsonData)