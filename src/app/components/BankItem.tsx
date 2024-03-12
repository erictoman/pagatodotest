/* eslint-disable @next/next/no-img-element */
import { Bank } from "../types";

const BankItem = ({ bank, onClick }: { bank: Bank; onClick?: () => void }) => {
  return (
    <article
      className="flex flex-col md:flex-row bg-white p-3 max-h w-[250px] md:h-[230px] md:w-[320px] md:h-[250px] rounded-lg"
      onClick={onClick}
      data-testid="bankItem"
    >
      <div className="flex flex-col md:justify-between">
        <h3>{bank.bankName}</h3>
        <img
          width={140}
          height={140}
          src={bank.url}
          alt={`Logo ${bank.bankName}`}
          className="rounded-lg h-[200px] object-cover md:h-[120px] md:w-[120px] w-full"
        />
      </div>
      <div className="md:px-2">
        <p className="my-2">{bank.description}</p>
        <p className="my-2">Edad: {bank.age}</p>
      </div>
    </article>
  );
};

export default BankItem;
