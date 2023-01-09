// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.4;



contract Owner{
    address public owner;
    modifier onlyOwner(){
        require(msg.sender === owner);
        _;
    }
}

contract ParentContract {
    uint256 name = 19000;
}

contract ChildContract is ParentContract{

string public _type ='sol'

bool public init = false;

uint256 public bbb = 129;

address public adr;

uint256 public max = type(uint256).max;

uint256[] public arr;

struct NftInfo{
    string name;
    uint256 att;
    bool state;
}

NftInfo[] arms;


struct UserInfo{
    string name;
    bool state;
}

mapping(address=>UserInfo) public userinfo;


mapping(address=>uint256) public ads;//ads[address]=init

constructor(uint256 _setBBB){
    owner = msg.sender;
    bbb = _setBBB;
}

function setOwner(address _user) public returns(bool){
    owner = _user;
    return true;
}

}