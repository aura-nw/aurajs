import * as _83 from "./abci/types";
import * as _84 from "./crypto/keys";
import * as _85 from "./crypto/proof";
import * as _86 from "./libs/bits/types";
import * as _87 from "./p2p/types";
import * as _88 from "./types/block";
import * as _89 from "./types/evidence";
import * as _90 from "./types/params";
import * as _91 from "./types/types";
import * as _92 from "./types/validator";
import * as _93 from "./version/types";
export declare namespace tendermint {
    const abci: {
        checkTxTypeFromJSON(object: any): _83.CheckTxType;
        checkTxTypeToJSON(object: _83.CheckTxType): string;
        responseOfferSnapshot_ResultFromJSON(object: any): _83.ResponseOfferSnapshot_Result;
        responseOfferSnapshot_ResultToJSON(object: _83.ResponseOfferSnapshot_Result): string;
        responseApplySnapshotChunk_ResultFromJSON(object: any): _83.ResponseApplySnapshotChunk_Result;
        responseApplySnapshotChunk_ResultToJSON(object: _83.ResponseApplySnapshotChunk_Result): string;
        evidenceTypeFromJSON(object: any): _83.EvidenceType;
        evidenceTypeToJSON(object: _83.EvidenceType): string;
        CheckTxType: typeof _83.CheckTxType;
        CheckTxTypeSDKType: typeof _83.CheckTxType;
        ResponseOfferSnapshot_Result: typeof _83.ResponseOfferSnapshot_Result;
        ResponseOfferSnapshot_ResultSDKType: typeof _83.ResponseOfferSnapshot_Result;
        ResponseApplySnapshotChunk_Result: typeof _83.ResponseApplySnapshotChunk_Result;
        ResponseApplySnapshotChunk_ResultSDKType: typeof _83.ResponseApplySnapshotChunk_Result;
        EvidenceType: typeof _83.EvidenceType;
        EvidenceTypeSDKType: typeof _83.EvidenceType;
        Request: {
            encode(message: _83.Request, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Request;
            fromJSON(object: any): _83.Request;
            toJSON(message: _83.Request): unknown;
            fromPartial(object: {
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    version?: string;
                    blockVersion?: string | number | import("long").default;
                    p2pVersion?: string | number | import("long").default;
                };
                setOption?: {
                    key?: string;
                    value?: string;
                };
                initChain?: {
                    time?: Date;
                    chainId?: string;
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    appStateBytes?: Uint8Array;
                    initialHeight?: string | number | import("long").default;
                };
                query?: {
                    data?: Uint8Array;
                    path?: string;
                    height?: string | number | import("long").default;
                    prove?: boolean;
                };
                beginBlock?: {
                    hash?: Uint8Array;
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chainId?: string;
                        height?: string | number | import("long").default;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    lastCommitInfo?: {
                        round?: number;
                        votes?: {
                            validator?: {
                                address?: Uint8Array;
                                power?: string | number | import("long").default;
                            };
                            signedLastBlock?: boolean;
                        }[];
                    };
                    byzantineValidators?: {
                        type?: _83.EvidenceType;
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        height?: string | number | import("long").default;
                        time?: Date;
                        totalVotingPower?: string | number | import("long").default;
                    }[];
                };
                checkTx?: {
                    tx?: Uint8Array;
                    type?: _83.CheckTxType;
                };
                deliverTx?: {
                    tx?: Uint8Array;
                };
                endBlock?: {
                    height?: string | number | import("long").default;
                };
                commit?: {};
                listSnapshots?: {};
                offerSnapshot?: {
                    snapshot?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    };
                    appHash?: Uint8Array;
                };
                loadSnapshotChunk?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunk?: number;
                };
                applySnapshotChunk?: {
                    index?: number;
                    chunk?: Uint8Array;
                    sender?: string;
                };
            }): _83.Request;
        };
        RequestEcho: {
            encode(message: _83.RequestEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestEcho;
            fromJSON(object: any): _83.RequestEcho;
            toJSON(message: _83.RequestEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _83.RequestEcho;
        };
        RequestFlush: {
            encode(_: _83.RequestFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestFlush;
            fromJSON(_: any): _83.RequestFlush;
            toJSON(_: _83.RequestFlush): unknown;
            fromPartial(_: {}): _83.RequestFlush;
        };
        RequestInfo: {
            encode(message: _83.RequestInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestInfo;
            fromJSON(object: any): _83.RequestInfo;
            toJSON(message: _83.RequestInfo): unknown;
            fromPartial(object: {
                version?: string;
                blockVersion?: string | number | import("long").default;
                p2pVersion?: string | number | import("long").default;
            }): _83.RequestInfo;
        };
        RequestSetOption: {
            encode(message: _83.RequestSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestSetOption;
            fromJSON(object: any): _83.RequestSetOption;
            toJSON(message: _83.RequestSetOption): unknown;
            fromPartial(object: {
                key?: string;
                value?: string;
            }): _83.RequestSetOption;
        };
        RequestInitChain: {
            encode(message: _83.RequestInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestInitChain;
            fromJSON(object: any): _83.RequestInitChain;
            toJSON(message: _83.RequestInitChain): unknown;
            fromPartial(object: {
                time?: Date;
                chainId?: string;
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                appStateBytes?: Uint8Array;
                initialHeight?: string | number | import("long").default;
            }): _83.RequestInitChain;
        };
        RequestQuery: {
            encode(message: _83.RequestQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestQuery;
            fromJSON(object: any): _83.RequestQuery;
            toJSON(message: _83.RequestQuery): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                path?: string;
                height?: string | number | import("long").default;
                prove?: boolean;
            }): _83.RequestQuery;
        };
        RequestBeginBlock: {
            encode(message: _83.RequestBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestBeginBlock;
            fromJSON(object: any): _83.RequestBeginBlock;
            toJSON(message: _83.RequestBeginBlock): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                lastCommitInfo?: {
                    round?: number;
                    votes?: {
                        validator?: {
                            address?: Uint8Array;
                            power?: string | number | import("long").default;
                        };
                        signedLastBlock?: boolean;
                    }[];
                };
                byzantineValidators?: {
                    type?: _83.EvidenceType;
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    height?: string | number | import("long").default;
                    time?: Date;
                    totalVotingPower?: string | number | import("long").default;
                }[];
            }): _83.RequestBeginBlock;
        };
        RequestCheckTx: {
            encode(message: _83.RequestCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestCheckTx;
            fromJSON(object: any): _83.RequestCheckTx;
            toJSON(message: _83.RequestCheckTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
                type?: _83.CheckTxType;
            }): _83.RequestCheckTx;
        };
        RequestDeliverTx: {
            encode(message: _83.RequestDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestDeliverTx;
            fromJSON(object: any): _83.RequestDeliverTx;
            toJSON(message: _83.RequestDeliverTx): unknown;
            fromPartial(object: {
                tx?: Uint8Array;
            }): _83.RequestDeliverTx;
        };
        RequestEndBlock: {
            encode(message: _83.RequestEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestEndBlock;
            fromJSON(object: any): _83.RequestEndBlock;
            toJSON(message: _83.RequestEndBlock): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
            }): _83.RequestEndBlock;
        };
        RequestCommit: {
            encode(_: _83.RequestCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestCommit;
            fromJSON(_: any): _83.RequestCommit;
            toJSON(_: _83.RequestCommit): unknown;
            fromPartial(_: {}): _83.RequestCommit;
        };
        RequestListSnapshots: {
            encode(_: _83.RequestListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestListSnapshots;
            fromJSON(_: any): _83.RequestListSnapshots;
            toJSON(_: _83.RequestListSnapshots): unknown;
            fromPartial(_: {}): _83.RequestListSnapshots;
        };
        RequestOfferSnapshot: {
            encode(message: _83.RequestOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestOfferSnapshot;
            fromJSON(object: any): _83.RequestOfferSnapshot;
            toJSON(message: _83.RequestOfferSnapshot): unknown;
            fromPartial(object: {
                snapshot?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                };
                appHash?: Uint8Array;
            }): _83.RequestOfferSnapshot;
        };
        RequestLoadSnapshotChunk: {
            encode(message: _83.RequestLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestLoadSnapshotChunk;
            fromJSON(object: any): _83.RequestLoadSnapshotChunk;
            toJSON(message: _83.RequestLoadSnapshotChunk): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunk?: number;
            }): _83.RequestLoadSnapshotChunk;
        };
        RequestApplySnapshotChunk: {
            encode(message: _83.RequestApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.RequestApplySnapshotChunk;
            fromJSON(object: any): _83.RequestApplySnapshotChunk;
            toJSON(message: _83.RequestApplySnapshotChunk): unknown;
            fromPartial(object: {
                index?: number;
                chunk?: Uint8Array;
                sender?: string;
            }): _83.RequestApplySnapshotChunk;
        };
        Response: {
            encode(message: _83.Response, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Response;
            fromJSON(object: any): _83.Response;
            toJSON(message: _83.Response): unknown;
            fromPartial(object: {
                exception?: {
                    error?: string;
                };
                echo?: {
                    message?: string;
                };
                flush?: {};
                info?: {
                    data?: string;
                    version?: string;
                    appVersion?: string | number | import("long").default;
                    lastBlockHeight?: string | number | import("long").default;
                    lastBlockAppHash?: Uint8Array;
                };
                setOption?: {
                    code?: number;
                    log?: string;
                    info?: string;
                };
                initChain?: {
                    consensusParams?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    validators?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    appHash?: Uint8Array;
                };
                query?: {
                    code?: number;
                    log?: string;
                    info?: string;
                    index?: string | number | import("long").default;
                    key?: Uint8Array;
                    value?: Uint8Array;
                    proofOps?: {
                        ops?: {
                            type?: string;
                            key?: Uint8Array;
                            data?: Uint8Array;
                        }[];
                    };
                    height?: string | number | import("long").default;
                    codespace?: string;
                };
                beginBlock?: {
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                checkTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                    sender?: string;
                    priority?: string | number | import("long").default;
                    mempoolError?: string;
                };
                deliverTx?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
                endBlock?: {
                    validatorUpdates?: {
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        power?: string | number | import("long").default;
                    }[];
                    consensusParamUpdates?: {
                        block?: {
                            maxBytes?: string | number | import("long").default;
                            maxGas?: string | number | import("long").default;
                        };
                        evidence?: {
                            maxAgeNumBlocks?: string | number | import("long").default;
                            maxAgeDuration?: {
                                seconds?: string | number | import("long").default;
                                nanos?: number;
                            };
                            maxBytes?: string | number | import("long").default;
                        };
                        validator?: {
                            pubKeyTypes?: string[];
                        };
                        version?: {
                            appVersion?: string | number | import("long").default;
                        };
                    };
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                };
                commit?: {
                    data?: Uint8Array;
                    retainHeight?: string | number | import("long").default;
                };
                listSnapshots?: {
                    snapshots?: {
                        height?: string | number | import("long").default;
                        format?: number;
                        chunks?: number;
                        hash?: Uint8Array;
                        metadata?: Uint8Array;
                    }[];
                };
                offerSnapshot?: {
                    result?: _83.ResponseOfferSnapshot_Result;
                };
                loadSnapshotChunk?: {
                    chunk?: Uint8Array;
                };
                applySnapshotChunk?: {
                    result?: _83.ResponseApplySnapshotChunk_Result;
                    refetchChunks?: number[];
                    rejectSenders?: string[];
                };
            }): _83.Response;
        };
        ResponseException: {
            encode(message: _83.ResponseException, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseException;
            fromJSON(object: any): _83.ResponseException;
            toJSON(message: _83.ResponseException): unknown;
            fromPartial(object: {
                error?: string;
            }): _83.ResponseException;
        };
        ResponseEcho: {
            encode(message: _83.ResponseEcho, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseEcho;
            fromJSON(object: any): _83.ResponseEcho;
            toJSON(message: _83.ResponseEcho): unknown;
            fromPartial(object: {
                message?: string;
            }): _83.ResponseEcho;
        };
        ResponseFlush: {
            encode(_: _83.ResponseFlush, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseFlush;
            fromJSON(_: any): _83.ResponseFlush;
            toJSON(_: _83.ResponseFlush): unknown;
            fromPartial(_: {}): _83.ResponseFlush;
        };
        ResponseInfo: {
            encode(message: _83.ResponseInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseInfo;
            fromJSON(object: any): _83.ResponseInfo;
            toJSON(message: _83.ResponseInfo): unknown;
            fromPartial(object: {
                data?: string;
                version?: string;
                appVersion?: string | number | import("long").default;
                lastBlockHeight?: string | number | import("long").default;
                lastBlockAppHash?: Uint8Array;
            }): _83.ResponseInfo;
        };
        ResponseSetOption: {
            encode(message: _83.ResponseSetOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseSetOption;
            fromJSON(object: any): _83.ResponseSetOption;
            toJSON(message: _83.ResponseSetOption): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
            }): _83.ResponseSetOption;
        };
        ResponseInitChain: {
            encode(message: _83.ResponseInitChain, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseInitChain;
            fromJSON(object: any): _83.ResponseInitChain;
            toJSON(message: _83.ResponseInitChain): unknown;
            fromPartial(object: {
                consensusParams?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                validators?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                appHash?: Uint8Array;
            }): _83.ResponseInitChain;
        };
        ResponseQuery: {
            encode(message: _83.ResponseQuery, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseQuery;
            fromJSON(object: any): _83.ResponseQuery;
            toJSON(message: _83.ResponseQuery): unknown;
            fromPartial(object: {
                code?: number;
                log?: string;
                info?: string;
                index?: string | number | import("long").default;
                key?: Uint8Array;
                value?: Uint8Array;
                proofOps?: {
                    ops?: {
                        type?: string;
                        key?: Uint8Array;
                        data?: Uint8Array;
                    }[];
                };
                height?: string | number | import("long").default;
                codespace?: string;
            }): _83.ResponseQuery;
        };
        ResponseBeginBlock: {
            encode(message: _83.ResponseBeginBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseBeginBlock;
            fromJSON(object: any): _83.ResponseBeginBlock;
            toJSON(message: _83.ResponseBeginBlock): unknown;
            fromPartial(object: {
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _83.ResponseBeginBlock;
        };
        ResponseCheckTx: {
            encode(message: _83.ResponseCheckTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseCheckTx;
            fromJSON(object: any): _83.ResponseCheckTx;
            toJSON(message: _83.ResponseCheckTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").default;
                gasUsed?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
                sender?: string;
                priority?: string | number | import("long").default;
                mempoolError?: string;
            }): _83.ResponseCheckTx;
        };
        ResponseDeliverTx: {
            encode(message: _83.ResponseDeliverTx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseDeliverTx;
            fromJSON(object: any): _83.ResponseDeliverTx;
            toJSON(message: _83.ResponseDeliverTx): unknown;
            fromPartial(object: {
                code?: number;
                data?: Uint8Array;
                log?: string;
                info?: string;
                gasWanted?: string | number | import("long").default;
                gasUsed?: string | number | import("long").default;
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
                codespace?: string;
            }): _83.ResponseDeliverTx;
        };
        ResponseEndBlock: {
            encode(message: _83.ResponseEndBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseEndBlock;
            fromJSON(object: any): _83.ResponseEndBlock;
            toJSON(message: _83.ResponseEndBlock): unknown;
            fromPartial(object: {
                validatorUpdates?: {
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    power?: string | number | import("long").default;
                }[];
                consensusParamUpdates?: {
                    block?: {
                        maxBytes?: string | number | import("long").default;
                        maxGas?: string | number | import("long").default;
                    };
                    evidence?: {
                        maxAgeNumBlocks?: string | number | import("long").default;
                        maxAgeDuration?: {
                            seconds?: string | number | import("long").default;
                            nanos?: number;
                        };
                        maxBytes?: string | number | import("long").default;
                    };
                    validator?: {
                        pubKeyTypes?: string[];
                    };
                    version?: {
                        appVersion?: string | number | import("long").default;
                    };
                };
                events?: {
                    type?: string;
                    attributes?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        index?: boolean;
                    }[];
                }[];
            }): _83.ResponseEndBlock;
        };
        ResponseCommit: {
            encode(message: _83.ResponseCommit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseCommit;
            fromJSON(object: any): _83.ResponseCommit;
            toJSON(message: _83.ResponseCommit): unknown;
            fromPartial(object: {
                data?: Uint8Array;
                retainHeight?: string | number | import("long").default;
            }): _83.ResponseCommit;
        };
        ResponseListSnapshots: {
            encode(message: _83.ResponseListSnapshots, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseListSnapshots;
            fromJSON(object: any): _83.ResponseListSnapshots;
            toJSON(message: _83.ResponseListSnapshots): unknown;
            fromPartial(object: {
                snapshots?: {
                    height?: string | number | import("long").default;
                    format?: number;
                    chunks?: number;
                    hash?: Uint8Array;
                    metadata?: Uint8Array;
                }[];
            }): _83.ResponseListSnapshots;
        };
        ResponseOfferSnapshot: {
            encode(message: _83.ResponseOfferSnapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseOfferSnapshot;
            fromJSON(object: any): _83.ResponseOfferSnapshot;
            toJSON(message: _83.ResponseOfferSnapshot): unknown;
            fromPartial(object: {
                result?: _83.ResponseOfferSnapshot_Result;
            }): _83.ResponseOfferSnapshot;
        };
        ResponseLoadSnapshotChunk: {
            encode(message: _83.ResponseLoadSnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseLoadSnapshotChunk;
            fromJSON(object: any): _83.ResponseLoadSnapshotChunk;
            toJSON(message: _83.ResponseLoadSnapshotChunk): unknown;
            fromPartial(object: {
                chunk?: Uint8Array;
            }): _83.ResponseLoadSnapshotChunk;
        };
        ResponseApplySnapshotChunk: {
            encode(message: _83.ResponseApplySnapshotChunk, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ResponseApplySnapshotChunk;
            fromJSON(object: any): _83.ResponseApplySnapshotChunk;
            toJSON(message: _83.ResponseApplySnapshotChunk): unknown;
            fromPartial(object: {
                result?: _83.ResponseApplySnapshotChunk_Result;
                refetchChunks?: number[];
                rejectSenders?: string[];
            }): _83.ResponseApplySnapshotChunk;
        };
        ConsensusParams: {
            encode(message: _83.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ConsensusParams;
            fromJSON(object: any): _83.ConsensusParams;
            toJSON(message: _83.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").default;
                    maxGas?: string | number | import("long").default;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").default;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").default;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").default;
                };
            }): _83.ConsensusParams;
        };
        BlockParams: {
            encode(message: _83.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.BlockParams;
            fromJSON(object: any): _83.BlockParams;
            toJSON(message: _83.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long").default;
                maxGas?: string | number | import("long").default;
            }): _83.BlockParams;
        };
        LastCommitInfo: {
            encode(message: _83.LastCommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.LastCommitInfo;
            fromJSON(object: any): _83.LastCommitInfo;
            toJSON(message: _83.LastCommitInfo): unknown;
            fromPartial(object: {
                round?: number;
                votes?: {
                    validator?: {
                        address?: Uint8Array;
                        power?: string | number | import("long").default;
                    };
                    signedLastBlock?: boolean;
                }[];
            }): _83.LastCommitInfo;
        };
        Event: {
            encode(message: _83.Event, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Event;
            fromJSON(object: any): _83.Event;
            toJSON(message: _83.Event): unknown;
            fromPartial(object: {
                type?: string;
                attributes?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    index?: boolean;
                }[];
            }): _83.Event;
        };
        EventAttribute: {
            encode(message: _83.EventAttribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.EventAttribute;
            fromJSON(object: any): _83.EventAttribute;
            toJSON(message: _83.EventAttribute): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                value?: Uint8Array;
                index?: boolean;
            }): _83.EventAttribute;
        };
        TxResult: {
            encode(message: _83.TxResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.TxResult;
            fromJSON(object: any): _83.TxResult;
            toJSON(message: _83.TxResult): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                index?: number;
                tx?: Uint8Array;
                result?: {
                    code?: number;
                    data?: Uint8Array;
                    log?: string;
                    info?: string;
                    gasWanted?: string | number | import("long").default;
                    gasUsed?: string | number | import("long").default;
                    events?: {
                        type?: string;
                        attributes?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            index?: boolean;
                        }[];
                    }[];
                    codespace?: string;
                };
            }): _83.TxResult;
        };
        Validator: {
            encode(message: _83.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Validator;
            fromJSON(object: any): _83.Validator;
            toJSON(message: _83.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                power?: string | number | import("long").default;
            }): _83.Validator;
        };
        ValidatorUpdate: {
            encode(message: _83.ValidatorUpdate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.ValidatorUpdate;
            fromJSON(object: any): _83.ValidatorUpdate;
            toJSON(message: _83.ValidatorUpdate): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                power?: string | number | import("long").default;
            }): _83.ValidatorUpdate;
        };
        VoteInfo: {
            encode(message: _83.VoteInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.VoteInfo;
            fromJSON(object: any): _83.VoteInfo;
            toJSON(message: _83.VoteInfo): unknown;
            fromPartial(object: {
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                signedLastBlock?: boolean;
            }): _83.VoteInfo;
        };
        Evidence: {
            encode(message: _83.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Evidence;
            fromJSON(object: any): _83.Evidence;
            toJSON(message: _83.Evidence): unknown;
            fromPartial(object: {
                type?: _83.EvidenceType;
                validator?: {
                    address?: Uint8Array;
                    power?: string | number | import("long").default;
                };
                height?: string | number | import("long").default;
                time?: Date;
                totalVotingPower?: string | number | import("long").default;
            }): _83.Evidence;
        };
        Snapshot: {
            encode(message: _83.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.Snapshot;
            fromJSON(object: any): _83.Snapshot;
            toJSON(message: _83.Snapshot): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                format?: number;
                chunks?: number;
                hash?: Uint8Array;
                metadata?: Uint8Array;
            }): _83.Snapshot;
        };
    };
    const crypto: {
        Proof: {
            encode(message: _85.Proof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Proof;
            fromJSON(object: any): _85.Proof;
            toJSON(message: _85.Proof): unknown;
            fromPartial(object: {
                total?: string | number | import("long").default;
                index?: string | number | import("long").default;
                leafHash?: Uint8Array;
                aunts?: Uint8Array[];
            }): _85.Proof;
        };
        ValueOp: {
            encode(message: _85.ValueOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ValueOp;
            fromJSON(object: any): _85.ValueOp;
            toJSON(message: _85.ValueOp): unknown;
            fromPartial(object: {
                key?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _85.ValueOp;
        };
        DominoOp: {
            encode(message: _85.DominoOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.DominoOp;
            fromJSON(object: any): _85.DominoOp;
            toJSON(message: _85.DominoOp): unknown;
            fromPartial(object: {
                key?: string;
                input?: string;
                output?: string;
            }): _85.DominoOp;
        };
        ProofOp: {
            encode(message: _85.ProofOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ProofOp;
            fromJSON(object: any): _85.ProofOp;
            toJSON(message: _85.ProofOp): unknown;
            fromPartial(object: {
                type?: string;
                key?: Uint8Array;
                data?: Uint8Array;
            }): _85.ProofOp;
        };
        ProofOps: {
            encode(message: _85.ProofOps, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.ProofOps;
            fromJSON(object: any): _85.ProofOps;
            toJSON(message: _85.ProofOps): unknown;
            fromPartial(object: {
                ops?: {
                    type?: string;
                    key?: Uint8Array;
                    data?: Uint8Array;
                }[];
            }): _85.ProofOps;
        };
        PublicKey: {
            encode(message: _84.PublicKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.PublicKey;
            fromJSON(object: any): _84.PublicKey;
            toJSON(message: _84.PublicKey): unknown;
            fromPartial(object: {
                ed25519?: Uint8Array;
                secp256k1?: Uint8Array;
            }): _84.PublicKey;
        };
    };
    namespace libs {
        const bits: {
            BitArray: {
                encode(message: _86.BitArray, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.BitArray;
                fromJSON(object: any): _86.BitArray;
                toJSON(message: _86.BitArray): unknown;
                fromPartial(object: {
                    bits?: string | number | import("long").default;
                    elems?: (string | number | import("long").default)[];
                }): _86.BitArray;
            };
        };
    }
    const p2p: {
        NetAddress: {
            encode(message: _87.NetAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.NetAddress;
            fromJSON(object: any): _87.NetAddress;
            toJSON(message: _87.NetAddress): unknown;
            fromPartial(object: {
                id?: string;
                ip?: string;
                port?: number;
            }): _87.NetAddress;
        };
        ProtocolVersion: {
            encode(message: _87.ProtocolVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.ProtocolVersion;
            fromJSON(object: any): _87.ProtocolVersion;
            toJSON(message: _87.ProtocolVersion): unknown;
            fromPartial(object: {
                p2p?: string | number | import("long").default;
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _87.ProtocolVersion;
        };
        DefaultNodeInfo: {
            encode(message: _87.DefaultNodeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DefaultNodeInfo;
            fromJSON(object: any): _87.DefaultNodeInfo;
            toJSON(message: _87.DefaultNodeInfo): unknown;
            fromPartial(object: {
                protocolVersion?: {
                    p2p?: string | number | import("long").default;
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                defaultNodeId?: string;
                listenAddr?: string;
                network?: string;
                version?: string;
                channels?: Uint8Array;
                moniker?: string;
                other?: {
                    txIndex?: string;
                    rpcAddress?: string;
                };
            }): _87.DefaultNodeInfo;
        };
        DefaultNodeInfoOther: {
            encode(message: _87.DefaultNodeInfoOther, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.DefaultNodeInfoOther;
            fromJSON(object: any): _87.DefaultNodeInfoOther;
            toJSON(message: _87.DefaultNodeInfoOther): unknown;
            fromPartial(object: {
                txIndex?: string;
                rpcAddress?: string;
            }): _87.DefaultNodeInfoOther;
        };
    };
    const types: {
        ValidatorSet: {
            encode(message: _92.ValidatorSet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.ValidatorSet;
            fromJSON(object: any): _92.ValidatorSet;
            toJSON(message: _92.ValidatorSet): unknown;
            fromPartial(object: {
                validators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                }[];
                proposer?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                };
                totalVotingPower?: string | number | import("long").default;
            }): _92.ValidatorSet;
        };
        Validator: {
            encode(message: _92.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.Validator;
            fromJSON(object: any): _92.Validator;
            toJSON(message: _92.Validator): unknown;
            fromPartial(object: {
                address?: Uint8Array;
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").default;
                proposerPriority?: string | number | import("long").default;
            }): _92.Validator;
        };
        SimpleValidator: {
            encode(message: _92.SimpleValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.SimpleValidator;
            fromJSON(object: any): _92.SimpleValidator;
            toJSON(message: _92.SimpleValidator): unknown;
            fromPartial(object: {
                pubKey?: {
                    ed25519?: Uint8Array;
                    secp256k1?: Uint8Array;
                };
                votingPower?: string | number | import("long").default;
            }): _92.SimpleValidator;
        };
        blockIDFlagFromJSON(object: any): _91.BlockIDFlag;
        blockIDFlagToJSON(object: _91.BlockIDFlag): string;
        signedMsgTypeFromJSON(object: any): _91.SignedMsgType;
        signedMsgTypeToJSON(object: _91.SignedMsgType): string;
        BlockIDFlag: typeof _91.BlockIDFlag;
        BlockIDFlagSDKType: typeof _91.BlockIDFlag;
        SignedMsgType: typeof _91.SignedMsgType;
        SignedMsgTypeSDKType: typeof _91.SignedMsgType;
        PartSetHeader: {
            encode(message: _91.PartSetHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.PartSetHeader;
            fromJSON(object: any): _91.PartSetHeader;
            toJSON(message: _91.PartSetHeader): unknown;
            fromPartial(object: {
                total?: number;
                hash?: Uint8Array;
            }): _91.PartSetHeader;
        };
        Part: {
            encode(message: _91.Part, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Part;
            fromJSON(object: any): _91.Part;
            toJSON(message: _91.Part): unknown;
            fromPartial(object: {
                index?: number;
                bytes?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _91.Part;
        };
        BlockID: {
            encode(message: _91.BlockID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockID;
            fromJSON(object: any): _91.BlockID;
            toJSON(message: _91.BlockID): unknown;
            fromPartial(object: {
                hash?: Uint8Array;
                partSetHeader?: {
                    total?: number;
                    hash?: Uint8Array;
                };
            }): _91.BlockID;
        };
        Header: {
            encode(message: _91.Header, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Header;
            fromJSON(object: any): _91.Header;
            toJSON(message: _91.Header): unknown;
            fromPartial(object: {
                version?: {
                    block?: string | number | import("long").default;
                    app?: string | number | import("long").default;
                };
                chainId?: string;
                height?: string | number | import("long").default;
                time?: Date;
                lastBlockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                lastCommitHash?: Uint8Array;
                dataHash?: Uint8Array;
                validatorsHash?: Uint8Array;
                nextValidatorsHash?: Uint8Array;
                consensusHash?: Uint8Array;
                appHash?: Uint8Array;
                lastResultsHash?: Uint8Array;
                evidenceHash?: Uint8Array;
                proposerAddress?: Uint8Array;
            }): _91.Header;
        };
        Data: {
            encode(message: _91.Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Data;
            fromJSON(object: any): _91.Data;
            toJSON(message: _91.Data): unknown;
            fromPartial(object: {
                txs?: Uint8Array[];
            }): _91.Data;
        };
        Vote: {
            encode(message: _91.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Vote;
            fromJSON(object: any): _91.Vote;
            toJSON(message: _91.Vote): unknown;
            fromPartial(object: {
                type?: _91.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                validatorAddress?: Uint8Array;
                validatorIndex?: number;
                signature?: Uint8Array;
            }): _91.Vote;
        };
        Commit: {
            encode(message: _91.Commit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Commit;
            fromJSON(object: any): _91.Commit;
            toJSON(message: _91.Commit): unknown;
            fromPartial(object: {
                height?: string | number | import("long").default;
                round?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                signatures?: {
                    blockIdFlag?: _91.BlockIDFlag;
                    validatorAddress?: Uint8Array;
                    timestamp?: Date;
                    signature?: Uint8Array;
                }[];
            }): _91.Commit;
        };
        CommitSig: {
            encode(message: _91.CommitSig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.CommitSig;
            fromJSON(object: any): _91.CommitSig;
            toJSON(message: _91.CommitSig): unknown;
            fromPartial(object: {
                blockIdFlag?: _91.BlockIDFlag;
                validatorAddress?: Uint8Array;
                timestamp?: Date;
                signature?: Uint8Array;
            }): _91.CommitSig;
        };
        Proposal: {
            encode(message: _91.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Proposal;
            fromJSON(object: any): _91.Proposal;
            toJSON(message: _91.Proposal): unknown;
            fromPartial(object: {
                type?: _91.SignedMsgType;
                height?: string | number | import("long").default;
                round?: number;
                polRound?: number;
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                timestamp?: Date;
                signature?: Uint8Array;
            }): _91.Proposal;
        };
        SignedHeader: {
            encode(message: _91.SignedHeader, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.SignedHeader;
            fromJSON(object: any): _91.SignedHeader;
            toJSON(message: _91.SignedHeader): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                commit?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _91.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _91.SignedHeader;
        };
        LightBlock: {
            encode(message: _91.LightBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.LightBlock;
            fromJSON(object: any): _91.LightBlock;
            toJSON(message: _91.LightBlock): unknown;
            fromPartial(object: {
                signedHeader?: {
                    header?: {
                        version?: {
                            block?: string | number | import("long").default;
                            app?: string | number | import("long").default;
                        };
                        chainId?: string;
                        height?: string | number | import("long").default;
                        time?: Date;
                        lastBlockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        lastCommitHash?: Uint8Array;
                        dataHash?: Uint8Array;
                        validatorsHash?: Uint8Array;
                        nextValidatorsHash?: Uint8Array;
                        consensusHash?: Uint8Array;
                        appHash?: Uint8Array;
                        lastResultsHash?: Uint8Array;
                        evidenceHash?: Uint8Array;
                        proposerAddress?: Uint8Array;
                    };
                    commit?: {
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        signatures?: {
                            blockIdFlag?: _91.BlockIDFlag;
                            validatorAddress?: Uint8Array;
                            timestamp?: Date;
                            signature?: Uint8Array;
                        }[];
                    };
                };
                validatorSet?: {
                    validators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }[];
                    proposer?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    };
                    totalVotingPower?: string | number | import("long").default;
                };
            }): _91.LightBlock;
        };
        BlockMeta: {
            encode(message: _91.BlockMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.BlockMeta;
            fromJSON(object: any): _91.BlockMeta;
            toJSON(message: _91.BlockMeta): unknown;
            fromPartial(object: {
                blockId?: {
                    hash?: Uint8Array;
                    partSetHeader?: {
                        total?: number;
                        hash?: Uint8Array;
                    };
                };
                blockSize?: string | number | import("long").default;
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                numTxs?: string | number | import("long").default;
            }): _91.BlockMeta;
        };
        TxProof: {
            encode(message: _91.TxProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.TxProof;
            fromJSON(object: any): _91.TxProof;
            toJSON(message: _91.TxProof): unknown;
            fromPartial(object: {
                rootHash?: Uint8Array;
                data?: Uint8Array;
                proof?: {
                    total?: string | number | import("long").default;
                    index?: string | number | import("long").default;
                    leafHash?: Uint8Array;
                    aunts?: Uint8Array[];
                };
            }): _91.TxProof;
        };
        ConsensusParams: {
            encode(message: _90.ConsensusParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ConsensusParams;
            fromJSON(object: any): _90.ConsensusParams;
            toJSON(message: _90.ConsensusParams): unknown;
            fromPartial(object: {
                block?: {
                    maxBytes?: string | number | import("long").default;
                    maxGas?: string | number | import("long").default;
                    timeIotaMs?: string | number | import("long").default;
                };
                evidence?: {
                    maxAgeNumBlocks?: string | number | import("long").default;
                    maxAgeDuration?: {
                        seconds?: string | number | import("long").default;
                        nanos?: number;
                    };
                    maxBytes?: string | number | import("long").default;
                };
                validator?: {
                    pubKeyTypes?: string[];
                };
                version?: {
                    appVersion?: string | number | import("long").default;
                };
            }): _90.ConsensusParams;
        };
        BlockParams: {
            encode(message: _90.BlockParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.BlockParams;
            fromJSON(object: any): _90.BlockParams;
            toJSON(message: _90.BlockParams): unknown;
            fromPartial(object: {
                maxBytes?: string | number | import("long").default;
                maxGas?: string | number | import("long").default;
                timeIotaMs?: string | number | import("long").default;
            }): _90.BlockParams;
        };
        EvidenceParams: {
            encode(message: _90.EvidenceParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.EvidenceParams;
            fromJSON(object: any): _90.EvidenceParams;
            toJSON(message: _90.EvidenceParams): unknown;
            fromPartial(object: {
                maxAgeNumBlocks?: string | number | import("long").default;
                maxAgeDuration?: {
                    seconds?: string | number | import("long").default;
                    nanos?: number;
                };
                maxBytes?: string | number | import("long").default;
            }): _90.EvidenceParams;
        };
        ValidatorParams: {
            encode(message: _90.ValidatorParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.ValidatorParams;
            fromJSON(object: any): _90.ValidatorParams;
            toJSON(message: _90.ValidatorParams): unknown;
            fromPartial(object: {
                pubKeyTypes?: string[];
            }): _90.ValidatorParams;
        };
        VersionParams: {
            encode(message: _90.VersionParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.VersionParams;
            fromJSON(object: any): _90.VersionParams;
            toJSON(message: _90.VersionParams): unknown;
            fromPartial(object: {
                appVersion?: string | number | import("long").default;
            }): _90.VersionParams;
        };
        HashedParams: {
            encode(message: _90.HashedParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.HashedParams;
            fromJSON(object: any): _90.HashedParams;
            toJSON(message: _90.HashedParams): unknown;
            fromPartial(object: {
                blockMaxBytes?: string | number | import("long").default;
                blockMaxGas?: string | number | import("long").default;
            }): _90.HashedParams;
        };
        Evidence: {
            encode(message: _89.Evidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Evidence;
            fromJSON(object: any): _89.Evidence;
            toJSON(message: _89.Evidence): unknown;
            fromPartial(object: {
                duplicateVoteEvidence?: {
                    voteA?: {
                        type?: _91.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    voteB?: {
                        type?: _91.SignedMsgType;
                        height?: string | number | import("long").default;
                        round?: number;
                        blockId?: {
                            hash?: Uint8Array;
                            partSetHeader?: {
                                total?: number;
                                hash?: Uint8Array;
                            };
                        };
                        timestamp?: Date;
                        validatorAddress?: Uint8Array;
                        validatorIndex?: number;
                        signature?: Uint8Array;
                    };
                    totalVotingPower?: string | number | import("long").default;
                    validatorPower?: string | number | import("long").default;
                    timestamp?: Date;
                };
                lightClientAttackEvidence?: {
                    conflictingBlock?: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: string | number | import("long").default;
                                    app?: string | number | import("long").default;
                                };
                                chainId?: string;
                                height?: string | number | import("long").default;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: _91.BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            };
                            totalVotingPower?: string | number | import("long").default;
                        };
                    };
                    commonHeight?: string | number | import("long").default;
                    byzantineValidators?: {
                        address?: Uint8Array;
                        pubKey?: {
                            ed25519?: Uint8Array;
                            secp256k1?: Uint8Array;
                        };
                        votingPower?: string | number | import("long").default;
                        proposerPriority?: string | number | import("long").default;
                    }[];
                    totalVotingPower?: string | number | import("long").default;
                    timestamp?: Date;
                };
            }): _89.Evidence;
        };
        DuplicateVoteEvidence: {
            encode(message: _89.DuplicateVoteEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.DuplicateVoteEvidence;
            fromJSON(object: any): _89.DuplicateVoteEvidence;
            toJSON(message: _89.DuplicateVoteEvidence): unknown;
            fromPartial(object: {
                voteA?: {
                    type?: _91.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                voteB?: {
                    type?: _91.SignedMsgType;
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    timestamp?: Date;
                    validatorAddress?: Uint8Array;
                    validatorIndex?: number;
                    signature?: Uint8Array;
                };
                totalVotingPower?: string | number | import("long").default;
                validatorPower?: string | number | import("long").default;
                timestamp?: Date;
            }): _89.DuplicateVoteEvidence;
        };
        LightClientAttackEvidence: {
            encode(message: _89.LightClientAttackEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.LightClientAttackEvidence;
            fromJSON(object: any): _89.LightClientAttackEvidence;
            toJSON(message: _89.LightClientAttackEvidence): unknown;
            fromPartial(object: {
                conflictingBlock?: {
                    signedHeader?: {
                        header?: {
                            version?: {
                                block?: string | number | import("long").default;
                                app?: string | number | import("long").default;
                            };
                            chainId?: string;
                            height?: string | number | import("long").default;
                            time?: Date;
                            lastBlockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            lastCommitHash?: Uint8Array;
                            dataHash?: Uint8Array;
                            validatorsHash?: Uint8Array;
                            nextValidatorsHash?: Uint8Array;
                            consensusHash?: Uint8Array;
                            appHash?: Uint8Array;
                            lastResultsHash?: Uint8Array;
                            evidenceHash?: Uint8Array;
                            proposerAddress?: Uint8Array;
                        };
                        commit?: {
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            signatures?: {
                                blockIdFlag?: _91.BlockIDFlag;
                                validatorAddress?: Uint8Array;
                                timestamp?: Date;
                                signature?: Uint8Array;
                            }[];
                        };
                    };
                    validatorSet?: {
                        validators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        proposer?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        };
                        totalVotingPower?: string | number | import("long").default;
                    };
                };
                commonHeight?: string | number | import("long").default;
                byzantineValidators?: {
                    address?: Uint8Array;
                    pubKey?: {
                        ed25519?: Uint8Array;
                        secp256k1?: Uint8Array;
                    };
                    votingPower?: string | number | import("long").default;
                    proposerPriority?: string | number | import("long").default;
                }[];
                totalVotingPower?: string | number | import("long").default;
                timestamp?: Date;
            }): _89.LightClientAttackEvidence;
        };
        EvidenceList: {
            encode(message: _89.EvidenceList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.EvidenceList;
            fromJSON(object: any): _89.EvidenceList;
            toJSON(message: _89.EvidenceList): unknown;
            fromPartial(object: {
                evidence?: {
                    duplicateVoteEvidence?: {
                        voteA?: {
                            type?: _91.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        voteB?: {
                            type?: _91.SignedMsgType;
                            height?: string | number | import("long").default;
                            round?: number;
                            blockId?: {
                                hash?: Uint8Array;
                                partSetHeader?: {
                                    total?: number;
                                    hash?: Uint8Array;
                                };
                            };
                            timestamp?: Date;
                            validatorAddress?: Uint8Array;
                            validatorIndex?: number;
                            signature?: Uint8Array;
                        };
                        totalVotingPower?: string | number | import("long").default;
                        validatorPower?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                    lightClientAttackEvidence?: {
                        conflictingBlock?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: string | number | import("long").default;
                                        app?: string | number | import("long").default;
                                    };
                                    chainId?: string;
                                    height?: string | number | import("long").default;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: string | number | import("long").default;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: _91.BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: string | number | import("long").default;
                                    proposerPriority?: string | number | import("long").default;
                                };
                                totalVotingPower?: string | number | import("long").default;
                            };
                        };
                        commonHeight?: string | number | import("long").default;
                        byzantineValidators?: {
                            address?: Uint8Array;
                            pubKey?: {
                                ed25519?: Uint8Array;
                                secp256k1?: Uint8Array;
                            };
                            votingPower?: string | number | import("long").default;
                            proposerPriority?: string | number | import("long").default;
                        }[];
                        totalVotingPower?: string | number | import("long").default;
                        timestamp?: Date;
                    };
                }[];
            }): _89.EvidenceList;
        };
        Block: {
            encode(message: _88.Block, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Block;
            fromJSON(object: any): _88.Block;
            toJSON(message: _88.Block): unknown;
            fromPartial(object: {
                header?: {
                    version?: {
                        block?: string | number | import("long").default;
                        app?: string | number | import("long").default;
                    };
                    chainId?: string;
                    height?: string | number | import("long").default;
                    time?: Date;
                    lastBlockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    lastCommitHash?: Uint8Array;
                    dataHash?: Uint8Array;
                    validatorsHash?: Uint8Array;
                    nextValidatorsHash?: Uint8Array;
                    consensusHash?: Uint8Array;
                    appHash?: Uint8Array;
                    lastResultsHash?: Uint8Array;
                    evidenceHash?: Uint8Array;
                    proposerAddress?: Uint8Array;
                };
                data?: {
                    txs?: Uint8Array[];
                };
                evidence?: {
                    evidence?: {
                        duplicateVoteEvidence?: {
                            voteA?: {
                                type?: _91.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            voteB?: {
                                type?: _91.SignedMsgType;
                                height?: string | number | import("long").default;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                timestamp?: Date;
                                validatorAddress?: Uint8Array;
                                validatorIndex?: number;
                                signature?: Uint8Array;
                            };
                            totalVotingPower?: string | number | import("long").default;
                            validatorPower?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                        lightClientAttackEvidence?: {
                            conflictingBlock?: {
                                signedHeader?: {
                                    header?: {
                                        version?: {
                                            block?: string | number | import("long").default;
                                            app?: string | number | import("long").default;
                                        };
                                        chainId?: string;
                                        height?: string | number | import("long").default;
                                        time?: Date;
                                        lastBlockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        lastCommitHash?: Uint8Array;
                                        dataHash?: Uint8Array;
                                        validatorsHash?: Uint8Array;
                                        nextValidatorsHash?: Uint8Array;
                                        consensusHash?: Uint8Array;
                                        appHash?: Uint8Array;
                                        lastResultsHash?: Uint8Array;
                                        evidenceHash?: Uint8Array;
                                        proposerAddress?: Uint8Array;
                                    };
                                    commit?: {
                                        height?: string | number | import("long").default;
                                        round?: number;
                                        blockId?: {
                                            hash?: Uint8Array;
                                            partSetHeader?: {
                                                total?: number;
                                                hash?: Uint8Array;
                                            };
                                        };
                                        signatures?: {
                                            blockIdFlag?: _91.BlockIDFlag;
                                            validatorAddress?: Uint8Array;
                                            timestamp?: Date;
                                            signature?: Uint8Array;
                                        }[];
                                    };
                                };
                                validatorSet?: {
                                    validators?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    }[];
                                    proposer?: {
                                        address?: Uint8Array;
                                        pubKey?: {
                                            ed25519?: Uint8Array;
                                            secp256k1?: Uint8Array;
                                        };
                                        votingPower?: string | number | import("long").default;
                                        proposerPriority?: string | number | import("long").default;
                                    };
                                    totalVotingPower?: string | number | import("long").default;
                                };
                            };
                            commonHeight?: string | number | import("long").default;
                            byzantineValidators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: string | number | import("long").default;
                                proposerPriority?: string | number | import("long").default;
                            }[];
                            totalVotingPower?: string | number | import("long").default;
                            timestamp?: Date;
                        };
                    }[];
                };
                lastCommit?: {
                    height?: string | number | import("long").default;
                    round?: number;
                    blockId?: {
                        hash?: Uint8Array;
                        partSetHeader?: {
                            total?: number;
                            hash?: Uint8Array;
                        };
                    };
                    signatures?: {
                        blockIdFlag?: _91.BlockIDFlag;
                        validatorAddress?: Uint8Array;
                        timestamp?: Date;
                        signature?: Uint8Array;
                    }[];
                };
            }): _88.Block;
        };
    };
    const version: {
        App: {
            encode(message: _93.App, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.App;
            fromJSON(object: any): _93.App;
            toJSON(message: _93.App): unknown;
            fromPartial(object: {
                protocol?: string | number | import("long").default;
                software?: string;
            }): _93.App;
        };
        Consensus: {
            encode(message: _93.Consensus, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
            decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.Consensus;
            fromJSON(object: any): _93.Consensus;
            toJSON(message: _93.Consensus): unknown;
            fromPartial(object: {
                block?: string | number | import("long").default;
                app?: string | number | import("long").default;
            }): _93.Consensus;
        };
    };
}
