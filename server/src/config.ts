const readProcessEnv = <T extends string | number | boolean>({ 
    key, 
    type, 
    defaultValue 
}: { 
    key: string; 
    type: "string" | "number" | "boolean"; 
    defaultValue?: T 
}): T => {
    const value = process.env[key];

    if (value === undefined) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw new Error(`Environment variable ${key} is required but not set`);
    }

    switch (type) {
        case "string":
            return value as T;

        case "number":
            const numValue = Number(value);
            if (isNaN(numValue)) {
                throw new Error(`Environment variable ${key} must be a valid number, got: ${value}`);
            }
            return numValue as T;

        case "boolean":
            const lowerValue = value.toLowerCase();
            if (lowerValue === "true" || lowerValue === "1") {
                return true as T;
            } else if (lowerValue === "false" || lowerValue === "0") {
                return false as T;
            } else {
                throw new Error(`Environment variable ${key} must be 'true', 'false', '1', or '0', got: ${value}`);
            }
            
        default:
            throw new Error(`Unsupported type: ${type}`);
    }
};

export const config = {
    transport: readProcessEnv({ key: "TRANSPORT", type: "string" }),
    port: readProcessEnv({ key: "PORT", type: "number" }),
};