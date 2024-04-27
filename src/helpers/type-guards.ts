import { TError } from "../types";

export function isError(err: unknown): err is TError {
    return (
        err !== null &&
        typeof err === "object" &&
        "code" in err &&
        "message" in err
    );
}
