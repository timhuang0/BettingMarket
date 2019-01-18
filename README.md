# Betting Market
Betting contract and betting market built on Solidity. 

This is a smart contract that allows users to place bets on future predictions on the blockchain and a smart contract that allows users to buy and sell betting positions.

## Specifications 
`Betting.sol`:
- There is one contract owner, set to the address who deploys the contract.
- The contract owner must specify: 
  - The statement/assertion to be bet on
  - The address of a trusted oracle
  - The address of a trusted marketplace contract, if applicable
  - The deadline for the oracle to make a decision, represented as a `Unix Time Stamp`
  - The fee paid to the oracle given a completed decision 
  - The amount each gambler must bet in `wei` (1 `wei` = 1 * 10^18 `ether`)
- Bets to the contract must contain both: the bet amount in ether and the gambler's predicted outcome (true or false)
- The owner must make the first bet to the contract. 
- The second bet can be made by any address other than the oracle. 
- Only two bets can be placed.
- The oracle must specify a decision before the deadline; else, they will not recieve a fee and both gamblers can withdraw their original bet amount.
- If a decision is made before the deadline, the owner of the winning bet recieves all the funds bet minus the oracle fee.
- Gamblers can transfer their own betting position to another address as a token.

`BettingMarket.sol`:
- There is one contract owner, set to the address who deploys the contract.
- The contract constructor has no parameters.
- To sell a betting positon, the gambler must specify: the address of the betting contract and the price.
- Bets are tracked with a betId, incremented by 1 for each bet on the market.
- Buyers can view the following attributes of a bet using its betId:
  - assertion
  - outcome
  - winner earnings
  - price
- Purchases of a bet must contain: the betId and the price in ether.
- After purchase, ownership of the bet is transfered on the betting contract.

## Example
1. User at address A deploys a betting contract, specifying an oracle, trusted betting market, oracle fee as 0.1 ether, and bet amount as 1 ether.
2. The owner (address A) places a bet of "true" with a value of 1 ether.
3. User at address B places a bet of "false" with a value of 3 ether; 2 ether is refunded to the user.
4. User at address B sells his bet on the betting market, specifying a price of 1.1 ether.
5. User at address C buys the bet off the betting market with a value of 1.1 ether, the betting position of "false" is transfered to user at address C.
6. User at address B withdraws 1.1 ether from the betting market contract.
7. User at address C attempts to withdraw ether from the betting contract, this is denied as a decision is not made.
8. The oracle decides on the correct outcome of "false".
9. The oracle withdraws his fee of 0.1 ether from the betting contract.
10. User at address C withdraws winnings of 1.9 ether.
11. User at address A attempts to withdraw from the betting contract, this is denied as they have no winnings.
12. User at address B attempts to withdraw from the betting contract, this is denied as they do not posess a betting position.

## Testing
To test the code on a local development blockchain, transfer the code in `Betting.sol` and `BettingMarket.sol` to http://remix.ethereum.org. 

In the compile sidebar tab, select compiler version `0.5.2+commit.1df8f40c.Emscripten.clang` and press Ctrl-S to compile. 

In the run sidebar tab, select "Javascript VM" for the runtime environment. Select both contracts and press deploy. Once deployed, interact with the contracts in the Deployed Contracts sidebar. 

To deploy the code to the Ethereum blockchain using Remix, download Metamask: https://metamask.io/ and select "Injected Web3" in the run sidebar tab.




