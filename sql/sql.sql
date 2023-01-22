/*Requête avec plusieurs OR :*/

SELECT prenom
FROM utilisateur
WHERE prenom = 'Maurice' OR prenom = 'Marie' OR prenom = 'Thimoté'
/*Requête équivalent avec l’opérateur IN :*/

SELECT prenom
FROM utilisateur
WHERE prenom IN ( 'Maurice', 'Marie', 'Thimoté' )












/**
 * Fonctions d'aggregations
 * AVG()
 */
SELECT AVG (amount),nom FROM payment /* La moyenne des payements dans la table payment*/

/**
 * Fonctions d'aggregations
 * AVG()
 */
SELECT ROUND(AVG (amount),2) FROM payment /* La moyenne des payements dans la table payment et arrondire 
                                          la valeur en utilisant la fonction round, dans notre cas 2 chiffres
                                          apres la virgule*/
 /**
 * Fonctions d'aggregations
 * MAX()
 */
SELECT MAX (amount) FROM payment /* La valeur max dans la table payment*/

/**
 * Fonctions d'aggregations
 * MIN()
 */
SELECT MIN (amount) FROM payment /* La valeur min dans la table payment*/

/**
 * Fonctions d'aggregations
 * SUM()
 */
SELECT SUM (amount) FROM payment /* La somme de tous les payments dans la table payment*/


/**
 * GROUP BY
 */
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id/* Regrouper les payments dans la table payment par id du client*/
SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id ORDER BY 2 DESC/* Regrouper la somme des payments dans la table payment par id du client 
                                                                    et ordonner dans lordre DESC*/
SELECT customer_id, AVG(amount) FROM payment GROUP BY customer_id ORDER BY 2 DESC/* Regrouper la moyenne  des payments dans la table payment par id du client 
                                                                    et ordonner dans lordre DESC*/        

/**
 * HAVING
 */                                                        
 SELECT customer_id, SUM(amount) FROM payment GROUP BY customer_id HAVING (amount) > 200 /*Retourne les clients qui ont depensé un montant superieur à 200*/


 /**
 * RIGHT JOIN
 */    

 SELECT
 c.customer_id
 c.first_name,
 c.last_name,
 a.actor_id,
 a.first_name,
 a.last_name,
 FROM customer c
 RIGHT JOIN actor a
 ON c.last_name = actor.last_name/*Retourne tout les actors tout en indiquant les clients dont c.last_name = actor.last_name else NULL*/