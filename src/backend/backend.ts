import { Canister, Principal, None, Some, ic, init, nat, update, query } from 'azle';
import { Account, ICRC, TransferFromResult } from "azle/canisters/icrc";

let icrc : typeof ICRC;

export default Canister({
    init: init([], () => {
        icrc = ICRC(Principal.fromText(getCycleLedgerPrincipal()));
    }),
    balance: update([], nat, async () => {
        return await ic.call(icrc.icrc1_balance_of, { args: [ owner_account() ]})
    }),
    deposit: update([nat], TransferFromResult, async (amount) => {
        let fee = await ic.call(icrc.icrc1_fee, { args: [] });
        if (amount <= fee) { ic.trap(`Balance must be greater than required fee ${fee}`) };
        let result = await ic.call(icrc.icrc2_transfer_from, {
            args: [{
                spender_subaccount: None,
                from: { owner: ic.caller(), subaccount: None },
                to: owner_account(),
                amount: amount - fee,
                fee: Some(fee),
                created_at_time: None,
                memo: None,
            }]
        });
        return result
    })
})

function owner_account() : Account {
    return { owner: ic.id(), subaccount: None }
}

function getCycleLedgerPrincipal(): string {
    return (
        process.env.CANISTER_ID_CYCLE_LEDGER ??
        ic.trap('process.env.CANISTER_ID_CYCLE_LEDGER is undefined')
    );
}