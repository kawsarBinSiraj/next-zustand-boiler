"use client";
import { useEffect } from "react";
import useBearStore from "@/zustand-store/useBearStore";
import useStore from "@/zustand-store/useStore";

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
                <strong>({bears}) - with persist</strong> around here ... <br />
                <strong>({count}) - without persist</strong> around here ...
            </h1>
            <h1 className="display-5">
                Welcome to &nbsp;
                <strong className="text-primary">
                    <span>Next-14</span>, <span>Zustand-4</span>, <span>Bootstrap-5</span> ! &#128512;
                </strong>
            </h1>
            <div className="mt-4">
                <button
                    onClick={() => {
                        increase();
                        inc();
                    }}
                    className="btn btn-primary rounded-0 me-2"
                >
                    One up
                </button>
                <button
                    onClick={() => {
                        removeAll();
                        allRemove();
                    }}
                    className="btn btn-danger rounded-0"
                >
                    Remove All Bears
                </button>
            </div>
        </div>
    );
}
