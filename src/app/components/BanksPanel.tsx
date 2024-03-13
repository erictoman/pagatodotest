import useAppStore from "../stores/AppStore";
import Button from "./Button";

const BanksPanel = ({
  onSearchBarChange,
  text,
}: {
  onSearchBarChange: (text: string) => void;
  text: string;
}) => {
  const { sortByName, fetchBanks } = useAppStore();

  return (
    <div className="flex justify-between items-center">
      <label className="shadow p-2">
        Barra de búsqueda
        <input
          type="text"
          placeholder="BBVA"
          onChange={(e) => {
            onSearchBarChange(e.target.value);
          }}
          value={text}
        />
      </label>
      <div>
        <Button
          onClick={() => {
            sortByName();
          }}
        >
          A-z
        </Button>
        <Button
          onClick={() => {
            fetchBanks();
          }}
        >
          ⟳
        </Button>
      </div>
    </div>
  );
};

export default BanksPanel;
