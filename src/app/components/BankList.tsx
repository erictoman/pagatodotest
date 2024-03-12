import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BankItem from "./BankItem";

export default function BankList() {
  const { banks } = useContext(AppContext);
  if (banks === null || banks.length === 0) {
    return (
      <div className="">
        <h2 className="text-center">No hay bancos para mostrar</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-rows-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-items-center gap-3">
      {banks.map((bank) => (
        <BankItem
          key={bank.bankName}
          bank={bank}
          onClick={() => {
            console.log(bank.bankName);
          }}
        />
      ))}
    </div>
  );
}
