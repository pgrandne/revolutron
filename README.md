# RevoluTRON
Join the Web3 revolution with Revolutron!

Our adventure game introduces users to the world of blockchain, wallets, tokens, and more, with mandatory tasks like wallet installation to guide players through the story. Explore real Web3 applications and experience the potential of this transformative technology. 

## Story

Embark on an unforgettable journey that begins in the fictitious land of Listenbourg, in October of 2023. A shocking discovery of a vast counterfeit currency network has sent the country into chaos, and in a bold move to save the economy from ruin, the government outlaws cash.

As you assume the role of Azad, an intrepid journalist from the Lurenberg Post, a whistleblower contacts you with a game-changing tipoff - an unparalleled financial and political scandal is about to be exposed.

Are you up for the challenge? Brace yourself for an adventure that will keep you on the edge of your seat. Don't hesitate - join Azad and discover what lies ahead!

## Description

With this adventure game we’re trying to help people get into web3 without scaring them off with all the complicated technical stuff.

Simply follow the adventure, no additional instruction is required. Each chapter has different objectives, as described below, to enter smoothly into Web3 and into our world...

1) Chapter 1 is live! It leads to the installation of the wallet for the new comers. The purpose of this chapter is to introduce the story and make the world we’ve created feel more real and interesting.

2) Chapter 2: this one is for the users to experiment (on the testnet) the basics of web3, like making a transaction, swap, using a bridge, nft…This chapter (split in several episodes) will be developed from March to April 2023. Some episodes have already been released.

3) Chapter 3 (on the mainnet). This chapter will be dedicated to showcase existing protocols and integrate them in our story. Users will have to interact with those protocols, as if it was part of the story, to continue the adventure. This chapter will start from May 2023. The number of episodes is not limited (one protocol per episode will be showcased).

## Genesis

With Irruption Lab (https://www.irruptionlab.com/), we are building applications for web3 democratization, and the RevoluTRON project is part of it. We have already created several projects, and the feedback from the newcomers was always the same: Why do I need to install a wallet? What is a transaction? Why do I need gas? Why do I need to sign/approve messages all the time? Why can't I log in with email and password like everywhere else? What are the real use cases of the technology? Blockchain, you mean Bitcoin?

Something is missing ! Without easy/fun Web3 on-ramp, a mass adoption is utopian.
With our adventure game RevoluTRON, we are trying to help people get into web3 without scaring them off with all the complicated technical stuff.

Inspirations: Cryptozombie (https://cryptozombies.io/) to learn Solidity langage, and Ethereumhacker (https://ethereumhacker.com/) to learn about smart contracts vulnerabilities.

## Fundings

- Custom built adventures for protocols. Starting from Chapter 3 each episode will showcase a new protocol, and it will be fully integrated in the story.
- Public Good Funding / Grants
- Partnerships with protocols, affiliate links, comissions
- Donations

## Roadmap
- [X] Chapter 1
- [X] Chapter 2 episode 1 (Testnet)
- [X] French language
- [X] Spanish language
- [ ] Chapter 2 episode 2 (Testnet)
- [ ] Chapter 2 episode 3 (Testnet)
- [ ] Chapter 2 episode 4 (Testnet)
- [ ] Smart contract - Deposit and lock 
- [ ] Chapter 3 episode 1 (Mainnet)

## Instructions
##### Clone the project
Clone the repository on your local machine
```bash
$ git clone https://github.com/pgrandne/revolutron.git
```

### Front End ###
We use NextJS 13. The Front End scripts are in "app" folder.
If you want to launch the Front End locally:

1. Go to "revolutron" folder
```bash
$ cd revolutron
```

2. Install the dependencies
```bash
$ npm install
```

3. Launch the server locally
```bash
$ npm run dev
```
### Back End ###
We use .env for environment variables. Change the name of env.example to .env and fill in the 2 variables :
   - We use DATABASE_URL for our MongoDB database
   - We use PRIVATE KEY for interacting with the blockchain

We use 2 contracts : 
   - One for the token of the Adventure : RevolutronUSD : TSq8uXtJSX5o3wimqsQj5TDdEdTNP13kAo
  https://shasta.tronscan.org/#/contract/TSq8uXtJSX5o3wimqsQj5TDdEdTNP13kAo/code
   - One for the bail of the Adventure : TLFkPf5XTC5JqUH91jfNPe2k2Rvj6L9ih3
  https://shasta.tronscan.org/#/contract/TLFkPf5XTC5JqUH91jfNPe2k2Rvj6L9ih3/code
  


