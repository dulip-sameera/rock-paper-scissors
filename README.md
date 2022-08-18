# ROCK - PAPER - SCISSORS

## Description

This is a classical game that children play(sometimes adults too) to select one from the other, when there are two options. This is one of the projects that in [foundations](https://www.theodinproject.com/paths/foundations/courses/foundations) section of [The Odin Project](https://www.theodinproject.com/) curriculum. My goal is to build this game in pure JavaScript.
In the first version this game would be played on the console, and the user inputs will be taken from a prompt and the player would have to type in his/her choice. End goal would be provide a user interface for the game.

## Game Description

There are three symbols and two players in a game.
Three symbols are Rock, Paper, and Scissors.

Here, Player 1 - Player and Player 2 - Computer

### How one round is played

First, The browser will ask for an input from the player. He/she has to provide his/her choice by typing it to the prompt box, and hit enter. (Remember choices are ROCK, PAPER, and SCISSORS)
For a player to win the round there are three conditions and one of them must be true when considering the choices of each player.

    If one player has chosen ROCK and the other has chosen SCISSORS, one with the ROCK wins the round.
    If one player has chosen SCISSORS and the other has chosen PAPER, one with the SCISSORS win the round.
    If one player has chosen PAPER and the other has chosen ROCK, one with the PAPER wins the round.

And there is one condition where none of the players win the round, which is if the both players has chosen the same symbol(ex-: Player 1 - "ROCK", Player 2 -"ROCK")

To declare a player has won the match, one must reach 5 scores before the other.

## RPS-V2 (Implementing a UI)

Currently the players have to type their choice. In this version, I am going to add an UI to this. UI would contain a stating page, game area, and the final result page. Game mechanics will not be changed.
