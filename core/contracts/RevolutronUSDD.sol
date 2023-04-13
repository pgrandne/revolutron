// 0.5.1-c8a2
// Enable optimization
pragma solidity ^0.5.0;

import "./TRC20.sol";
import "./TRC20Detailed.sol";

/**
 * @title SimpleToken
 * @dev Very simple TRC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `TRC20` functions.
 *
 * This token will be used for RevoluTRON.app as money of the adventure game.
 * The creator is Cincinnatus the whistleblower of the story and he will send this token
 * to players who follow the adventure.
 */
contract RevolutronUSDD is TRC20, TRC20Detailed {
    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor() public TRC20Detailed("RevoluTRON USDD", "USDD", 6) {
        _mint(msg.sender, 10000000000 * (10 ** uint256(decimals())));
    }
}
