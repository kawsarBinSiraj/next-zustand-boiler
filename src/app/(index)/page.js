"use client";
import { useEffect } from "react";
import useBearStore from "@/zustand-store/useBearStore";
import useStore from "@/zustand-store/useStore";
import ThemeChanger from "@/components/next-themes/theme-changer";
import { toastNotify } from "@/helper/app-helper";

export default function Home() {
    const { bears, increase, removeAll } = useBearStore();
    const { count, inc, allRemove } = useStore();

    /*  hydration handling for persist */
    useEffect(() => {
        useBearStore.persist.rehydrate();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="display-6 mb-4">
                <strong>{bears} - with persist </strong> <br />
                <strong>{count} - without persist</strong>
            </h1>
            <h1 className="display-5">
                Welcome to &nbsp;
                <strong className="text-primary">
                    <span>Next-14</span>, <span>Zustand-4</span>, <span>Bootstrap-5</span> ! &#128512;
                </strong>
            </h1>
            <div className="mt-4 d-flex gap-2">
                <button
                    onClick={() => {
                        increase();
                        inc();
                    }}
                    className="btn btn-primary rounded-0"
                >
                    One up
                </button>
                <button
                    onClick={() => {
                        removeAll();
                        allRemove();
                        toastNotify("success", '"Removed All Bears"');
                    }}
                    className="btn btn-danger rounded-0"
                >
                    Remove All Bears
                </button>
                <ThemeChanger />
            </div>
        </div>
    );
}
