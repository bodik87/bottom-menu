"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { clsx } from "clsx";

export function MyDrawer() {
  const [snap, setSnap] = useState("148px");
  const [query, setQuery] = useState("");

  return (
    <Drawer.Root
      snapPoints={["148px", "355px", 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
    >
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Portal>
        <Drawer.Content className="fixed max-w-md mx-auto flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[calc(100dvh_-_20px)] mx-[-1px] outline-none">
          <div className="p-4 rounded-t-[10px] flex-1">
            {snap !== 1 ? (
              <div className="flex justify-center">
                <svg
                  width="58"
                  height="13"
                  viewBox="0 0 58 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.647055 10.7676C0.2897 9.43392 1.08116 8.06307 2.41482 7.70572L28.9778 0.588196L30.2719 5.41782L3.70892 12.5353C2.37525 12.8927 1.00441 12.1012 0.647055 10.7676Z"
                    fill="#D9D9D9"
                  />
                  <path
                    d="M57.303 10.7676C57.6603 9.43392 56.8689 8.06307 55.5352 7.70572L28.9722 0.588196L27.6781 5.41782L54.2411 12.5353C55.5748 12.8927 56.9456 12.1012 57.303 10.7676Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </div>
            ) : (
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300" />
            )}
            <div
              className={clsx("flex flex-col max-w-md mx-auto w-full", {
                "overflow-y-auto": snap === 1,
                "overflow-hidden": snap !== 1,
              })}
            >
              <div style={{ height: "106px" }}>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className="mt-4 border-2 w-full px-4 py-2 rounded-lg outline-none"
                  onClick={() => setSnap(1)}
                  placeholder="Search"
                />
              </div>

              {query ? (
                <div>Result</div>
              ) : (
                <>
                  <div style={{ height: "207px" }}>Instruction</div>

                  <div>3</div>
                </>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
