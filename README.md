# Munar - Peer-to-peer Project Funding System

## Purpose

This document outlines te design and architecture of a Project Funding System which enabled contractors to lend funds from peers against their contract and to return later when the contract owner pays them.

## Scope

- The system has 4 actors

1. Peer (any user lending money to a contractor)
    - Lends funds to contrator
    - Recieves funds and interest when Contract expires and Company pays
2. Company (a user approving and paying the contract)
    - Approve Contracts
    - Disapprove Contracts
    - Pays Contract Loans
3. Contractor (a user applying for a loan against a contract from a company)
    - Applies for Loans
4. System (for vetting Companies, Contracts, and Contractors)
    - TODO

The system allows Peers, Companies, and Contractors to:
    - View Loans
    