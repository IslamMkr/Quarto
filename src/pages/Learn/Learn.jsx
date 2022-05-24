import React from 'react'

import "./Learn.css"

import quatro1 from "../../images/Quatro1.png"
import quatro2 from "../../images/Quatro2.png"
import quatro31 from "../../images/Quatro31.png"
import quatro32 from "../../images/Quatro32.png"
import quatro4 from "../../images/Quatro4.png"
import quatro5 from "../../images/Quatro5.png"

const Learn = () => {
	return (
		<div className='learn'>
			<h2>Définition et Historique</h2>
			<p>Quarto ou Quarto! est un jeu de société combinatoire abstrait au tour par tour, créé par Blaise Muller, primé en 1985 au Concours international de créateurs de jeux de société de Boulogne-Billancourt, sous le nom de 4×4 et édité depuis 1991 par Gigamic.  </p>
			<h2>Présentation et préparation</h2>
			<ul>
				<li>un plateau de 16 cases</li>
				<li>16 pièces différentes ayant chacune 4 caractères :
						claire ou foncée, ronde ou carrée, haute ou basse, pleine ou creuse.
						En début de partie, les pièces sont déposées à côté du plateau.</li>
			</ul>
			<figure>
				<img src={quatro1} alt="quatro1" />
			</figure>
			
			<h2>But Du jeu</h2>
			<ul>
				<li>Créer sur le plateau un alignement de 4 pièces ayant au moins un caractère commun.</li>
				<figure id="figures">
					<img src={quatro2} alt="quatro2" />
				</figure>
				<li>Cet alignement peut-être horizontal, vertical ou diagonal.</li>
				<figure id='figures'>
					<img src={quatro2} alt="quatro3" />
					<img src={quatro31} alt="quatro31" />
					<img src={quatro32} alt="quatro32" />
				</figure>
			</ul>

			<h2>DEROULEMENT D’UNE PARTIE</h2>
			<ul>
			<li>Le premier joueur est tiré au sort.</li>
			<li>Il choisit une des 16 pièces et la donne à son adversaire.</li>
			<figure>
				<img src={quatro4} alt="quatro4" />
			</figure>
			<li>Celui-ci doit la placer sur une des cases du plateau et choisir ensuite une des 15 pièces
				restantes pour la donner à son adversaire.</li>
			<li>A son tour, celui-ci la place sur une case libre et ainsi de suite...</li>
			</ul>

			<h2>GAIN DE LA PARTIE</h2>
			<p>La partie est gagnée par le premier joueur qui annonce “QUARTO !”. <br />
			Un joueur fait “QUARTO !” et gagne la partie lorsque, en plaçant la pièce donnée:</p>
			<ul>
				<li> Il crée une ligne de 4 claires ou 4 foncées ou 4 rondes ou 4 carrées ou 4 hautes ou 4 basses ou 4 pleines ou 4 creuses.</li>
				<li> Il n’est pas obligé d’avoir lui même déposé les trois autres pièces.</li>
				<li> Il doit faire reconnaître sa victoire en annonçant “QUARTO !”.</li>
			</ul>
			<p>2 Si ce joueur n’a pas vu l’alignement et donne une pièce à l’adversaire:</p>
			<ul>
				<li>Ce dernier peut “à ce moment” annoncer “QUARTO !”, et montrer l’alignement: c’est lui qui gagne la partie.</li>
			</ul>
			<p>3 Si aucun des joueurs ne voit l’alignement durant le tour de jeu où il se crée, cet alignement perd toute sa valeur et la partie suit son cours.</p>

			<h2>FIN DE LA PARTIE</h2>
			<ul>
				<li>Victoire: un joueur annonce et montre un “QUARTO !”.</li>
				<figure>
					<img src={quatro5} alt="quatro !" />
				</figure>
				<li>Egalité: toutes les pièces ont été posées sans vainqueur.</li>
			</ul>
		</div>
	)
}

export default Learn