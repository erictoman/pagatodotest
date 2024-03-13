"use client";
import { useEffect, useState } from "react";
import { useStore } from "zustand";
import BankList from "./components/BankList";
import BanksPanel from "./components/BanksPanel";
import useAppStore from "./stores/AppStore";

export default function Home() {
  const [text, setText] = useState("");
  const banks = useStore(useAppStore, (state) => state.banks);
  useEffect(() => {
    useAppStore.persist.rehydrate();
  }, []);

  const useComputed = (texto: string) => {
    let results = banks?.filter((item) => {
      return item.bankName
        .toLocaleLowerCase()
        .includes(texto.toLocaleLowerCase());
    });
    return results || null;
  };

  const filteredBanks = useComputed(text);

  return (
    <section>
      <h2>Bancos</h2>
      <BanksPanel
        onSearchBarChange={(text) => {
          setText(text);
        }}
        text={text}
      />
      <BankList
        banks={text.length === 0 ? banks : filteredBanks}
        onDeleted={() => {
          setText("");
        }}
      />
    </section>
  );
}
