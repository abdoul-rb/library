# Fusionner les intervalles qui se chevauchent

[https://www.geeksforgeeks.org/merging-intervals/](https://www.geeksforgeeks.org/merging-intervals/)

Étant donné un ensemble d'intervalles de temps dans n'importe quel ordre, fusionnez tous les intervalles qui se chevauchent en un seul et affichez le résultat qui ne devrait avoir que des intervalles mutuellement exclusifs.Laissez les intervalles être représentés comme des paires d'entiers pour plus de simplicité.

Par exemple, supposons que l'ensemble d'intervalles donné soit : `{{1,3}, {2,4}, {5,7}, {6,8}}`. Les intervalles `{1,3}` et `{2,4}` se chevauchent, ils doivent donc être fusionnés et devenir `{1, 4}`. De même, `{5, 7}` et `{6, 8}` devraient être fusionnés et devenir `{5, 8}`.

Écrivez une fonction qui produit l'ensemble d'intervalles fusionnés pour l'ensemble d'intervalles donné.
Une approche simple consiste à commencer par le premier intervalle et à le comparer avec tous les autres intervalles pour le chevauchement, s'il chevauche un autre intervalle, puis supprimer l'autre intervalle de la liste et fusionner l'autre dans le premier intervalle. Répétez les mêmes étapes pour les intervalles restants après le premier. Cette approche ne peut pas être mise en œuvre en un temps meilleur que O(n^2).

Une approche efficace consiste à trier d'abord les intervalles en fonction de l'heure de début. Une fois que nous avons les intervalles triés, nous pouvons combiner tous les intervalles dans un parcours linéaire. L'idée est, dans un tableau trié d'intervalles, si l'intervalle[i] ne chevauche pas l'intervalle[i-1], alors l'intervalle[i+1] ne peut pas chevaucher l'intervalle[i-1] car l'heure de début de l'intervalle [i+1] doit être supérieur ou égal à interval[i]. Voici l'algorithme détaillé étape par étape.

```
1. Triez les intervalles en ordre croissant d'heure de départ.
2. Poussez le premier intervalle sur une pile.
3. Pour chaque intervalle, procédez comme suit
    a. Si l'intervalle actuel ne chevauche pas la pile
       haut, poussez-le.
    b. Si l'intervalle actuel chevauche le sommet et la fin de la pile,
       le temps de l'intervalle actuel est supérieur à celui du sommet de la pile,
       mettre à jour le sommet de la pile avec l'heure de fin de l'intervalle actuel.
4. À la fin, la pile contient les intervalles fusionnés.
```


## Solution 

Cette fonction prend un tableau intervals contenant des paires d'entiers représentant les intervalles, et renvoie un tableau contenant les intervalles fusionnés. La fonction suit l'approche suivante :

```
1. Si le tableau intervals contient zéro ou un élément, il est déjà fusionné, donc nous renvoyons simplement ce tableau.
2. Nous trions les intervalles par ordre croissant de leur début.
3. Nous initialisons un tableau mergedIntervals contenant le premier intervalle de intervals.
4. Nous parcourons les intervalles restants dans intervals, en comparant chaque intervalle avec l'intervalle courant dans mergedIntervals.
5. Si les deux intervalles se chevauchent, nous fusionnons les intervalles en modifiant la fin de l'intervalle courant dans mergedIntervals.
6. Si les deux intervalles ne se chevauchent pas, nous ajoutons l'intervalle suivant à mergedIntervals.
7. À la fin, nous retournons le tableau mergedIntervals qui contient les intervalles fusionnés.
```