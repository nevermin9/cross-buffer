import { ref, computed, type WritableComputedRef } from "vue";

export const useBrowserStorageModel = <T>(
    storageType: "localStorage" | "sessionStorage",
    key: string,
    defaultValue: T | null = null
): { model: WritableComputedRef<T | null> } => {
    const $model = ref<T | null>(null);

    const setIntoStorage = (val: T | null) => {
        if (typeof val === "string") {
            window[storageType].setItem(key, val);
            return;
        }
        if (val != null) {
            window[storageType].setItem(key, JSON.stringify(val));
        }
    };

    const getFromStorage = () => {
        const fromStorage = window[storageType].getItem(key);

        if (fromStorage == null) {
            return null;
        }

        try {
            const parsed = JSON.parse(fromStorage);
            return parsed;
        } catch (err) {
            if (err instanceof SyntaxError) {
                return fromStorage;
            }
            console.error(
                "[useBrowserStorageModel] Error parsing value from storage",
                err
            );
        }

        return null;
    };

    const model = computed<T | null>({
        get() {
            return $model.value;
        },
        set(val) {
            setIntoStorage(val);
            $model.value = val;
        },
    });

    function init() {
        const fromStorage = getFromStorage();

        if (fromStorage) {
            model.value = fromStorage;
        } else {
            setIntoStorage(defaultValue);
        }
    }

    init();

    return {
        model,
    };
};
