import BankItem from "./BankItem";

import useAppStore from "../stores/AppStore";
import { Bank } from "../types";

/**
 * Renders a list of banks.
 * @returns JSX.Element
 */
export default function BankList({
  banks,
  onDeleted,
}: {
  banks: Bank[] | null;
  onDeleted: () => void;
}) {
  const { deleteByBankName } = useAppStore();

  if (banks?.length === 0) {
    return (
      <div className="">
        <h2 className="text-center">No hay bancos para mostrar</h2>
      </div>
    );
  }
  return (
    <div className="grid grid-rows-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center place-items-center gap-3 my-4">
      {banks?.map((bank) => (
        <BankItem
          key={bank.bankName}
          bank={bank}
          onRemove={() => {
            deleteByBankName(bank.bankName);
            onDeleted();
          }}
        />
      ))}
    </div>
  );
}
