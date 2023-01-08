// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Platform {
    uint public complaintID = 1;

    enum gender {
        female,
        male,
        others
    }

    enum domain {
        Domestic_Violence,
        Harasmsent,
        Abuse,
        Dowry,
        Unequal_Pay,
        Discrimination,
        Theft,
        Murder
    }

    struct Comments {
        address commentBy;
        uint commentID;
        string complaintDetails;
        string[] evidenceUID;
    }

    struct Complaint {
        address complaintBy;
        uint complaintID;
        string nameOfVictim;
        gender gender;
        domain domain;
        uint pincode;
        string complaintDetails;
        string[] evidenceUID;
        Comments[] comment;
    }

    mapping(uint => Complaint) public complaintMapping;

    function registerACase(
        string[] memory _evidenceHash,
        address _victim,
        string memory _name,
        uint _pincode,
        string memory _complaintDetails,
        uint _gender,
        uint _domain
    ) public {
        require(msg.sender != address(0));

        complaintMapping[complaintID].complaintBy = _victim;
        complaintMapping[complaintID].complaintID = complaintID;
        complaintMapping[complaintID].nameOfVictim = _name;
        complaintMapping[complaintID].gender = gender(_gender);
        complaintMapping[complaintID].domain = domain(_domain);
        complaintMapping[complaintID].pincode = _pincode;
        complaintMapping[complaintID].complaintDetails = _complaintDetails;
        complaintMapping[complaintID].evidenceUID = _evidenceHash;
        complaintID++;
    }

    function registerComment(
        address _commentBy,
        uint _complaintID,
        string memory _complaintDetails,
        string[] memory _evidenceUID
    ) public {
        require(msg.sender != address(0));
        uint _commentID = complaintMapping[_complaintID].comment.length;

        complaintMapping[_complaintID]
            .comment[_commentID]
            .commentBy = _commentBy;
        complaintMapping[_complaintID]
            .comment[_commentID]
            .commentID = _commentID;
        complaintMapping[_complaintID]
            .comment[_commentID]
            .complaintDetails = _complaintDetails;
        complaintMapping[_complaintID]
            .comment[_commentID]
            .evidenceUID = _evidenceUID;
    }

    function viewComplaintDetails(
        uint _complaintID
    ) public view returns (Complaint memory) {
        return complaintMapping[_complaintID];
    }

    function viewComplaint() public view returns (Complaint[] memory) {
        Complaint[] memory _complaint = new Complaint[](complaintID);
        for (uint i = 1; i < complaintID; i++) {
            _complaint[i] = complaintMapping[i];
        }
        return _complaint;
    }
}