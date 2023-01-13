// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EthereumContract {
    mapping(address => uint256) public balances;
    event Burn(uint256 amount);

    modifier onlyHolder() {
        _;
        require(
            balances[msg.sender] > 0,
            "Holder must have more than 0 balance!"
        );
    }

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function burn() external onlyHolder {}
}
