# Betting Market
Betting contract and betting market built on Solidity. 

This is a smart contract that allows users to place bets on future predictions on the blockchain.

## Specifications - Betting.sol
- There is one contract owner, set to the address who deploys the contract.
- The contract owner must specify: 
  - The statement/assertion to be bet on
  - The address of a trusted oracle
  - The address of a trusted marketplace contract, if applicable
  - The deadline for the oracle to make a decision, represented as a Unix Time Stamp
  - The fee paid to the oracle given a completed decision 
  - The amount each gambler must bet in wei (1 wei = 1 * 10^18 ether)
- Bets to the contract must contain both: the bet amount in ether and the gambler's predicted outcome (true or false)
- The owner must make the first bet to the contract. 
- The second bet can be made by any address other than the oracle. 
- Only two bets can be placed.
- The oracle must specify a decision before the deadline; else, they will not recieve a fee and both gamblers will be able to withdraw their original bet amount.
- If a decision is made before the deadline, the owner of the winning bet will recieve all the funds bet minus the oracle fee.
- Gamblers may choose to transfer their own betting position to another address as a token.




