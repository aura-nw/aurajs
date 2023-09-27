import * as _71 from "../proofs";
export declare const ics23: {
    hashOpFromJSON(object: any): _71.HashOp;
    hashOpToJSON(object: _71.HashOp): string;
    lengthOpFromJSON(object: any): _71.LengthOp;
    lengthOpToJSON(object: _71.LengthOp): string;
    HashOp: typeof _71.HashOp;
    HashOpSDKType: typeof _71.HashOp;
    LengthOp: typeof _71.LengthOp;
    LengthOpSDKType: typeof _71.LengthOp;
    ExistenceProof: {
        encode(message: _71.ExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ExistenceProof;
        fromJSON(object: any): _71.ExistenceProof;
        toJSON(message: _71.ExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _71.HashOp;
                prehashKey?: _71.HashOp;
                prehashValue?: _71.HashOp;
                length?: _71.LengthOp;
                prefix?: Uint8Array;
            };
            path?: {
                hash?: _71.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _71.ExistenceProof;
    };
    NonExistenceProof: {
        encode(message: _71.NonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.NonExistenceProof;
        fromJSON(object: any): _71.NonExistenceProof;
        toJSON(message: _71.NonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _71.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _71.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _71.NonExistenceProof;
    };
    CommitmentProof: {
        encode(message: _71.CommitmentProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CommitmentProof;
        fromJSON(object: any): _71.CommitmentProof;
        toJSON(message: _71.CommitmentProof): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _71.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _71.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _71.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _71.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _71.HashOp;
                                prehashKey?: _71.HashOp;
                                prehashValue?: _71.HashOp;
                                length?: _71.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _71.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _71.HashOp;
                                prehashKey?: _71.HashOp;
                                prehashValue?: _71.HashOp;
                                length?: _71.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: {
                                hash?: _71.HashOp;
                                prefix?: Uint8Array;
                                suffix?: Uint8Array;
                            }[];
                        };
                    };
                }[];
            };
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    nonexist?: {
                        key?: Uint8Array;
                        left?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _71.HashOp;
                                prehashKey?: _71.HashOp;
                                prehashValue?: _71.HashOp;
                                length?: _71.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                        right?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                            leaf?: {
                                hash?: _71.HashOp;
                                prehashKey?: _71.HashOp;
                                prehashValue?: _71.HashOp;
                                length?: _71.LengthOp;
                                prefix?: Uint8Array;
                            };
                            path?: number[];
                        };
                    };
                }[];
                lookupInners?: {
                    hash?: _71.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
        }): _71.CommitmentProof;
    };
    LeafOp: {
        encode(message: _71.LeafOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.LeafOp;
        fromJSON(object: any): _71.LeafOp;
        toJSON(message: _71.LeafOp): unknown;
        fromPartial(object: {
            hash?: _71.HashOp;
            prehashKey?: _71.HashOp;
            prehashValue?: _71.HashOp;
            length?: _71.LengthOp;
            prefix?: Uint8Array;
        }): _71.LeafOp;
    };
    InnerOp: {
        encode(message: _71.InnerOp, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InnerOp;
        fromJSON(object: any): _71.InnerOp;
        toJSON(message: _71.InnerOp): unknown;
        fromPartial(object: {
            hash?: _71.HashOp;
            prefix?: Uint8Array;
            suffix?: Uint8Array;
        }): _71.InnerOp;
    };
    ProofSpec: {
        encode(message: _71.ProofSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.ProofSpec;
        fromJSON(object: any): _71.ProofSpec;
        toJSON(message: _71.ProofSpec): unknown;
        fromPartial(object: {
            leafSpec?: {
                hash?: _71.HashOp;
                prehashKey?: _71.HashOp;
                prehashValue?: _71.HashOp;
                length?: _71.LengthOp;
                prefix?: Uint8Array;
            };
            innerSpec?: {
                childOrder?: number[];
                childSize?: number;
                minPrefixLength?: number;
                maxPrefixLength?: number;
                emptyChild?: Uint8Array;
                hash?: _71.HashOp;
            };
            maxDepth?: number;
            minDepth?: number;
        }): _71.ProofSpec;
    };
    InnerSpec: {
        encode(message: _71.InnerSpec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.InnerSpec;
        fromJSON(object: any): _71.InnerSpec;
        toJSON(message: _71.InnerSpec): unknown;
        fromPartial(object: {
            childOrder?: number[];
            childSize?: number;
            minPrefixLength?: number;
            maxPrefixLength?: number;
            emptyChild?: Uint8Array;
            hash?: _71.HashOp;
        }): _71.InnerSpec;
    };
    BatchProof: {
        encode(message: _71.BatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BatchProof;
        fromJSON(object: any): _71.BatchProof;
        toJSON(message: _71.BatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _71.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _71.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: {
                            hash?: _71.HashOp;
                            prefix?: Uint8Array;
                            suffix?: Uint8Array;
                        }[];
                    };
                };
            }[];
        }): _71.BatchProof;
    };
    BatchEntry: {
        encode(message: _71.BatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.BatchEntry;
        fromJSON(object: any): _71.BatchEntry;
        toJSON(message: _71.BatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: {
                    hash?: _71.HashOp;
                    prefix?: Uint8Array;
                    suffix?: Uint8Array;
                }[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _71.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: {
                        hash?: _71.HashOp;
                        prefix?: Uint8Array;
                        suffix?: Uint8Array;
                    }[];
                };
            };
        }): _71.BatchEntry;
    };
    CompressedBatchProof: {
        encode(message: _71.CompressedBatchProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedBatchProof;
        fromJSON(object: any): _71.CompressedBatchProof;
        toJSON(message: _71.CompressedBatchProof): unknown;
        fromPartial(object: {
            entries?: {
                exist?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                nonexist?: {
                    key?: Uint8Array;
                    left?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                    right?: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                        leaf?: {
                            hash?: _71.HashOp;
                            prehashKey?: _71.HashOp;
                            prehashValue?: _71.HashOp;
                            length?: _71.LengthOp;
                            prefix?: Uint8Array;
                        };
                        path?: number[];
                    };
                };
            }[];
            lookupInners?: {
                hash?: _71.HashOp;
                prefix?: Uint8Array;
                suffix?: Uint8Array;
            }[];
        }): _71.CompressedBatchProof;
    };
    CompressedBatchEntry: {
        encode(message: _71.CompressedBatchEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedBatchEntry;
        fromJSON(object: any): _71.CompressedBatchEntry;
        toJSON(message: _71.CompressedBatchEntry): unknown;
        fromPartial(object: {
            exist?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            nonexist?: {
                key?: Uint8Array;
                left?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
                right?: {
                    key?: Uint8Array;
                    value?: Uint8Array;
                    leaf?: {
                        hash?: _71.HashOp;
                        prehashKey?: _71.HashOp;
                        prehashValue?: _71.HashOp;
                        length?: _71.LengthOp;
                        prefix?: Uint8Array;
                    };
                    path?: number[];
                };
            };
        }): _71.CompressedBatchEntry;
    };
    CompressedExistenceProof: {
        encode(message: _71.CompressedExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedExistenceProof;
        fromJSON(object: any): _71.CompressedExistenceProof;
        toJSON(message: _71.CompressedExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            value?: Uint8Array;
            leaf?: {
                hash?: _71.HashOp;
                prehashKey?: _71.HashOp;
                prehashValue?: _71.HashOp;
                length?: _71.LengthOp;
                prefix?: Uint8Array;
            };
            path?: number[];
        }): _71.CompressedExistenceProof;
    };
    CompressedNonExistenceProof: {
        encode(message: _71.CompressedNonExistenceProof, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _71.CompressedNonExistenceProof;
        fromJSON(object: any): _71.CompressedNonExistenceProof;
        toJSON(message: _71.CompressedNonExistenceProof): unknown;
        fromPartial(object: {
            key?: Uint8Array;
            left?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
            right?: {
                key?: Uint8Array;
                value?: Uint8Array;
                leaf?: {
                    hash?: _71.HashOp;
                    prehashKey?: _71.HashOp;
                    prehashValue?: _71.HashOp;
                    length?: _71.LengthOp;
                    prefix?: Uint8Array;
                };
                path?: number[];
            };
        }): _71.CompressedNonExistenceProof;
    };
};
