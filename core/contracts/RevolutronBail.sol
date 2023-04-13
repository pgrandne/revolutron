//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.18;

/// @title Revolutron.app : RevolutronBail
/// @author Perrin GRANDNE
/// @notice Contract for Bail in Revolutron.app
/// @custom:experimental This is an experimental contract.

/// @notice Only TRC-20 functions we need
interface ITRC20 {
    function balanceOf(address account) external view returns (uint256);

    /// @notice Approve the deposit of USDD from player to contract
    function approve(address spender, uint256 amount) external returns (bool);

    /// @notice Confirm the allowed amount before deposit
    function allowance(
        address owner,
        address spender
    ) external view returns (uint256);

    /// @notice Transfer USDC from User to Contract (deposit) or from Contract to User (withdraw)
    function transferFrom(
        address sender,
        address recipient,
        uint256 amount
    ) external returns (bool);
}

/// @notice This is the contract to deposit and withdraw the bail in chapter 2 of Revolte
contract RevolutronBail {
    // Structure to store amount and timestamp of deposit
    struct BailDeposit {
        uint256 depositAmount;
        uint256 timestamp;
    }
    // Mapping to associate struct BailDeposit to an address
    mapping(address => BailDeposit) bailDepositPerPlayer;

    // contract address for the token used in the game
    ITRC20 private revolutronUsdd;

    // address of the owner of the contract
    address public owner;

    // deposit amount of the bail
    uint256 public depositAmount;

    // locktime of deposit
    uint256 public lockTime;

    // Event when there is a deposit
    event Deposit(address indexed _from, uint256 _value);

    // Event when there is a withdraw
    event Withdraw(address indexed _to, uint256 _value);

    // Define the address of the USDD token used in the game
    // Define the owner
    // Define the deposit amount
    constructor(address _revolutronUsdd) {
        revolutronUsdd = ITRC20(_revolutronUsdd);
        owner = msg.sender;
        depositAmount = 500 * 10 ** 6;
        lockTime = 7 days;
    }

    // Authorize only the ownner to execute the function
    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    // Change the USDD Contract Address
    function setRevolutronUsddContract(
        address _revolutronUsddContract
    ) public onlyOwner {
        revolutronUsdd = ITRC20(_revolutronUsddContract);
    }

    // Change the deposit amount of the bail
    function setDepositAmount(uint256 _depositAmount) public onlyOwner {
        depositAmount = _depositAmount * 10 ** 6;
    }

    // Change the locktime of deposit
    function setLockTime(uint256 _lockTime) public onlyOwner {
        lockTime = _lockTime;
    }

    // Function to deposit 500 USDD for the bail
    function depositBail() external {
        // Check there is no existing deposit from the sender
        require(
            bailDepositPerPlayer[msg.sender].depositAmount == 0,
            "You already deposited a bail"
        );
        //Check the balance of the player
        require(
            revolutronUsdd.balanceOf(msg.sender) >= depositAmount,
            "You don't have enough USDD"
        );
        // Check if the amount of USDD allowed is enough
        require(
            revolutronUsdd.allowance(msg.sender, address(this)) >=
                depositAmount,
            "Insuficient allowed USDD"
        );

        // Save Amount and timestamp in mapping
        bailDepositPerPlayer[msg.sender] = BailDeposit({
            depositAmount: depositAmount,
            timestamp: block.timestamp
        });

        // Deposit the amount from the sender to the contract
        revolutronUsdd.transferFrom(msg.sender, address(this), depositAmount);

        // Emit the event of Deposit
        emit Deposit(msg.sender, depositAmount);
    }

    // Function to withdraw 500 USDD from the bail
    function withdrawBail() external {
        // Check if sender deposited a bail
        require(
            bailDepositPerPlayer[msg.sender].depositAmount > 0,
            "You didn't deposit a bail"
        );
        // Check the amount was deposited more than locktime
        require(
            block.timestamp >
                bailDepositPerPlayer[msg.sender].timestamp + lockTime,
            "You have to wait the locktime after the deposit to withdraw"
        );
        // Fetch amount to withdraw (500 USDD)
        uint256 amount = bailDepositPerPlayer[msg.sender].depositAmount;

        // Withdraw the amount from the contract to the player
        revolutronUsdd.transferFrom(address(this), msg.sender, amount);

        // Emit the event of Deposit
        emit Withdraw(msg.sender, amount);
    }
}
