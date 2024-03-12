"use client";
import BankList from "./components/BankList";
import { AppContextProvider } from "./context/AppContext";

export default function Home() {
  return (
    <section>
      <AppContextProvider>
        <BankList />
      </AppContextProvider>
    </section>
  );
}
