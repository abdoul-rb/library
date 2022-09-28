# Count substrings

Étant donné une chaîne binaire, comptez le nombre de sous-chaînes qui commencent et se terminent par 1. Par exemple, si la chaîne d'entrée est "00100101", alors il y a trois sous-chaînes "1001", "100101" et "101".

**Solution** : Une solution simple consiste à exécuter deux boucles. La boucle extérieure prend tous les 1 comme point de départ et la boucle intérieure cherche le 1 final et incrément le compteur chaque fois qu'elle trouve 1.